import React from "react";
import users from "../../../assets/icons/users.png";
import sellers from "../../../assets/icons/sellers.png";
import properties from "../../../assets/icons/properties.png";
import userImg from "../../../assets/images/userImg.png";
import { ArrowUpwardOutlined } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <div>
      <div className="px-10 py-[32px] flex items-center justify-between">
        <h5 className="text-22 text-primary font-bold">Dashboard</h5>
        <div>
          <button className="border-2 border-[#E8E1F6] rounded-lg w-10 h-10 overflow-hidden">
            <img src={userImg} className="w-full h-full object-cover" alt="" />
          </button>
        </div>
      </div>
      <div className="px-10 h-[calc(100vh_-_110px)] overflow-y-auto pb-10">
        <div className="flex gap-5">
          <div className="w-[75%]">
            <div className="flex gap-5">
              <div className="basis-1/3 bg-white rounded-2xl p-4">
                <p className="text-lg text-[#101828] font-medium mb-5">
                  Top Brokers
                </p>
                <ul className="flex">
                  <li className="w-[34px] h-[34px] rounded-full bg-primary text-white text-xs font-normal border border-white flex items-center justify-center">
                    CK
                  </li>
                  <li className="w-[34px] h-[34px] rounded-full bg-[#004566] text-white text-xs font-normal border border-white flex items-center justify-center -ml-1.5">
                    TN
                  </li>
                  <li className="w-[34px] h-[34px] rounded-full bg-[#78BEC3] text-white text-xs font-normal border border-white flex items-center justify-center -ml-1.5">
                    RT
                  </li>
                  <li className="w-[34px] h-[34px] rounded-full bg-[#0D8EBF] text-white text-xs font-normal border border-white flex items-center justify-center -ml-1.5">
                    UK
                  </li>
                  <li className="w-[34px] h-[34px] rounded-full bg-primary text-white text-xs font-normal border border-white flex items-center justify-center -ml-1.5">
                    UR
                  </li>
                  <li className="w-[34px] h-[34px] rounded-full bg-[#131414] text-white text-xs font-normal border border-white flex items-center justify-center -ml-1.5">
                    +8
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-[#00858E73] rounded-2xl p-4">
                <div className="w-[34px] h-[34px] rounded-[10px] bg-white flex items-center justify-center mb-3.5">
                  <img src={users} alt="" className="w-4 imgColor opacity-60" />
                </div>
                <p className="text-2xl text-white font-medium">460</p>
                <p className="text-xs text-white">Total Users</p>
              </div>
              <div className="flex-1 bg-[#00858EB0] rounded-2xl p-4">
                <div className="w-[34px] h-[34px] rounded-[10px] bg-white flex items-center justify-center mb-3.5">
                  <img
                    src={sellers}
                    alt=""
                    className="w-4 imgColor opacity-80"
                  />
                </div>
                <p className="text-2xl text-white font-medium">460</p>
                <p className="text-xs text-white">Total Sellers</p>
              </div>
              <div className="flex-1 bg-primary rounded-2xl p-4">
                <div className="w-[34px] h-[34px] rounded-[10px] bg-white flex items-center justify-center mb-3.5">
                  <img src={properties} alt="" className="w-4 imgColor" />
                </div>
                <p className="text-2xl text-white font-medium">460</p>
                <p className="text-xs text-white">Total Propertries</p>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-2xl shadow-[0px_2.11px_105.51px_0px_#00000014] pt-5 px-8 pb-8">
              <div className="pl-5">
                <p className="text-lg text-[#667085] mb-4">Revenue This Week</p>
                <p className="text-[#0B2443] flex items-center gap-1.5">
                  <ArrowUpwardOutlined className="!text-4xl font-bold" />{" "}
                  <span className="text-[32px] font-medium">32.5%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
