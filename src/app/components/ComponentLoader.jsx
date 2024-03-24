import { useProgress } from "@react-three/drei";
import { Html } from "@react-three/drei";

export default function ComponentLoader(){
    
    const { active, progress, errors, item, loaded, total } = useProgress();

    return (
        <Html center >
            <div>
            <div suppressHydrationWarning className="lg:text-sm text-xs">Loading... {Math.floor(progress)}%</div>
                <div  className="h-[1px] bg-[#f0f0f046] w-[80%]">
                    <div className="h-full bg-[#f0f0f0]" style={{width: `${progress}%`}} />
                </div>
            </div>
        </Html>
    )
}