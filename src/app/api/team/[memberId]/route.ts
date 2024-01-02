// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

import prisma from '../../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers

interface Post {
    title: string;
    content: string | null;
    published: boolean;
}


export async function GET(  request: Request,
    { params }: { params: { memberId: string } }
    ) {

    const memberId = params.memberId 
    const data = await prisma.user.findFirst({
        where: {
            id: Number(memberId),
        
        },
        
    });
    return NextResponse.json(
      data,
      {
        status: 405
      }
    );
  }
  
  

// export async function POST(request: Request) {
//     const res = await request.json()
//     return Response.json({ res })
//   }