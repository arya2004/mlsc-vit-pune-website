import { NextRequest, NextResponse } from "next/server";
import { kv } from '@vercel/kv';
import prisma from '../../../../../prisma/client'


const handleJobs = async (req: NextRequest) => {
    try {
        const url = req.url;
        const revalidationType : PossibleRoutes = url.split('/').reverse()[0] as PossibleRoutes;
        
        if (revalidationType === 'events') {
            const events =  await prisma.event.findMany({
                
            })
            if (events) {
                await kv.set("events", JSON.stringify(events), {
                    ex: 1000,
                })
                
            
                return NextResponse.json(
                    {
                        status: 200,
                        body: events,
                    }
                )
            }
        
        } else if (revalidationType === 'projects') {
            const projects =  await prisma.project.findMany({})
            if (projects) {
                await kv.set("projects", JSON.stringify(projects), {
                    ex: 1000,
                })
            
                return NextResponse.json(
                    {
                        status: 200,
                        body: projects,
                    }
                )
            }
            console.log("projects cache re-validated")
        } else if (revalidationType === 'teams') {
            const projects =  await prisma.user.findMany({})
            if (projects) {
                await kv.set("team", JSON.stringify(projects), {
                    ex: 1000,
                })
            
                return NextResponse.json(
                    {
                        status: 200,
                        body: projects,
                    }
                )
            }
            console.log("projects cache re-validated")
        } else if (revalidationType === 'blogs') {
            const blogs =  await prisma.blog.findMany({})
            if (blogs) {
                await kv.set("blogs", JSON.stringify(blogs), {
                    ex: 1000,
                })
            
                return NextResponse.json(
                    {
                        status: 200,
                        body: blogs,
                    }
                )
            }
            console.log("blogs cache re-validated")
        }

        return NextResponse.json({ url });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }

}

type PossibleRoutes = "events" | "projects" | "teams" | "blogs" 

export { handleJobs as GET };
