import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";

// TODO: fix the imageLink and social link issue.

export function Position({ data, onClick, scale, position }) {
  const gl = useThree((state) => state.gl);

  console.log("POS DATA: ", data)

  return (
    <Html
      scale={scale}
      position={position}
      occlude
      transform
      center
      portal={{ current: gl.domElement.parentNode }}
    >
      <div className="z-0 top-60 left-60 w-[80rem] h-[48rem]  bg-[url('/images/svgs/year-dept.svg')] bg-cover bg-center cursor-pointer">
        <div onClick={onClick} className="absolute flex items-center justify-center left-[30rem] top-[16rem]  w-48 h-[15.5rem]">
          {data?.imageLink && (
            <img
              
              className="opacity-55 rounded-[18px] object-center object-fill hover:brightness-150 ease-in-out duration-100"
              src={data?.imageLink}
              width={200}
              alt="picture"
            />
          )}
        </div>
        <div className="absolute flex flex-col justify-center pb-10 p-5 top-[20rem] right-[25rem] h-32 w-44 ">
          <div className="text-white text-[3rem]">{data?.position}</div>
        </div>
        {/* <img src="/images/svgs/year-dept.svg" /> */}
      </div>
    </Html>
  );
}

export function SocialIcons({ data }) {
  const gl = useThree((state) => state.gl);
  const viewPort = useThree((state) => state.viewport);
  // console.log("VIEWPORT:", viewPort.width);
  const positionFactor = viewPort.width / 25;

  // console.log("DATA:", data);

  return (
    <Html
      scale={[0.5, 0.5, 0.5]}
      position={[10 * positionFactor, -2, -0.7]}
      transform
      portal={{ current: gl.domElement.parentNode }}
    >
      <div className="w-auto h-auto p-0 z-50 ">
        <img className="" src="/images/svgs/social-icons-bg.svg" />

        <div className="absolute  h-44 w-44 top-24 left-32 cursor-pointer">
          <div className="absolute flex flex-row justify-between h-[23%] w-[85%] ml-4 mt-2 top-1/2 -translate-y-1/2 ">
            {data?.xLink && <Link href={data?.xLink}>
              <img
                className="p-1 w-9 rounded-[4px] hover:brightness-200 ease-in-out duration-100"
                src="/images/svgs/x.svg"
              />
            </Link>}
            {data?.githubLink && <Link href={data?.githubLink}>
              <img
                className="p-1 w-9 rounded-[4px] hover:brightness-200 ease-in-out duration-100"
                src="/images/svgs/github.svg"
              />
            </Link>}
          </div>
          <div className="absolute flex flex-col justify-between h-[85%] w-[23%] mt-[1.5rem] ml-[0.3rem] left-1/2 -translate-x-1/2 ">
            {data?.linkedinLink && <Link href={data?.linkedinLink}>
                <img
                  className="p-1 w-9 rounded-[4px] hover:brightness-200 ease-in-out duration-100"
                  src="/images/svgs/linkedin.svg"
                />
              </Link>}
              {/* {data?.email && <Link target="blank" href={`${data?.email}`}>
                <img
                  className="p-1 w-9 rounded-[4px] hover:brightness-200 ease-in-out duration-100"
                  src="/images/svgs/mail.svg"
                />
              </Link>} */}
           </div>
        </div>
      </div>
    </Html>
  );
}

export function NameYearDept({ data }) {
  const gl = useThree((state) => state.gl);
  const viewPort = useThree((state) => state.viewport);

  const positionFactor = viewPort.width / 25;

  return (
    <Html
      scale={[1, 1, 1]}
      position={[-6 * positionFactor, 2.5, -0.7]}
      occlude
      transform
      portal={{ current: gl.domElement.parentNode }}
    >
      <div className=" w-3/5">
        <div className="font-Wallpoet text-3xl text-white">
          {data?.fullName}
        </div>
        <div className="text-sm bg-gradient-to-r from-[#99D3FF] to-[#0078D4] bg-clip-text text-transparent">
          {data?.year}, {data?.aboutMe}
        </div>
      </div>
    </Html>
  );
}

export function PrevNextButtons({handlePrev, handleNext}) {

    const gl = useThree((state) => state.gl);

    return (
        <Html
          scale={[0.5, 0.5, 0.5]}
          position={[-5, -0.75, 0]}
          portal={{ current: gl.domElement.parentNode }}
        >
            <dir className="flex flex-row z-50 justify-between item-center h-96 w-full text-[#f0f0f0]">
                <div onClick={handlePrev} className="flex items-center hover:brightness-150 justify-center font-bold bg-[url('/images/svgs/spo-button.svg')] bg-center bg-cover h-48 w-72 text-[1rem]">Previous</div>

                <div onClick={handleNext} className="flex items-center hover:brightness-150 justify-center font-bold bg-[url('/images/svgs/spo-button.svg')] bg-center bg-cover h-48 w-72 text-[1rem]">Next</div>
            </dir>
        </Html>
    )
}
