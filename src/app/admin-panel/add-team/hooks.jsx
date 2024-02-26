import { getServerSession } from 'next-auth';


export async function useSession(){

    const userSession = await getServerSession();

    console.log(userSession)

    return userSession;

}