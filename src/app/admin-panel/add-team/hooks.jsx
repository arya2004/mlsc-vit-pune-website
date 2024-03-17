"use server";

import { getServerSession } from 'next-auth';


export async function useServerSession(){

    const userSession = await getServerSession();

    console.log(userSession)

    return userSession;

}