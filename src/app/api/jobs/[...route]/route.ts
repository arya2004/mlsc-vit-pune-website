import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const handleJobs = async (req: NextApiRequest) => {
    try {
        const url = req.url;
        const revalidationType : PossibleRoutes = url.split('/').reverse()[0] as PossibleRoutes;

        if (revalidationType === 'events') {
            // get all events
            // update the vercel redis cache using @vercel/kv


            // const events = await prisma.event.findMany({
            //     select: {
            //         name: true,
            //         id: true,
            //     }
            // })
            // if (events) {
            //     await kv.set("events", JSON.stringify(events), {
            //         ex: 1000,
            //     })
            // console.log("events cache re-validated")
            //     return NextResponse.json(
            //         {
            //             status: 200,
            //             body: events,
            //         }
            //     )
            // }
            console.log("events cache re-validated")
        } else if (revalidationType === 'projects') {
            // Do similar to events
            console.log("projects cache re-validated")
        } else if (revalidationType === 'teams') {
            // Do similar to events
            console.log("teams cache re-validated")
        } else if (revalidationType === 'blogs') {
            // Do similar to events
            console.log("blogs cache re-validated")
        }

        return NextResponse.json({ url });
    } catch (error) {

    }
}

type PossibleRoutes = "events" | "projects" | "teams" | "blogs" 

export { handleJobs as GET };
