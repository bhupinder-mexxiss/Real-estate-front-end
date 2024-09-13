import React from "react";
import comp1 from "../../assets/images/comp1.png";
import comp2 from "../../assets/images/comp2.png";
import location_pinIcon from "../../assets/icons/location_pinIcon.png";
import { Link } from "react-router-dom";

const CompanyCard = () => {
  const companiesList = [
    {
      id: 1,
      title: "AGCO PROPERTIES",
      office: "Head office",
      img: comp1,
      location: "Dubai",
      agent: 26,
      superAgent: 18,
      forSale: 423,
      forRent: 623,
    },
    {
      id: 2,
      title: "METROPOLITAN CAPITAL ",
      office: "Head office",
      img: comp2,
      location: "America",
      agent: 26,
      superAgent: 18,
      forSale: 423,
      forRent: 623,
    },
    {
      id: 3,
      title: "ALLEGIANCE REAL Estate",
      office: "Head office",
      img: comp2,
      location: "India",
      agent: 26,
      superAgent: 18,
      forSale: 423,
      forRent: 623,
    },
    {
      id: 4,
      title: "McCone Properties",
      office: "Head office",
      img: comp2,
      location: "Paris",
      agent: 26,
      superAgent: 18,
      forSale: 423,
      forRent: 623,
    },
  ];
  return (
    <>
      {companiesList.map((e) => (
        <div className="grid xs:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 bg-white rounded-2xl sm:rounded-3xl md:rounded-[32px] 2xl:rounded-[58px] overflow-hidden card cursor-pointer  p-4 xs:p-0 md:p-4 xl:p-0">
          <div className="h-full w-full overflow-hidden rounded-2xl sm:rounded-none md:rounded-3xl xl:rounded-none">
            <img src={e.img} alt="" className="h-full w-full object-cover" />
          </div>
          <div className=" pt-5 pb-2  sm:py-6 2xl:py-8 px-3 md:px-2 xl:px-4 2xl:pr-9">
            <Link to="/broker/1" className="block text-xl font-medium text-[#040404] mb-2.5 leading-5 w-full overflow-hidden text-nowrap text-ellipsis">
              {e.title}
            </Link>
            <p className="text-sm text-text2 mb-2 xs:mb-3 sm:mb-4 xl:mb-6">
              <span>{e.office}</span>
            </p>
            <div className="mb-6">
              <p
                className="text-sm mb-2
               flex items-center gap-1.5 text-text2 "
              >
                <span className="min-w-[80px]">Location:</span>{" "}
                <span className="font-medium">{e.location}</span>
              </p>
              <p
                className="text-sm mb-2
               flex items-center gap-1.5 text-text2 "
              >
                <span className="min-w-[80px]">Agent:</span>{" "}
                <span className="font-medium">{e.agent}</span>
              </p>
              <p
                className="text-sm mb-2
               flex items-center gap-1.5 text-text2 "
              >
                <span className="min-w-[80px]">Super agent:</span>{" "}
                <span className="font-medium">{e.superAgent}</span>
              </p>
            </div>
            <div className="flex xs:flex-col sm:flex-row gap-2">
                <div className="text-sm flex-1 text-center text-primary border border-primary rounded-full px-2.5 py-2">
                For Sale: <span>{e.forSale}</span>
                </div>
                <div className="text-sm flex-1 text-center text-primary border border-primary rounded-full px-2.5 py-2">
                For Rent: <span>{e.forRent}</span>
                </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompanyCard;
