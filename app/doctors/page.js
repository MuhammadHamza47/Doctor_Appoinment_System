import React from "react";
import SearchDoctor from "../(components)/search/SearchDoctor";
import Image from "next/image";
import Button from "../(components)/button/Button";
// import user1 from '../../public/Assets/user1.png';
// import user2 from '../../public/Assets/user2.png';
// import matt from '../../public/Assets/matt.png';
// import sophie from '../../public/Assets/sophie.png';

const Doctor = () => {
  const data = [
    {
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
      location: "Delhi",
      experience: "10 years",
      rating: "2:00PM-8:00 PM",
      
    },
    {
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
      location: "Delhi",
      experience: "10 years",
      schedule: "2:00PM-8:00 PM",
      
    },
    {
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
      location: "Delhi",
      experience: "10 years",
      schedule: "2:00PM-8:00 PM",
     
    },
    {
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
      location: "Delhi",
      experience: "10 years",
      schedule: "2:00PM-8:00 PM",
    
    },{
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
      location: "Delhi",
      experience: "10 years",
      schedule: "2:00PM-8:00 PM",
      
    },{
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
      location: "Delhi",
      experience: "10 years",
      schedule: "2:00PM-8:00 PM",
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="text-green-800 my-7 text-[58px] font-extrabold font-['Montserrat'] leading-[80px] tracking-tight">
          Meet the Best Doctor
        </div>
      </div>
      <div className="my-8">
        {/* <SearchDoctor /> */}
      </div>

      <div className="grid grid-cols-1 mt-11 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {data.map((doctor, index) => (
          <div key={index} className="flex bg-white p-4 rounded-lg shadow-md mx-4 my-4">
            {/* <div className="flex-shrink-0 relative h-40 w-40 mr-4"> */}
              {/* <Image src={doctor.image} width={420} height={600} alt="" /> */}
            {/* </div> */}
            <div className="flex-grow">
              <div className="text-lg font-bold mb-2">{doctor.name}</div>
              <div className="text-gray-600 mb-2">{doctor.speciality}</div>
              <div className="text-gray-600 mb-2">{doctor.hospital}, {doctor.location}</div>
              <div className="text-gray-600 mb-2">Experience: {doctor.experience}</div>
              <div className="text-gray-600 mb-2">Schedule: {doctor.schedule}</div>
              <div className="mb-2"><Button title="Contact with me" size="15"/></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
