"use client"
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

const AddTeamMember = () => {
  const [formData, setFormData] = useState({
    academicYear: '',
    name: '',
    domain: '',
    position: '',
    photoURL: '',
    githubID: '',
    twitterID: '',
    linkedinID: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container bg-black">
    <h1 className='text-center my-5 flex flex-col gap-4 text-2xl font-extralight'>Add Team Member</h1>
    <form onSubmit={handleSubmit}>
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

    </form>
    </div> 
      
      
  )
}
export default AddTeamMember;
