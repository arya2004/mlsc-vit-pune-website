import { Html } from '@react-three/drei'
import cn from '../../app/utils/cn'
import Link from 'next/link'

import { useMLSCStore } from '../store/MLSCStore'


export default function NavButtons({showNavButtons}){

    const setPositionsInAbout = useMLSCStore((s) => s.setPositionsInAbout);
    return (
        
        <div className={cn(showNavButtons?"w-full h-full":"w-0 h-0 opacity-0 pointer-events-none","absolute top-0 left-0 right-0 bottom-0 z-50 flex flex-row items-center justify-evenly text-[#f0f0f0] font-bold text-wrap ease-in-out duration-300")}>
            <Link href='/team'><button className="w-[15rem] h-[10rem] hover:brightness-150 bg-[url('/images/svgs/spo-button.svg')] bg-center bg-cover">Team</button></Link>
            <Link href='/path-to-about'><button className="w-[15rem] h-[10rem] hover:brightness-150 bg-[url('/images/svgs/spo-button.svg')] bg-center bg-cover">Events</button></Link>
            <Link href='/path-to-about'><button onClick={()=>{setPositionsInAbout('projects')}} className="w-[15rem] h-[10rem] hover:brightness-150 bg-[url('/images/svgs/spo-button.svg')] bg-center bg-cover">Projects</button></Link>
            <Link href='/path-to-about'><button onClick={()=>{setPositionsInAbout('blogs')}} className="w-[15rem] h-[10rem] hover:brightness-150 bg-[url('/images/svgs/spo-button.svg')] bg-center bg-cover">Blogs</button></Link>
        </div>
        
    )
}