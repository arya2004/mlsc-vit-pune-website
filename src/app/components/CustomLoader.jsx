import { useProgress } from "@react-three/drei";
import cn from '../../app/utils/cn'
import { Suspense } from "react";

export default function CustomLoader({urlIndex}) {

    const photoURLs = ['/images/loader-images/core-team-bg.png', '/images/loader-images/mlsc-team-tt.jpg'];

    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
        <div className={cn(progress < 100?"absolute z-50 left-0 right-0 top-0 bottom-0 h-screen w-screen flex lg:flex-row flex-col items-center justify-evenly bg-cover bg-center bg-black":"overflow-hidden opacity-0 pointer-events-none")} >
            
            <div className="lg:w-1/2 lg:h-auto w-full flex items-center justify-center h-1/2">
                <img src={photoURLs[urlIndex]} alt="loader" className="w-[90%]" />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-[#f0f0f0] lg:w-1/2 lg:h-auto w-full h-1/2">
                <div suppressHydrationWarning className="lg:text-sm text-xs">Loading... {Math.floor(progress)}%</div>
                <div  className="h-[1px] bg-[#f0f0f046] w-[80%]">
                    <div className="h-full bg-[#f0f0f0]" style={{width: `${progress}%`}} />
                </div>
                
              
                <div  className="lg:text-xs truncate w-[80%]" suppressHydrationWarning>{item}</div>
               
                {/* <div>{loaded}</div>
                <div>{total}</div> */}
            </div>
        </div>
    )
}