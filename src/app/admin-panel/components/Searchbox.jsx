export default function Searchbox(){
    return (
        <div className="w-full h-14 p-2 bg-[#131416] rounded-[20px]">
            <div className="p-2 w-full h-full bg-[#232323] rounded-[13px] flex flex-row justify-between">
                <img src="/icons/command-form.svg" alt="" />
                <input type="text" className="bg-[#232323] border-0 w-full" placeholder="search" />
                <img src="/icons/search-form.svg" alt="" />
            </div>
        </div>
    )
}