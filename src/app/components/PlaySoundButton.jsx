// import { GiSoundOn, GiSoundOff } from "react-icons";

function PlaySoundButton({setPlayBGM, playBGM}) {
  return(
    <button onClick={() => setPlayBGM(!playBGM)} className="absolute top-8 left-12 w-10 h-10 rounded-[8px] border-1 border-[blue] bg-slate-700 ">
        🔈{/* {playBGM ? <GiSoundOn className="w-full h-full"/> : <GiSoundOff className="w-full h-full"/>} */}
    </button>
  )
}

export default PlaySoundButton;