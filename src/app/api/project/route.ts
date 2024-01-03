
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

import prisma from '../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers




export async function GET(  request: Request,) {

    const data = await prisma.project.findMany({
        include: {
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
  


// Notice the funciton definiton:
export async function POST(req: Request) {
    const res = await req.json();
    console.log(res);
    
    try {
        const {  
            title,
            gitUrl,
            imageLink,
            description,
            maintainerId
          } = res;

            await prisma.project.create({
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