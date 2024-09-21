import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h6 className="text-2xl lg:text-3xl text-text1 font-medium mt-8">
          Personal Information
        </h6>
        <div className="flex justify-center mt-10">
          <div className="max-w-[400px] w-full">
            <div className="mb-6">
              <p className="mb-2">Name</p>
              <input
                type="text"
                placeholder="Your Name"
                className="placeholder:text-[#8897AD] text-text1 rounded w-full bg-[#F7F8FF] border border-[#E2E2EC]"
              />
            </div>
            <div className="mb-6">
              <p className="mb-2">Surname</p>
              <input
                type="text"
                placeholder="Surname"
                className="placeholder:text-[#8897AD] text-text1 rounded w-full bg-[#F7F8FF] border border-[#E2E2EC]"
              />
            </div>
            <div className="mb-8">
              <p className="mb-2">Email</p>
              <input
                type="email"
                placeholder="Dummymail@gmail.com"
                className="placeholder:text-[#8897AD] text-text1 rounded w-full bg-[#F7F8FF] border border-[#E2E2EC]"
              />
            </div>
            <button className="bg-primary text-white w-full py-2 rounded inline-block">save</button>
            <div className="mt-6 text-center mb-10">

            <button className=" font-medium inline-block">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
