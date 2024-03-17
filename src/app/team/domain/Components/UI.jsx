import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";

export function Position({imagelink, position}) {

    const gl = useThree((state) => state.gl);

    return (
        <Html scale={[0.55, 0.55, 0.55]} position={[5.5,4.5,-1]} occlude transform center portal={{ current: gl.domElement.parentNode }} >
            <div className="z-50 top-50 left-60 w-auto h-0 bg-slate-500">
                <div className="absolute w-24 h-32 bg-slate-600 left-72 top-40">
                    <Image src={imagelink} width={24} height={32} />
                </div>
                <div className="absolute flex flex-col justify-center pb-10 p-5 top-40 left-96 h-32 w-44 ">
                    <div className="text-white text-2xl">
                        {position}
                    </div>
                </div>
                <img src="/images/svgs/year-dept.svg" />
            </div>
        </Html>
    )
}

export function SocialIcons({xlink, linkedInlink, githublink}) {

    const gl = useThree((state) => state.gl);
    const viewPort = useThree((state) => state.viewport);
    // console.log("VIEWPORT:", viewPort.width);
    const positionFactor = viewPort.width / 25;

    return (
        <Html scale={[0.5, 0.5, 0.5]} position={[10*positionFactor,-2,-0.7]} transform portal={{ current: gl.domElement.parentNode }} >
            <div className="w-auto h-auto p-0 ">
                <img className="" src="/images/svgs/social-icons-bg.svg" />

                <div className="absolute  h-44 w-44 top-24 left-32 cursor-pointer">
                    <div className="absolute flex flex-row justify-between h-[23%] w-[85%] ml-4 mt-2 top-1/2 -translate-y-1/2 ">
                        {/* <Link href={xlink} ><img className="p-1 rounded-[4px] hover:brightness-200 ease-in-out duration-100" src="/images/svgs/x.svg" /></Link> */}
                        {/* <Link href={githublink} ><img className="p-1 rounded-[4px] hover:brightness-200 ease-in-out duration-100" src="/images/svgs/github.svg" /></Link> */}
                    </div>
                    <div className="absolute flex flex-col justify-between w-[20%] h-[85%] mt-5 ml-1 left-1/2 -translate-x-1/2 ">
                        <img className="p-1 rounded-[4px] hover:brightness-200 ease-in-out duration-100" src="/images/svgs/linkedin.svg" />
                        {/* <img className="p-1 rounded-[4px] hover:brightness-200 ease-in-out duration-100" src="/images/svgs/instagram.svg" /> */}
                    </div>
                </div>

            </div>
        </Html>
    )
}

export function NameYearDept(){

    const gl = useThree((state) => state.gl);
    const viewPort = useThree((state) => state.viewport);

    const positionFactor = viewPort.width / 25;

    return(
        <Html scale={[1, 1, 1]} position={[-8*positionFactor,2.5,-0.7]} occlude transform portal={{ current: gl.domElement.parentNode }} >
            <div className=" w-3/5">
                <div className="font-Wallpoet text-3xl text-white">
                    Soham Panchal{/* TODO: Name */}
                </div>
                <div className="text-sm bg-gradient-to-r from-[#99D3FF] to-[#0078D4] bg-clip-text text-transparent">
                    Third - Year, CS{/* TODO: position */}
                </div>
            </div>
        </Html>
    )
}
