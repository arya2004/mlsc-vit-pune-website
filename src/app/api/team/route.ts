
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { kv } from '@vercel/kv';
import prisma from '../../../../prisma/client'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers




export async function GET(  request: Request,) {


  try {
    const cached = await kv.get("teams");
    if(cached){
      console.log("Team Chache HIT")
      return NextResponse.json(
        cached,
        {
          status: 200
        }
      );
    
  }else{
    console.log("Team Chache MISS")
    const data = await prisma.user.findMany({});
    return NextResponse.json(
      data,
      {
        status: 304
      }
    );
  }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
 
   
  }
  


// Notice the funciton definiton:
export async function POST(req: Request) {
    const res = await req.json();
    console.log(res);

    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        "Login to view this page",
        {
          status: 405
        }
      );
    }
    
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