import { AiFillSound, AiOutlineSound } from "react-icons/ai";

function PlaySoundButton({setPlayBGM, playBGM}) {
  return(
    <button onClick={() => setPlayBGM(!playBGM)} className="absolute flex items-center justify-center bottom-8 right-12 w-10 h-10 rounded-[8px] border-1 border-[blue] bg-slate-800 cursor-pointer ">
        {/* {playBGM ? <GiSoundOn className="w-full h-full"/> : <GiSoundOff className="w-full h-full"/>} */}
        {playBGM ? <AiFillSound className="w-7 h-7" />: <AiOutlineSound className="w-7 h-7" />}
    </button>
  )
}

export default PlaySoundButton;