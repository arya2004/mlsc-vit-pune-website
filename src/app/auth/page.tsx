"use server"
import { getServerSession } from 'next-auth';
import { authOptions } from '../../helpers/authOptions';
import { User } from '../user';
import { LoginButton, LogoutButton } from './auth';

export default  async function Home(){
    // console.log('Hello, Wld!');   
    const session = await getServerSession(authOptions)
    return (
        <div>
            <LoginButton/>
            <LogoutButton/>
            <h2 style={{color: 'red'}}>Server Session: 
            {JSON.stringify(session)}
            </h2>
            <h2 style={{color: 'green'}}>Client Sessionm
            <User/>
            </h2>
           
        </div>
    );
};


