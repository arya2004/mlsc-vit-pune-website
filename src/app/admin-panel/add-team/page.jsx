"use client";
import { useState } from "react";

import {Textboxico, Textbox, Selectbox} from "../components/Textbox";

import { IoMdAdd } from "react-icons/io";
import { FiGrid, FiMonitor } from "react-icons/fi";
import { RiTeamLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { ImBlog } from "react-icons/im";
import { MdOutlineEventSeat } from "react-icons/md";

const AddTeamMember = () => {
  const [formData, setFormData] = useState({
    academicYear: "",
    name: "",
    domain: "",
    position: "",
    photoURL: "",
    githubID: "",
    twitterID: "",
    linkedinID: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-row justify-center bg-[#666666] h-screen w-screen text-[#F0F0F0]">
      <div className="flex flex-col items-center p-5 h-full w-3/5 bg-slate-700">
        <div className="flex flex-row items-center w-full h-[25%] rounded-t-[40px] rounded-bl-[40px] bg-black">
          
          <div className="flex flex-col item-start gap-5 h-full w-[30%] p-7 font-light ">
            <div className="text-2xl">MLSC</div>
            <img src="/images/MLSC LOGO.png" alt="MLSC VIT Pune" width={50} height={50} />
          </div>

          <div className="flex flex-row w-[70%] h-full items-center text-[#0078D4] text-2xl font-light ml-32">
            Team Members
          </div>

        </div>
        <div className="flex flex-row justify-between w-full h-[75%] rounded-b-[40px]  rounded-[40px] rounded-tr-[0px]">
          <div className="flex flex-col justify-evenly items-center h-[96%] w-16 mt-4 rounded-[20px] bg-[#131416] text-[#818181]">
            <FiGrid className="h-7 w-7" />
            <RiTeamLine className="h-7 w-7"/>
            <GoProjectSymlink className="h-7 w-7" />
            <ImBlog className="h-7 w-7" />
            <MdOutlineEventSeat className="h-7 w-7" />
          </div>
          <div className="flex gap-5 flex-col h-full w-[91%] rounded-b-[40px] bg-black px-20">
            <Textboxico label='Team Member Name' icons='/icons/user.svg' type='text' />
            <div className='flex flex-row gap-4 justify-between'>
                <Selectbox label='Domain' options={["Core", "AI-ML", "App dev", "Community management", "Event Management", "IoT", "Multimedia", "Partnership", "Web development", "Web3"]} />
                <Selectbox label='Positoin' options={['President', 'Vice President', 'Management Head', 'Technical Head', 'Multimedia Head', 'Domain lead', 'Coordinator']} />
            </div>
            <div className='flex flex-row justify-evenly gap-4 w-full'>
                <Selectbox label='Year' options={['2021-22', '2022-23', '2023-24']} />
                <Selectbox label='Department' options={['CS', 'CS-AI', 'CS-ML', 'IT', 'AI-DS', 'EnTc', 'Mech', 'Chem', 'Instru']} />
            </div>

            <div className='flex flex-row justify-evenly gap-4 w-full'>
                <Textboxico label='Github' icons='/icons/github-form.svg' />
                <Textboxico label='LinkedIn' icons='/icons/linkedin-form.svg' />
            </div>

            <div className='flex flex-row justify-evenly gap-4 w-full'>
                <Textboxico label='MailID' icons='/icons/mail-form.svg' />
                <Textboxico label='X' icons='/icons/X-form.svg' />
            </div>

            <Textboxico label='Action Figure' icons='/icons/link.svg' type='text' />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-evenly h-full w-2/5 bg-slate-300 text-[#f0f0f0]"></div>

      {/* <form onSubmit={handleSubmit}>
      <div className="max-w-8xl mx-auto mt-8">
        <label>Academic Year:</label>
        <input type="text" name="academicYear" value={formData.academicYear} onChange={handleChange} />
      </div>

      <div className="max-w-8xl mx-auto mt-8">
        <label>Name:</label>
        <input type="text" name="name"  value={formData.name} onChange={handleChange} />
      </div>

      <div className="max-w-8xl mx-auto mt-8">
        <label>Domain:</label>
        <input type="text" name="domain" value={formData.domain} onChange={handleChange} />
      </div>

      <div className="max-w-8xl mx-auto mt-8">
        <label>Position:</label>
        <input type="text" name="position" value={formData.position} onChange={handleChange} />
      </div>

      <div className="max-w-8xl mx-auto mt-8">
        <label>Photo URL:</label>
        <input type="text" name="photoURL" value={formData.photoURL} onChange={handleChange} />
      </div>

      <div className="max-w-8xl mx-auto mt-8">
        <label>GitHub ID:</label>
        <input type="text" name="githubID" value={formData.githubID} onChange={handleChange} />
      </div>

      <div className="max-w-8xl mx-auto mt-8">
        <label>Twitter ID:</label>
        <input type="text" name="twitterID" value={formData.twitterID} onChange={handleChange} />
      </div>

      <div className="max-w-8xl mx-auto mt-8">
        <label>LinkedIn ID:</label>
        <input type="text" name="linkedinID" value={formData.linkedinID} onChange={handleChange} />
      </div>

      <button type="submit" className='btn btn-success w-full bg-blue-500 text-white'>
       Add Team Member <IoMdAdd />
      </button>

    </form> */}
    </div>
  );
};
export default AddTeamMember;
