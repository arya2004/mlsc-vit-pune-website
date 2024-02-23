import React, {useState} from 'react'

import MemberData from './MemberData'
import cn from '../../utils/cn'

export default function WhichDomain({whichDomain, teamData}){

    const [memberData, setMemberData] = useState("")
    const [clickCount, setClickCount] = useState(false)

    return (
    <div className="flex flex-col items-center justify-start w-full h-full pb-14 ">
      <span className="flex flex-row gap-5 justify-center pt-4 pb-2 text-[#6A6A6A] border-b-[1px] border-[#6A6A6A]">
        {whichDomain}
      </span>
      <div className="w-full h-full overflow-y-auto">
        
        {teamData?.map((value, index) => {
          if(value.domain === whichDomain){
            return (<div key={index} onClick={()=>{setMemberData(value.id);}} className={cn(memberData === value.id && clickCount? "h-auto": "h-16","relative flex flex-row items-center p-2 text-lg text-[#6A6A6A] w-full border-b-[1px] border-[#6A6A6A] hover:bg-[#282828] cursor-pointer ease-in-out duration-100")}> 
                <MemberData member={value} setClickCount={setClickCount} clickCount={clickCount}/>
            </div>)
         }})} 
        
      </div>
    </div>
    );
}