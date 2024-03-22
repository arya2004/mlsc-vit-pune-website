import { useProgress } from "@react-three/drei";
import { Html } from "@react-three/drei";

export default function ComponentLoader(){
    
    const { active, progress, errors, item, loaded, total } = useProgress();

    return (
        <Html center >
            <div>
                <div suppressHydrationWarning className="text-sm">Loading... {progress}%</div>
                <div  className="h-[1px] bg-[#f0f0f0]" style={{width: `${progress*3}px`}} />
            </div>
        </Html>
    )
}