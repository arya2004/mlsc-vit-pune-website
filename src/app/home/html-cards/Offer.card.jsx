import React from "react";

const Offer = () => {
  return (
    <div className="align-center flex flex-col items-center justify-evenly w-[500px] h-[600px] p-3 bg-transparent border-[2px] border-[#0078d4] rounded-[8px]  text-[#0078d4]">
      <div className="font-extrabold text-center">What We Offer:</div>

      <div className="flex flex-col justify-evenly items-center h-auto w-auto  overflow-y-scroll ">
        <div className=" bg-slate-600 h-auto w-auto p-1">
          <div className="h-auto w-auto font-semibold">
            Embark on a transformative journey with Microsoft Learn Student Club
            VIT, Pune, where opportunities for growth and exploration abound.
            Our club is uniquely structured to cater to both Technical and Admin
            domains, ensuring a comprehensive learning experience for every
            enthusiast.
          </div>
          <br />
          <div className="h-auto w-auto">
            <div className="h-auto w-auto font-bold">Technical Domains:</div>
            <div className="h-auto w-auto font-semibold">
              Dive into the realms of innovation with our specialized focus on
              App Development, AI-ML, IoT, Web Development, and the cutting-edge
              world of Web3. Engage in hands-on projects, teaching sessions, and
              industry speaker events that deepen your understanding and
              proficiency in these technical domains. Whether you're passionate
              about creating apps, exploring the potential of AI, or crafting
              the future of the web, our club provides a dynamic space for you
              to thrive.
            </div>
          </div>
          <br />
          <div className="h-auto w-auto">
            <div className="h-auto w-auto font-bold">Admin Domains:</div>
            <div className="h-auto w-auto font-semibold">
              For those inclined towards the administrative side of technology,
              our club offers opportunities in Multimedia and Content, Event
              Management, Community Management, and Partnerships Management.
              Gain valuable experience in organizing and executing events,
              managing online communities, creating engaging multimedia content,
              and forging partnerships that contribute to the growth and success
              of our vibrant community.
            </div>
          </div>
          <br />
          <div>
            <div className="h-auto w-auto font-bold">Club Activities:</div>
            <div className="h-auto w-auto font-semibold">
              Immerse yourself in our diverse range of activities, from teaching
              sessions by industry professionals to internal project
              collaborations across all technical domains. Participate in
              hackathons that challenge and showcase your skills, and join us as
              we champion the principles of open source, fostering a
              collaborative and inclusive environment.
            </div>
          </div>
          <br />
          <div className="h-auto w-auto font-semibold">
            At Microsoft Learn Student Club VIT, Pune, we go beyond conventional
            learning, shaping an ecosystem where curiosity is cultivated,
            innovation is embraced, and every member is empowered to contribute
            to the ever-evolving landscape of technology. Join us, and let's
            explore, learn, and create together!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
