// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

import prisma from '../../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers



export async function GET(  request: Request,
    { params }: { params: { projectId: string } }
    ) {

    const projectId = params.projectId 
    const data = await prisma.project.findFirst({
        where: {
            id: Number(projectId),
        
        },include: {
            maintainer: true,
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
    { params }: { params: { projectId: string } }
    ) {

    const projectId = params.projectId
    const res = await request.json();
    const {  
        title,
        gitUrl,
        imageLink,
        description,
        maintainerId} = res;

        const updatedUser = await prisma.project.update({
            where: {
                id: Number(projectId),
            
            },
            data: {
               
                title: title,
                gitUrl: gitUrl,
                imageLink : imageLink,
                description : description,
                maintainer : {
                    connect: {
                      id: Number(maintainerId),
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
    { params }: { params: { projectId: string } }
    ) {

    const projectId = params.projectId 
    

        const updatedUser = await prisma.project.delete({
            where: {
                id: Number(projectId),
            
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