import { GiSoundWaves } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";
import { useMLSCStore } from "../store/MLSCStore";
import cn from "../utils/cn";

function PlaySoundButton({}) {

  const playBGM = useMLSCStore((state) => state.playBGM);
  const setPlayBGM = useMLSCStore((state) => state.setPlayBGM);
  return(
    <button onClick={() => setPlayBGM(!playBGM)} className="absolute flex items-center justify-center top-8 right-12 w-12 h-12 border-sky-100 border-2 rounded-full bg-[#143056] cursor-pointer ">
      {playBGM ? <GiSoundOn className="text-[#f0f0f0] text-2xl" /> : <GiSoundOff className="text-[#f0f0f0] text-2xl" />}
    </button>
  )
}

export default PlaySoundButton;