
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

import prisma from '../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers




export async function GET(  request: Request,) {

    const data = await prisma.blog.findMany({
        include: {
            author: true,
          },

    });
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
        const {  
          title     ,
          published  ,
          link      ,
          description  ,
          imageUrl  ,
          domain   ,
          authorId    
          } = res;

            await prisma.blog.create({
                data: {
                  title: title     ,
                  published: published  ,
                  link: link      ,
                  description  ,
                  imageUrl  ,
                  domain   ,
                  author : {
                        connect: {
                          id: Number(authorId),
                        },
                    }
                },
              })


              return NextResponse.json(
                { message: "Ok" },
                {
                  status: 200
                }
              );
    } catch (error) {
      return NextResponse.json(
        { message: error.message },
        {
          status: 500,
        }
      );
    }
  }