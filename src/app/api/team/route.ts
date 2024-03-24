
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { kv } from '@vercel/kv';
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../../prisma/client';
import { authOptions } from "../../../helpers/authOptions";

//Route handlers
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers




export async function GET(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams;
  const domainName = searchParams.get("domain");
  console.log(domainName);
  
  if(domainName != null){

  }
  

  try {
    const cached = await kv.get("team");
    if (cached) {


      if (domainName != null) {
        const filteredTeams = (cached as Array<any>).filter((team: { domain: string }) => team.domain === domainName);

        return NextResponse.json({
          cached: filteredTeams,
          status: 200
        });
      }

      console.log("Team Chache HIT")
      return NextResponse.json({
          cached,
          status: 200
        }
      );

    } else {
      console.log("Team Chache MISS")

      if(domainName != null){
        const data = await prisma.user.findMany({
          where: {
            domain: domainName
          }
        });
        return NextResponse.json({
          data,
          status: 200
        }
        );
      }


      const data = await prisma.user.findMany({});
      return NextResponse.json({
        data,
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
  console.log("Consoling res:")
  console.log(res);
  console.log("OUT")


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
      email,
      linkedinLink,
      githubLink,
      aboutMe,
      imageLink,
      modelLink } = res;

    const user = await prisma.user.create({
      data: {
        domain: domain,
        fullName: fullName,
        position: position,
        year: year,
        xLink: xLink,
        linkedinLink: linkedinLink,
        githubLink: githubLink,
        aboutMe: aboutMe,
        imageLink: imageLink,
        modelLink: modelLink,
        email: email
      }
    })

    console.log(user);
    return NextResponse.json(
      {
        message: "Ok",
        user: user,
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        status: 500,
      }
    );
  }
}