import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Leads = () => {
  return (
    <>
      <div className="xl:flex gap-8 ">
        <div className="xl:w-[65%]"></div>
        <div className="hidden xl:block w-[35%]">
          <div className="rounded-[20px] shadow-[10px_10px_30px_0px_#0000001F] bg-white py-6 px-7 mb-[30px]">
            <p className="text-22 text-[#070A29] font-medium mb-3.5">
              List Property to Sell
            </p>
            <p className="text-sm text-[#898896] mb-5">
              100% complete listing with specofoc details about the rooms get
              you more lead.
            </p>
            <Link className="text-sm text-primary font-medium">
              Add Property <KeyboardArrowRightOutlined className="!text-lg" />
            </Link>
          </div>
          <div className="rounded-[20px] shadow-[10px_10px_30px_0px_#0000001F] bg-white py-6 px-7 mb-[30px]">
            <p className="text-22 text-[#070A29] font-medium mb-3.5">
              List Property to Rent
            </p>
            <p className="text-sm text-[#898896] mb-5">
              100% complete listing with specofoc details about the rooms get
              you more lead.
            </p>
            <Link className="text-sm text-primary font-medium">
              Add Property <KeyboardArrowRightOutlined className="!text-lg" />
            </Link>
          </div>
          <div className="rounded-[20px] shadow-[10px_10px_30px_0px_#0000001F] bg-white py-6 px-7">
            <p className="text-22 text-[#070A29] font-medium mb-3.5">
              Add New Project
            </p>
            <p className="text-sm text-[#898896] mb-5">
              100% complete listing with specofoc details about the rooms get
              you more lead.
            </p>
            <Link className="text-sm text-primary font-medium">
              Add Property <KeyboardArrowRightOutlined className="!text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leads;
