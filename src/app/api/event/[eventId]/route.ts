// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

import prisma from '../../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers



export async function GET(  request: Request,
    { params }: { params: { eventId: string } }
    ) {

    const eventId = params.eventId 
    const data = await prisma.event.findFirst({
        where: {
            id: Number(eventId),
        
        }
        
    });
    return NextResponse.json(
      data,
      {
        status: 405
      }
    );
  }

  export async function PUT(  request: Request,
    { params }: { params: { eventId: string } }
    ) {

    const eventId = params.eventId
    const res = await request.json();
    const {  
      name  ,
      tagline,
      date  ,
      description ,
      footfall ,
      eventSpan ,
      link ,
      organisingPeople,} = res;

        const updatedUser = await prisma.event.update({
            where: {
                id: Number(eventId),
            
            },
            data: {
               
              name: name  ,
              tagline: tagline,
              date : date ,
              description: description ,
              footfall: footfall ,
              eventSpan: eventSpan ,
              link: link ,
              organisingPeople: organisingPeople,
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
    { params }: { params: { eventId: string } }
    ) {

    const eventId = params.eventId 
    

        const updatedUser = await prisma.event.delete({
            where: {
                id: Number(eventId),
            
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