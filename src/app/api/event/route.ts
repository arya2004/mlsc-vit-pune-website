
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { kv } from '@vercel/kv';
import prisma from '../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers




export async function GET(  request: Request,) {

    try {

      const cached = await kv.get("events");
      if(cached){
        console.log("Chache HIT")
        return NextResponse.json(
          cached,
          {
            status: 200
          }
        );
      }

      const data = await prisma.event.findMany({});
      return NextResponse.json(
        data,
        {
          status: 304
        }
      );
      
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
          name  ,
          tagline,
          date  ,
          description ,
          footfall ,
          eventSpan ,
          link ,
          organisingPeople
          } = res;

            await prisma.event.create({
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