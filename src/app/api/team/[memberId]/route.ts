// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from "next/server";

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
        
        },include: {
            projects: true,
          },
        
    });
    return NextResponse.json(
      data,
      {
        status: 405
      }
    );
  }

  export async function PUT(  request: NextRequest) {

    const memberId = request.url.split('/').reverse()[0]; 
    const res = await request.json();

    console.log("MEMBER ID")
    console.log(memberId, res)

    const {  
        fullName,
        domain,
        position, 
        year,
        email,
        xLink,
        linkedinLink,
        githubLink,
        aboutMe,
        imageLink,
        modelLink,
       } = res;

        const updatedUser = await prisma.user.update({
            where: {
                id: Number(memberId),
            
            },
            data: {
                fullName: fullName,
                domain: domain,
                position: position,
                year: year,
                email: email,
                xLink: xLink,
                linkedinLink: linkedinLink,
                githubLink: githubLink,
                aboutMe: aboutMe,
                imageLink: imageLink,
                modelLink: modelLink
            },
          })
  
        
   
    return NextResponse.json({
      updatedUser,
      status: 200,
    });
  }
  

  export async function DELETE(  request: Request,
    { params }: { params: { memberId: string } }
    ) {

    const memberId = params.memberId 
    

        const updatedUser = await prisma.user.delete({
            where: {
                id: Number(memberId),
            
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