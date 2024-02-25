
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import {kv} from '@vercel/kv';
import prisma from '../../../../prisma/client'
//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers




export async function GET(  request: Request,) {

    try {
      
      const cached = await kv.get("blogs");
      if(cached){
        console.log("Blogs Chache HIT")
        return NextResponse.json(
          cached,
          {
            status: 200
          }
        );
      }else{
        console.log("Blogs Chache MISS")
        const data = await prisma.blog.findMany({
          include: {
              author: true,
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
          title     ,
          published  ,
          link      ,
          description  ,
          imageUrl  ,
          domain   ,
          authorId    
          } = res;

            await prisma.blog.create({
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