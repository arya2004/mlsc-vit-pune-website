
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

import prisma from '../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers




export async function GET(  request: Request,) {

    const data = await prisma.user.findMany({});
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
            fullName,
            domain,
            position, 
            year,
            xLink,
            linkedinLink,
            githubLink,
            aboutMe,
            imageLink,} = res;

            await prisma.user.create({
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