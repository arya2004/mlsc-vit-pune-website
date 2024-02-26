import cn from "../../utils/cn";
import React, { useState } from "react";
import axios from "axios";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default function MemberData({ member, className, setClickCount, clickCount }) {

  const {data: uSession} = useSession();

    const handleDelete = async() =>{
        const res = async() =>{
            try {
                const {data, status} = await axios.delete(`/api/team/${member.id}`);
                // console.log(data)
                // console.log(status)
            } catch (error) {
                
                console.error(error);

            }
        }
        res();
        const cache = await caches.open("/api/jobs/teams");
        window.location.reload();
    }
    // console.log(member.email, uSession.user?.email)
    
    // console.log(serverSession);

  const [update, setUpdate] = useState(false);
  return (
    <div
      className={
        "flex flex-col items-center justify-start w-full h-full pb-14" +
        className
      }
    >
      <span className="flex flex-row gap-6 justify-center pt-4 pb-2 text-[#6A6A6A]">
        <div onClick={()=>setClickCount(!clickCount)} className="relative hover:bg-[#424242] p-1 text-sm rounded-[3px] w-auto h-auto">{member.fullName}</div>
        {member.email === uSession.user?.email &&   
        <div className="w-auto flex flex-row h-full gap-2">
          <div
            onClick={() => setUpdate(!update)}
            className={cn(
              update
                ? "bg-green-500 text-[#f0f0f0]"
                : "bg-[#424242] text-[#6a6a6a]",
              "flex items-center justify-center hover:bg-[#525252] rounded-[3px] w-auto h-[80%] text-sm p-2"
            )}
          >
            update
          </div>
          <div onClick={handleDelete} className="flex items-center justify-center bg-[#424242] text-[#6a6a6a] hover:bg-[#525252] active:bg-red-500 rounded-[3px] w-auto h-[80%] text-sm p-2">
            delete
          </div>


        </div>
        }
      </span>
                {update ? <UpdateData member={member} /> : <ReadOnlyData member={member} />}
      
    </div>
  );
}


const ReadOnlyData = ({ member }) => {
    return (
        <div className="flex flex-col gap-2 w-full h-full overflow-y-auto">
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Name:
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.fullName}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Domain:
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.domain}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Positon:
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.position}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Year
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.year}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Department:
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.aboutMe}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            GithubID:
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.githubLink}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            LinkedInID:
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.linkedinLink}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            MailID
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.email}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            X_ID
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.xLink}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            ImageURL:
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.imageLink}
          </div>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            AvatarURL
          </div>
          <div className="flex items-center justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {member.modelLink}
          </div>
        </div>
      </div>
    )
}

const UpdateData = ({ member }) => {

    const domainOptions = [ "__select__", "Core", "AI-ML", "App dev", "Community management", "Event Management", "IoT", "Multimedia", "Partnership", "Web development", "Web3",];
    const positonOptions = [ "__select__", "President", "Vice President", "Management Head", "Technical Head", "Multimedia Head", "Domain lead", "Coordinator",]
    const yearOptions = ["__select__", "2021-22", "2022-23", "2023-24"]
    const departmentOptions = ["__select__", "CS", "CS-AI", "CS-ML", "IT", "AI-DS", "EnTc", "Mech", "Chem", "Instru",]

    const [updateModal, setUpdateModal] = useState(false);

    const [updatedData, setUpdatedData] = useState({
        academicYear: member.year,
        name: member.fullName,
        domain: member.domain,
        department: member.aboutMe,
        position: member.position,
        photoURL: member.imageLink,
        modelURL: member.modelLink,
        mail: member.email,
        githubID: member.githubLink,
        twitterID: member.xLink,
        linkedinID: member.linkedinLink,
      });

      console.log(updatedData)
    
      const handleUpdateChange = (e) => {
       
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
        
      }

      const handleUpdate = async (e) => {
        const res = async () => {
            try {
              const updatedBody = {
                fullName: updatedData.name,
                domain: updatedData.domain,
                position: updatedData.position,
                year: updatedData.academicYear,
                xLink: updatedData.twitterID,
                email: updatedData.mail,
                linkedinLink: updatedData.linkedinID,
                githubLink: updatedData.githubID,
                aboutMe: updatedData.department,
                imageLink: updatedData.photoURL,
                modelLink: updatedData.modelURL,
              };

              console.log("UPDATED BODY")
              console.log(updatedBody)
              
              const {data, status} = await axios.put(`/api/team/${member.id}`, updatedBody);
              console.log(data, status)

                if(status === 200) alert("Data updated successfully!")
                

            } catch (error) {
              console.error(error);
            }
       }
         await res();
         const cache = await caches.open("/api/jobs/teams");
       window.location.reload();
    }

    return (
        <div className="flex flex-col gap-2 w-full h-full overflow-y-auto">
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Name:
          </div>
          <input onChange={handleUpdateChange} name="name" type="text" defaultValue={member.fullName} className="flex items-center px-2 justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis" />
         
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Domain:
          </div>
          <select onChange={handleUpdateChange} name="domain" defaultValue={member.domain} className="flex items-center px-2 justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {domainOptions.map((value, index) => {
                return (
                    <option className="bg-[#282828] text-xs p-1 text-[#6a6a6a]" key={index} value={value}>{value}</option>
                )
            })}
          </select>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Positon:
          </div>
          <select onChange={handleUpdateChange} name="position" defaultValue={member.position} className="flex items-cent px-2er justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {positonOptions.map((value, index) => {
                return (
                    <option className="bg-[#282828] text-xs p-1 text-[#6a6a6a]" key={index} value={value}>{value}</option>
                )
            })}
          </select>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Year
          </div>
          <select onChange={handleUpdateChange} name="academicYear" defaultValue={member.year} className="flex items-center j px-2ustify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {yearOptions.map((value, index) => {
                return (
                    <option className="bg-[#282828] text-xs p-1 text-[#6a6a6a]" key={index} value={value}>{value}</option>
                )
            })}
          </select>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            Department:
          </div>
          <select onChange={handleUpdateChange} name="department" defaultValue={member.aboutMe} className="flex items-cente px-2r justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            {departmentOptions.map((value, index) => {
                return (
                    <option className="bg-[#282828] text-xs p-1 text-[#6a6a6a]" key={index} value={value}>{value}</option>
                )
            })}
          </select>
        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            GithubID:
          </div>
          <input onChange={handleUpdateChange} name="githubID" type="text" defaultValue={member.githubLink} className="flex items-cent px-2er justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis" />

        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            LinkedInID:
          </div>
          <input onChange={handleUpdateChange} name="linkedinID" type="text" defaultValue={member.linkedinLink} className="flex items-ce px-2nter justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis" />

        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            MailID
          </div>
          <input onChange={handleUpdateChange} name="mail" type="text" defaultValue={member.email} className="flex items-center ju px-2stify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis" />

        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            X_ID
          </div>
          <input onChange={handleUpdateChange} name="twitterID" type="text" defaultValue={member.xLink} className="flex items-center ju px-2stify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis" />

        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            ImageURL:
          </div>
          <input onChange={handleUpdateChange} name="photoURL" type="text" defaultValue={member.imageLink} className="flex items-cente px-2r justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis" />

        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <div className="flex items-center justify-center w-[30%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis">
            AvatarURL
          </div>
          <input onChange={handleUpdateChange} name="modelURL" type="text" defaultValue={member.modelLink} className="flex items-cente px-2r justify-center w-[70%] h-full rounded-[5px] bg-[#282828] text-sm truncate text-ellipsis" />

        </div>
        <div className="flex flex-row w-full h-10 justify-around gap-3">
          <button onClick={handleUpdate} type="submit" className="flex items-center justify-center bg-[#0078D4] hover:bg-[#4d95cc] h-4/5 rounded-[4px] text-[#f0f0f0] text-sm w-auto p-3">update data</button>
        </div>
      </div>
    )
}