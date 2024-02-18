
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { kv } from '@vercel/kv';
import prisma from '../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers




export async function GET(  request: Request,) {

  try {

    const cached = await kv.get("projects");
    if(cached){
      console.log("Projects Chache HIT")
      return NextResponse.json(
        cached,
        {
          status: 200
        }
      );
    
  }else{
    console.log("Projects Chache MISS")
    const data = await prisma.project.findMany({
      include: {
          maintainer: true,
        },

  });
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