"use client";
import { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import { Textboxico, Textbox, Selectbox } from "../components/Textbox";
import Sidepanel from "../components/Sidepanel";
import Searchbox from "../components/Searchbox";
import Button from "../components/Button";
import Domainoutput from "./Domainoutput";
import WhichDomain from "./WhichDomain";

//TODO: api/jobs/<teams | events | projects | teams | blogs , cache refresing

function AddTeamMember() {
  const [formData, setFormData] = useState({
    academicYear: "",
    name: "",
    domain: "",
    department: "",
    position: "",
    photoURL: "",
    modelURL: "",
    mail: "",
    githubID: "",
    twitterID: "",
    linkedinID: "",
  });

  const [seeDomains, setSeeDomains] = useState(true);
  // console.log(seeDomains)
  const [output, setoutput] = useState([]);
  const [whichDomain, setWhichDomain] = useState("Core Team");
  const [memberData, setMemberData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getTeamData = async () => {
    try {
      const teamData = await axios.get("/api/team");
      // setMemberData(teamData.data.data);
      setMemberData(teamData.data.data);
      // console.log(JSON.stringify(teamData.data.data[0].domain))
    } catch (err) {
      console.log("GET req error");
      console.log(err);
      return err;
    }
  };

  console.log(memberData);
  useEffect(() => {
    getTeamData();
    
    // setMemberData(teamData.data.data);
    // console.log(memberData)
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const res = async () => {
      try {
        const body = {
          fullName: formData.name,
          domain: formData.domain,
          position: formData.position,
          year: formData.academicYear,
          xLink: formData.twitterID,
          email: formData.mail,
          linkedinLink: formData.linkedinID,
          githubLink: formData.githubID,
          aboutMe: formData.department,
          imageLink: formData.photoURL,
          modelLink: formData.modelURL,
        };
        const { data, status } = await axios.post(`/api/team`, body);

        if(status === 200) alert("Data added successfully!");

        console.log("DATA AND STATUS");
        console.log(data, status);
      } catch (err) {
        console.log(err);
      }
    };

    await res();
    const cache = await axios.get("/api/jobs/teams");

    console.log(cache);

    window.location.reload();
  };

  return (
    <div className="flex flex-row justify-center bg-[#666666] h-screen w-screen text-[#F0F0F0]">
      <div className="flex flex-col items-center p-5 h-full w-3/5">
        <div className="flex flex-row items-center w-full h-[25%] rounded-t-[40px] rounded-bl-[40px] bg-black">
          <div className="flex flex-col item-start gap-5 h-full w-[30%] p-7 font-light ">
            <div className="text-2xl">MLSC</div>
            <img
              src="/images/MLSC LOGO.png"
              alt="MLSC VIT Pune"
              width={50}
              height={50}
            />
          </div>

          <div className="flex flex-row w-[70%] h-full items-center text-[#0078D4] text-2xl font-light ml-32">
            Team Members
          </div>
        </div>
        <div className="flex flex-row justify-between w-full h-[75%] rounded-b-[40px]  rounded-[40px] rounded-tr-[0px]">
          <Sidepanel />
          <div className="flex gap-5 flex-col h-full w-[91%] rounded-b-[40px] bg-black px-20">
            <Textboxico
              name="name"
              onChange={handleChange}
              label="Team Member Name"
              icons="/icons/user.svg"
              type="text"
            />
            <div className="flex flex-row gap-4 justify-between">
              <Selectbox
                name="domain"
                label="Domain"
                onChange={handleChange}
                options={[
                  "__select__",
                  "Core",
                  "AI-ML",
                  "App dev",
                  "Community management",
                  "Event Management",
                  "IoT",
                  "Multimedia",
                  "Partnership",
                  "Web development",
                  "Web3",
                ]}
              />
              <Selectbox
                name="position"
                onChange={handleChange}
                label="Positoin"
                options={[
                  "__select__",
                  "President",
                  "Vice President",
                  "Management Head",
                  "Technical Head",
                  "Multimedia Head",
                  "Domain lead",
                  "Coordinator",
                ]}
              />
            </div>
            <div className="flex flex-row justify-evenly gap-4 w-full">
              <Selectbox
                name="academicYear"
                onChange={handleChange}
                label="Year"
                options={["2021-22", "2022-23", "2023-24"]}
              />
              <Selectbox
                name="department"
                onChange={handleChange}
                label="Department"
                options={[
                  "__select__",
                  "CS",
                  "CS-AI",
                  "CS-ML",
                  "IT",
                  "AI-DS",
                  "EnTc",
                  "Mech",
                  "Chem",
                  "Instru",
                ]}
              />
            </div>

            <div className="flex flex-row justify-evenly gap-4 w-full">
              <Textboxico
                name="githubID"
                onChange={handleChange}
                label="Github"
                icons="/icons/github-form.svg"
              />
              <Textboxico
                name="linkedinID"
                onChange={handleChange}
                label="LinkedIn"
                icons="/icons/linkedin-form.svg"
              />
            </div>

            <div className="flex flex-row justify-evenly gap-4 w-full">
              <Textboxico
                name="mail"
                onChange={handleChange}
                label="MailID"
                icons="/icons/mail-form.svg"
              />
              <Textboxico
                name="twitterID"
                onChange={handleChange}
                label="X"
                icons="/icons/X-form.svg"
              />
            </div>

            <div className="flex flex-row justify-evenly gap-4 w-full">
              <Textbox
                name="photoURL"
                onChange={handleChange}
                label="Photo"
                type="text"
              />
              <Textbox
                name="modelURL"
                onChange={handleChange}
                label="Action Figure"
                type="text"
              />
            </div>
            <Button label="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-evenly h-full w-2/5 p-5 bg-[#666666] text-[#6A6A6A]">
        <Searchbox />
        <div className="flex flex-col items-center w-full h-[90%] bg-[#1E1E1E] p-8 px-10  rounded-[40px] border-[#6A6A6A]-2">
          <span className="text-lg text-[#6A6A6A] border-b-2 border-[#6A6A6A] w-full text-center py-3 ">
            All Team Members
          </span>

          {/* Domains */}
          {/* {console.log(seeDomains)} */}
          <div className="w-full h-[88%]">
          {seeDomains ? (
            <Domainoutput
              setSeeDomains={setSeeDomains}
              setWhichDomain={setWhichDomain}
            />
          ) : (
            <WhichDomain
              teamData={memberData}
              whichDomain={whichDomain}
              setWhichDomain={setWhichDomain}
            />
          )}
          </div>

          <div className="flex flex-row items-center gap-5 relative h-8 w-20">
            <MdNavigateBefore
              onClick={() => {
                setSeeDomains(true);
              }}
              className="h-8 w-8 rounded-full p-1 hover:bg-[#424242] active:bg-[#888888]"
            />
            <MdNavigateNext
              onClick={() => setSeeDomains(false)}
              className="h-8 w-8 rounded-full p-1 hover:bg-[#424242] active:bg-[#888888]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddTeamMember;
