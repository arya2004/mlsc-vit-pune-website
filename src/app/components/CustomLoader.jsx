import { useProgress } from "@react-three/drei";
import cn from '../../app/utils/cn'
import { Suspense } from "react";

export default function CustomLoader({urlIndex}) {

    const photoURLs = ['/images/loader-images/core-team-bg.png', '/images/loader-images/mlsc-team-tt.jpg'];

    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
        <div className={cn(progress < 100?"absolute z-50 left-0 right-0 top-0 bottom-0 h-full w-full flex lg:flex-row md:flex-col items-center justify-evenly bg-cover bg-center bg-black":"overflow-hidden opacity-0 pointer-events-none")} >
            
            <div className="w-1/2">
                <img src={photoURLs[urlIndex]} alt="loader" className="w-[90%]" />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-[#f0f0f0] w-1/2">
                <div suppressHydrationWarning className="text-sm">Loading... {Math.floor(progress)}%</div>
                <div  className="h-[1px] bg-[#f0f0f0]" style={{width: `${progress*8}px`}}></div>
                
              
                <div  className="text-xs" suppressHydrationWarning>{item}</div>
               
                {/* <div>{loaded}</div>
                <div>{total}</div> */}
            </div>
        </div>
    )
}