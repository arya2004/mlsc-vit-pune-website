// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

import prisma from '../../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers



export async function GET(  request: Request,
    { params }: { params: { blogId: string } }
    ) {

    const blogId = params.blogId 
    const data = await prisma.blog.findFirst({
        where: {
            id: Number(blogId),
        
        },include: {
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

  export async function PUT(  request: Request,
    { params }: { params: { blogId: string } }
    ) {

    const blogId = params.blogId
    const res = await request.json();
    const {  
      title     ,
      published  ,
      link      ,
      description  ,
      imageUrl  ,
      domain   ,
      authorId  } = res;

        const updatedUser = await prisma.blog.update({
            where: {
                id: Number(blogId),
            
            },
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
    updatedUser,
      {
        status: 405
      }
    );
  }
  

  export async function DELETE(  request: Request,
    { params }: { params: { blogId: string } }
    ) {

    const blogId = params.blogId 
    

        const updatedUser = await prisma.blog.delete({
            where: {
                id: Number(blogId),
            
            }
          })
  
        
   
    return NextResponse.json(
        { message: "Deleted" },
      {
        status: 405
      }
    );
  
  }
  
  
  

// export async function POST(request: Request) {
//     const res = await request.json()
//     return Response.json({ res })
//   }