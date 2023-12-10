// components/DoctorForm.js'
'use client'
import React, { useState } from 'react';
import FormField from '../../(components)/formField/FormField';

const DoctorForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [hospital, setHospital] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctorData = { name, speciality, hospital, location, experience, schedule };
    onSubmit(doctorData);
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        type="text"
        placeholder="Enter doctor's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormField
        label="Speciality"
        type="text"
        placeholder="Enter doctor's speciality"
        value={speciality}
        onChange={(e) => setSpeciality(e.target.value)}
      />
      <FormField
        label="Hospital"
        type="text"
        placeholder="Enter hospital name"
        value={hospital}
        onChange={(e) => setHospital(e.target.value)}
      />
      <FormField
        label="Location"
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <FormField
        label="Experience"
        type="text"
        placeholder="Enter years of experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <FormField
        label="Schedule"
        type="text"
        placeholder="Enter schedule"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default DoctorForm;
