export default function MemberData({member, className}){
    return (
    <div className={"flex flex-col items-center justify-start w-full h-full pb-14"+className}>
      <span className="flex flex-row justify-center pt-4 pb-2 text-[#6A6A6A]">
        {member.fullName}
      </span>
      <div className="flex flex-col gap-2 w-full h-full overflow-y-auto">
        
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">Name:</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.fullName}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">Domain:</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.domain}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">Positon:</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.position}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">Year</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.year}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">Department:</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.aboutMe}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">GithubID:</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.githubLink}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">LinkedInID:</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.linkedinLink}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">MailID</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.email}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">X_ID</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.xLink}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">ImageURL:</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.imageLink}</div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
            <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">AvatarURL</div>
            <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">{member.modelLink}</div>
        </div>  
      </div>
    </div>
    );
}