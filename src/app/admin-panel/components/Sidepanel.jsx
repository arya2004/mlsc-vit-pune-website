import Link from "next/link";

import { IoMdAdd } from "react-icons/io";
import { FiGrid, FiMonitor } from "react-icons/fi";
import { RiTeamLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { ImBlog } from "react-icons/im";
import { MdOutlineEventSeat } from "react-icons/md";

export default function Sidepanel() {
    return (
        <div className="flex flex-col justify-evenly items-center h-[96%] w-16 mt-4 rounded-[20px] bg-[#131416] text-[#818181]">
            <Link href='/admin-panel/dashboard' > <FiGrid className="h-7 w-7 hover:text-[#0078D4] active:text-[#75b1de]" /> </Link>
            <Link href='/admin-panel/add-team' > <RiTeamLine className="h-7 w-7 hover:text-[#0078D4] active:text-[#75b1de]"/> </Link>
            <Link href='/admin-panel/add-project' > <GoProjectSymlink className="h-7 w-7 hover:text-[#0078D4] active:text-[#75b1de]" /> </Link>
            <Link href='/admin-panel/add-blog' ><ImBlog className="h-7 w-7 hover:text-[#0078D4] active:text-[#75b1de]" /> </Link> 
            <Link href='/admin-panel/add-event' > <MdOutlineEventSeat className="h-7 w-7 hover:text-[#0078D4] active:text-[#75b1de]" /> </Link>
          </div>
    );
}