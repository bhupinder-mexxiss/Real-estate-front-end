import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../assets/images/userImg.png";

const MyProfile = () => {
  return (
    <>
      <div className="">
        <h6 className="text-2xl font-medium hidden lg:block">My Profile</h6>
        <div className="lg:mt-6 flex items-center justify-between">
          <p className="text-lg font-medium">Edit Profile</p>
          <div className="flex items-center gap-3 sm:gap-6">
            <button className="text-sm text-primary leading-4 py-2.5 px-6 sm:w-[176px] border border-primary rounded-lg">
              Discard
            </button>
            <button className="text-sm text-white leading-4 py-2.5 px-6 sm:w-[176px] border border-primary rounded-lg bg-primary">
              Save
            </button>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          <div>
            <div className="bg-[#F7F7F7] rounded-2xl py-6 px-4 sm:px-9">
              <div className="flex item-center gap-3 sm:gap-10">
                <div>
                  <img
                    src={userImg}
                    className="min-w-24 w-24 h-24 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="self-center">
                  <p className="text-xl font-medium text-[#1D1A22] mb-2">
                    Reet Narula
                  </p>
                  <p className="text-[#77767A]">reetnarula@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#F7F7F7] rounded-2xl py-6 px-4 sm:px-9">
              <p className="text-lg font-medium">Personal Information</p>
              <div className="mt-3.5">
                <form>
                  <div className="mb-5">
                    <label className="text-[#77767A] mb-2 inline-block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      value="Joan Bloom"
                      className="bg-white border border-[#D3D8DF] rounded-md w-full"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-[#77767A] mb-2 inline-block">
                    User Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      value="@joanbloom0"
                      className="bg-white border border-[#D3D8DF] rounded-md w-full"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-[#77767A] mb-2 inline-block">
                    Email address
                    </label>
                    <input
                      type="email"
                      name=""
                      id=""
                      value="joanbloom3@gmail.com"
                      className="bg-white border border-[#D3D8DF] rounded-md w-full"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-[#77767A] mb-2 inline-block">
                    Mobile number
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      value="9876543210"
                      className="bg-white border border-[#D3D8DF] rounded-md w-full"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-[#77767A] mb-2 inline-block">
                    Category ID
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      value="Instructor"
                      className="bg-white border border-[#D3D8DF] rounded-md w-full"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-[#77767A] mb-2 inline-block">
                    Date of Birth
                    </label>
                    <input
                      type="date"
                      name=""
                      id=""
                      className="bg-white border border-[#D3D8DF] rounded-md w-full"
                    />
                  </div>
                  <div className="">
                    <label className="text-[#77767A] mb-2 inline-block">
                    Gender
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      value="Female"
                      className="bg-white border border-[#D3D8DF] rounded-md w-full"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
