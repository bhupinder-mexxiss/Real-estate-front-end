import React from "react";
import userImg from "../../../assets/images/userImg.png";
import UpDown from "../../../assets/icons/UpDown.png";
import trashIcon from "../../../assets/icons/trashIcon.png";
import { UnfoldMoreOutlined } from "@mui/icons-material";

const Users = () => {
  return (
    <div>
      <div className="px-10 py-[32px] flex items-center justify-between">
        <h5 className="text-22 text-primary font-bold">Users</h5>
        <div>
          <button className="border-2 border-[#E8E1F6] rounded-lg w-10 h-10 overflow-hidden">
            <img src={userImg} className="w-full h-full object-cover" alt="" />
          </button>
        </div>
      </div>
      <div className="px-10 h-[calc(100vh_-_110px)] overflow-y-auto pb-10">
        <div>
          <p className="text-lg text-[#040404] font-medium">
            Total users (<span>1265</span>)
          </p>
          <div className="relative overflow-x-auto mt-8">
            <table className="w-full">
              <thead className="text-sm text-[#8B8B8B] font-medium">
                <tr>
                  <th scope="col" className="py-4 px-3 pl-6">
                    <div className="flex items-center gap-2.5">
                      User <img src={UpDown} className="w-2" />
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-3">
                    <div className=" flex items-center gap-2.5">
                      Login through <img src={UpDown} className="w-2" />
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-3">
                    <div className="flex items-center gap-2.5">Location </div>
                  </th>
                  <th scope="col" className="py-4 px-3">
                    <div className=" flex items-center gap-2.5">
                      Status <img src={UpDown} className="w-2" />
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-3">
                    <div className=" flex items-center gap-2.5">
                      Member since <img src={UpDown} className="w-2" />
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-3">
                    <div className=" flex items-center gap-2.5">
                      Action taken <img src={UpDown} className="w-2" />
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-3 pr-6">
                    <div className=" flex items-center gap-2.5">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="bg-white mb-2">
                  <td className=" py-4 px-3 pl-6 rounded-l-xl">
                    <div>
                      <div className="flex items-center gap-3">
                        <img
                          src={userImg}
                          className="border-2 border-[#E8E1F6] rounded-lg w-10 h-10 object-cover"
                          alt=""
                        />
                        <div>
                          <p className="text-sm text-[#040404] font-medium">
                            Walter Horton
                          </p>
                          <p className="text-xs text-text2 font-medium">
                            walterhorton@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404]">Email</span>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404]">Delhi</span>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404]">Active</span>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404]">9 Sep 2024</span>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404] w-6 h-6 rounded-full flex items-center justify-center bg-[#00858E14]">
                      2
                    </span>
                  </td>
                  <td className=" py-4 px-3 text-center pr-6 rounded-r-xl">
                    <button className="mx-auto">
                      <img src={trashIcon} alt="" className="w-5 grayImg" />
                    </button>
                  </td>
                </tr>
                <tr className="bg-white mb-2">
                  <td className=" py-4 px-3 pl-6 rounded-l-xl">
                    <div>
                      <div className="flex items-center gap-3">
                        <img
                          src={userImg}
                          className="border-2 border-[#E8E1F6] rounded-lg w-10 h-10 object-cover"
                          alt=""
                        />
                        <div>
                          <p className="text-sm text-[#040404] font-medium">
                            Walter Horton
                          </p>
                          <p className="text-xs text-text2 font-medium">
                            walterhorton@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404]">Email</span>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404]">Delhi</span>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404]">Active</span>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404]">9 Sep 2024</span>
                  </td>
                  <td className=" py-4 px-3">
                    <span className="text-sm text-[#040404] w-6 h-6 rounded-full flex items-center justify-center bg-[#00858E14]">
                      2
                    </span>
                  </td>
                  <td className=" py-4 px-3 text-center pr-6 rounded-r-xl">
                    <button className="mx-auto">
                      <img src={trashIcon} alt="" className="w-5 grayImg" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
