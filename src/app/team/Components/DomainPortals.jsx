import { Image } from "@react-three/drei"
import { degToRad, radToDeg } from "three/src/math/MathUtils";

import "../../../app/utils/extraGemotries"

export default function DomainPortals(){
    return (
        <>
            {/* <Image url="/images/domain-portals/" position={[12*Math.cos(degToRad(20)),  -5, 12*Math.sin(degToRad(20))]}  scale={[0.5, 0.5, 0.5]} rotation={[0, -Math.PI/1.75, 0]} text={'Core Team'} /> */}
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(20)),  1, 40*Math.sin(degToRad(20))]}   rotation={[0, -Math.PI/1.75, 0]}  url="/images/domain-portals/core.jpg"   >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(56)),  1, 40*Math.sin(degToRad(56))]}   rotation={[0, degToRad(210), 0]}  url="/images/domain-portals/event.jpg"   >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(92)),  1, 40*Math.sin(degToRad(92))]}   rotation={[0, degToRad(180), 0]} url="/images/domain-portals/community.jpg" >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(128)), 1, 40*Math.sin(degToRad(128))]}  rotation={[0, degToRad(140), 0]} url="/images/domain-portals/partnership.jpg" >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(164)), 1, 40*Math.sin(degToRad(164))]}  rotation={[0, degToRad(105), 0]} url="/images/domain-portals/multimedia.jpg" >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(200)), 1, 40*Math.sin(degToRad(200))]}  rotation={[0, degToRad(70), 0]} url="/images/domain-portals/iot.jpg" >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(236)), 1, 40*Math.sin(degToRad(236))]}  rotation={[0, degToRad(35), 0]} url="/images/domain-portals/web3.jpg" >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(272)), 1, 40*Math.sin(degToRad(272))]}  rotation={[0, degToRad(-5), 0]} url="/images/domain-portals/web.jpg"  >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(308)), 1, 40*Math.sin(degToRad(308))]}  rotation={[0, degToRad(-40), 0]} url="/images/domain-portals/app.jpg"  >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
            <Image scale={[10, 20]} radius={0.2} transparent position={[40*Math.cos(degToRad(344)), 1, 40*Math.sin(degToRad(344))]}  rotation={[0, degToRad(-70), 0]} url="/images/domain-portals/ai-ml.jpg" >
                <bentPlaneGeometry args={[0.4, 1, 1, 20, 20]} />
            </Image>
        </>
    )
}