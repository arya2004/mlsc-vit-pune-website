import { GiSoundWaves } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";
import { useMLSCStore } from "../store/MLSCStore";
import cn from "../utils/cn";

function PlaySoundButton({}) {

  const playBGM = useMLSCStore((state) => state.playBGM);
  const setPlayBGM = useMLSCStore((state) => state.setPlayBGM);
  return(
    <button onClick={() => setPlayBGM(!playBGM)} className="absolute flex items-center justify-center top-8 right-12 w-16 h-16 cursor-pointer ">
      {playBGM ? <div className="w-full h-full rounded-full opacity-85 bg-cover bg-center bg-[url('/icons/sound-button-on.jpeg')]"  />: <div className="w-full h-full rounded-full opacity-85 bg-cover bg-center bg-[url('/icons/sound-button-off.jpeg')]"  />}
    </button>
  )
}

export default PlaySoundButton;