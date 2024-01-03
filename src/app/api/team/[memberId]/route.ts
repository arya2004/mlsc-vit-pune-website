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

  export async function PUT(  request: Request,
    { params }: { params: { memberId: string } }
    ) {

    const memberId = params.memberId 
    const res = await request.json();
    const {  
        fullName,
        domain,
        position, 
        year,
        xLink,
        linkedinLink,
        githubLink,
        aboutMe,
        imageLink,} = res;

        const updatedUser = await prisma.user.update({
            where: {
                id: Number(memberId),
            
            },
            data: {
                fullName: fullName,
                domain: domain,
                position: position,
                year: year,
                xLink: xLink,
                linkedinLink: linkedinLink,
                githubLink: githubLink,
                aboutMe: aboutMe,
                imageLink: imageLink
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