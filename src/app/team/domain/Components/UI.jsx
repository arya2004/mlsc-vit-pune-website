import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";

// TODO: fix the imageLink and social link issue.

export function Position({data}) {

    const gl = useThree((state) => state.gl);

    return (
        <Html scale={[0.55, 0.55, 0.55]} position={[5.5,4.5,-1]} occlude transform center portal={{ current: gl.domElement.parentNode }} >
            <div className="z-0 top-50 left-60 w-auto h-0 bg-slate-500">
                <div className="absolute left-72 top-40">
                    <Image className="opacity-45" src={data?.imageLink} width={20*6} height={28*6} alt="picture" />
                </div>
                <div className="absolute flex flex-col justify-center pb-10 p-5 top-40 right-32 h-32 w-44 ">
                    <div className="text-white text-2xl">
                        {data?.position}
                    </div>
                </div>
                <img src="/images/svgs/year-dept.svg" />
            </div>
        </Html>
    )
}

export function SocialIcons({data}) {

    const gl = useThree((state) => state.gl);
    const viewPort = useThree((state) => state.viewport);
    // console.log("VIEWPORT:", viewPort.width);
    const positionFactor = viewPort.width / 25;

    console.log("DATA:", data)

    return (
        <Html scale={[0.5, 0.5, 0.5]} position={[10*positionFactor,-2,-0.7]} transform portal={{ current: gl.domElement.parentNode }} >
            <div className="w-auto h-auto p-0 ">
                <img className="" src="/images/svgs/social-icons-bg.svg" />

                <div className="absolute  h-44 w-44 top-24 left-32 cursor-pointer">
                    <div className="absolute flex flex-row justify-between h-[23%] w-[85%] ml-4 mt-2 top-1/2 -translate-y-1/2 ">
                        <Link href={data?.xLink} ><img className="p-1 rounded-[4px] hover:brightness-200 ease-in-out duration-100" src="/images/svgs/x.svg" /></Link>
                        <Link href={data?.githubLink} ><img className="p-1 rounded-[4px] hover:brightness-200 ease-in-out duration-100" src="/images/svgs/github.svg" /></Link>
                    </div>
                    <div className="absolute flex flex-col justify-center w-[20%] h-[85%] mt-5 ml-1 left-1/2 -translate-x-1/2 ">
                        {/* <img className="p-1 rounded-[4px] hover:brightness-200 ease-in-out duration-100" src="/images/svgs/instagram.svg" /> */}
                        <Link href={data?.linkedinLink} ><img className="p-1 rounded-[4px] hover:brightness-200 ease-in-out duration-100" src="/images/svgs/linkedin.svg" /></Link>
                    </div>
                </div>

            </div>
        </Html>
    )
}

export function NameYearDept({data}){

    const gl = useThree((state) => state.gl);
    const viewPort = useThree((state) => state.viewport);

    const positionFactor = viewPort.width / 25;

    return(
        <Html scale={[1, 1, 1]} position={[-6*positionFactor,2.5,-0.7]} occlude transform portal={{ current: gl.domElement.parentNode }} >
            <div className=" w-3/5">
                <div className="font-Wallpoet text-3xl text-white">
                    {data?.fullName}
                </div>
                <div className="text-sm bg-gradient-to-r from-[#99D3FF] to-[#0078D4] bg-clip-text text-transparent">
                    {data?.year}, {data?.aboutMe}
                </div>
            </div>
        </Html>
    )
}
