// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

import prisma from '../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers

interface Post {
    title: string;
    content: string | null;
    published: boolean;
}


export async function GET() {
    const data = await prisma.post.findMany();
    return NextResponse.json(
      data,
      {
        status: 405
      }
    );
  }
  
  // Notice the funciton definiton:
  export async function POST(req: Request) {
    const res = await req.json();
    console.log(res);
    
    try {
        const {title, content, published} = res;
             await prisma.post.create({
                data: {
                    title: title,
                    content: content,
                    published: published
                },
              })
              return Response.json(
                { error: "Ok" },
                {
                  status: 200
                }
              );
    } catch (error) {
      return NextResponse.json(
        { error: error.message },
        {
          status: 500,
        }
      );
    }
  }

// export async function POST(request: Request) {
//     const res = await request.json()
//     return Response.json({ res })
//   }