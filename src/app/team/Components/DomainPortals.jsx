import { Image } from "@react-three/drei"
import { degToRad, radToDeg } from "three/src/math/MathUtils";

export default function DomainPortals(){
    return (
        <>
            {/* <Image url="/images/domain-portals/" position={[12*Math.cos(degToRad(20)),  -5, 12*Math.sin(degToRad(20))]}  scale={[0.5, 0.5, 0.5]} rotation={[0, -Math.PI/1.75, 0]} text={'Core Team'} /> */}
            <Image scale={[3, 15]} transparent opacity={5}  position={[35*Math.cos(degToRad(56)),  -1, 35*Math.sin(degToRad(56))]}   rotation={[0, degToRad(210), 0]}  url="/images/domain-portals/event.jpg"   />
            <Image scale={[3, 15]} transparent opacity={5}  position={[35*Math.cos(degToRad(92)),  -1, 35*Math.sin(degToRad(92))]}   rotation={[0, degToRad(180), 0]} url="/images/domain-portals/community.jpg" />
            <Image scale={[3, 15]} transparent opacity={5}  position={[35*Math.cos(degToRad(128)), -1, 35*Math.sin(degToRad(128))]}  rotation={[0, degToRad(140), 0]} url="/images/domain-portals/partnership.jpg" />
            <Image scale={[3, 15]} transparent opacity={5}  position={[35*Math.cos(degToRad(164)), -1, 35*Math.sin(degToRad(164))]}  rotation={[0, degToRad(105), 0]} url="/images/domain-portals/multimedia.jpg" />
            <Image scale={[3, 15]} transparent opacity={5}  position={[35*Math.cos(degToRad(200)), -1, 35*Math.sin(degToRad(200))]}  rotation={[0, degToRad(70), 0]} url="/images/domain-portals/iot.jpg" />
            <Image scale={[3, 15]} transparent opacity={5}  position={[35*Math.cos(degToRad(236)), -1, 35*Math.sin(degToRad(236))]}  rotation={[0, degToRad(35), 0]} url="/images/domain-portals/web3-dev.jpg" />
            <Image scale={[3, 15]} transparent opacity={5}  position={[35*Math.cos(degToRad(272)), -1, 35*Math.sin(degToRad(272))]}  rotation={[0, degToRad(0), 0]} url="/images/domain-portals/web-dev.jpg"  />
            <Image scale={[3, 15]} transparent opacity={5}  position={[35*Math.cos(degToRad(308)), -1, 35*Math.sin(degToRad(308))]}  rotation={[0, degToRad(-35), 0]} url="/images/domain-portals/app-dev.jpg"  />
            <Image scale={[3, 15]} transparent opacity={5}  position={[35*Math.cos(degToRad(344)), -1, 35*Math.sin(degToRad(344))]}  rotation={[0, degToRad(-70), 0]} url="/images/domain-portals/ai-ml.jpg" />
        </>
    )
}