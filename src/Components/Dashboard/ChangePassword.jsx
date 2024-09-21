import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../assets/images/userImg.png";

const ChangePassword = () => {
  return (
    <>
      <div className="">
        <h6 className="text-2xl font-medium hidden lg:block">Change Password</h6>
        <div className="lg:mt-12 flex items-center justify-center">
          <div>
            <form>
              <div className="mb-5">
                <label className="mb-2 inline-block">Current Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter password"
                  className="border border-[#D3D8DF] rounded-md w-full placeholder:text-[#8897AD] bg-[#FAFAFF]"
                />
              </div>
              <div className="mb-5">
                <label className="mb-2 inline-block">New Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter password"
                  className="border border-[#D3D8DF] rounded-md w-full placeholder:text-[#8897AD] bg-[#FAFAFF]"
                />
              </div>
              <div className="mb-5">
                <label className="mb-2 inline-block">New Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter password"
                  className="border border-[#D3D8DF] rounded-md w-full placeholder:text-[#8897AD] bg-[#FAFAFF]"
                />
              </div>

              <button className="text-lg text-white leading-4 py-3.5 px-6 w-full border border-primary rounded-lg bg-primary">
              Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
