import { CloseOutlined, KeyboardArrowUpOutlined } from "@mui/icons-material";
import { Modal } from "flowbite-react";
import React, { useState } from "react";

const CreateAlert = ({ openAlert, setOpenAlert }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectOption, setSelectOption] = useState("Daily");
  const toggleSelect = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <Modal
        size="md"
        dismissible
        show={openAlert}
        onClose={() => setOpenAlert(false)}
        className="z-[99999] bg-black p-0"
      >
        <Modal.Body className="py-8 px-6 overflow-visible">
          <div className="flex justify-between items-center mb-2.5">
            <h6 className="text-xl font-medium text-text1">Create Alert</h6>
            <button onClick={() => setOpenAlert(false)}>
              <CloseOutlined className="text-text1" />
            </button>
          </div>
          <p className="text-sm text-[#707070]">
            Be the first to get notified when there are new listings matching
            your search.
          </p>
          <div className="mt-6">
            <div className="mb-5">
              <p className="text-sm text[#040404] mb-2">Alert name</p>
              <input
                type="text"
                name=""
                id=""
                className="w-full bg-[#F7F8FF] border border-[#E2E2EC] rounded placeholder:text-[#8B8B8B] text-text1 text-sm py-2.5"
                placeholder="Properties for Sale in UAE"
              />
            </div>
            <div className="mb-8">
              <p className="text-sm text[#040404] mb-2 ">Receive Update</p>
              <div className="relative">
                <button className="h-10 flex items-center justify-between w-full bg-[#F7F8FF] border border-[#E2E2EC] rounded text-text1 text-sm px-3" onClick={toggleSelect}>
                  {selectOption}{" "}
                  <span className={`duration-300 ${!isActive && "rotate-180"}`}>
                    <KeyboardArrowUpOutlined />
                  </span>
                </button>
                {isActive && (
                  <div className="absolute w-full right-0 mt-2">
                    <ul className="bg-white shadow-[0px_8px_24px_0px_rgba(66,68,90,0.3)] py-1 rounded">
                      <li className={`px-3 py-2 hover:bg-gray-100 text-nowrap min-w-32 border-l-4 cursor-pointer text-text2 flex items-center gap-2 ${selectOption === "Hourly" ? "border-l-primary bg-gray-100" : "border-l-transparent"}`} onClick={() => {setSelectOption("Hourly"); setIsActive(false)}}>
                        Hourly
                      </li>
                      <li className={`px-3 py-2 hover:bg-gray-100 text-nowrap min-w-32 border-l-4  cursor-pointer text-text2 flex items-center gap-2 ${selectOption === "Daily" ? "border-l-primary bg-gray-100" : "border-l-transparent"}`} onClick={() => {setSelectOption("Daily"); setIsActive(false)}}>
                        Daily
                      </li>
                      <li className={`px-3 py-2 hover:bg-gray-100 text-nowrap min-w-32 border-l-4  cursor-pointer text-text2 flex items-center gap-2 ${selectOption === "Every 3 Days" ? "border-l-primary bg-gray-100" : "border-l-transparent"}`} onClick={() => {setSelectOption("Every 3 Days"); setIsActive(false)}}>
                        Every 3 Days
                      </li>
                      <li className={`px-3 py-2 hover:bg-gray-100 text-nowrap min-w-32 border-l-4  cursor-pointer text-text2 flex items-center gap-2 ${selectOption === "Weekly" ? "border-l-primary bg-gray-100" : "border-l-transparent"}`} onClick={() => {setSelectOption("Weekly"); setIsActive(false)}}>
                        Weekly
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <button className="w-full rounded-md bg-primary text-white sm:text-lg py-2" onClick={() => setOpenAlert(false)}>Create</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateAlert;
