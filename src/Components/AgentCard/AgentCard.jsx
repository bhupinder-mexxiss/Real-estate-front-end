import React from "react";
import agent1 from "../../assets/images/agent1.png";
import agent2 from "../../assets/images/agent2.png";
import agent3 from "../../assets/images/agent3.png";
import location_pinIcon from "../../assets/icons/location_pinIcon.png";
import { Link } from "react-router-dom";

const AgentCard = () => {
  const agentsList = [
    {
      id: 1,
      name: "Kristina Kimeridze",
      position: "Senior client adviser",
      img: agent1,
      nationality: "Dubai",
      language: "English",
      superAgent: true,
      forSale: 423,
      forRent: 623,
    },
    {
      id: 2,
      name: "Charlie Simmonds",
      position: "Senior sales & leasing adviser",
      img: agent2,
      nationality: "America",
      language: "English",
      superAgent: false,
      forSale: 423,
      forRent: 623,
    },
    {
      id: 3,
      name: "Gilberto P. Taylor",
      position: "Senior client adviser",
      img: agent3,
      nationality: "India",
      language: "English",
      superAgent: true,
      forSale: 23,
      forRent: 63,
    },
    {
      id: 4,
      name: "Amanda L. Lee",
      position: "Senior sales & leasing adviser",
      img: agent1,
      nationality: "Paris",
      language: "English",
      superAgent: true,
      forSale: 43,
      forRent: 0,
    },
  ];
  return (
    <>
      {agentsList.map((e) => (
        <Link to={`/agent/${e.id}`} className="grid xs:flex sm:grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 bg-white rounded-2xl sm:rounded-3xl md:rounded-[32px] 2xl:rounded-[58px] overflow-hidden card cursor-pointer  p-4 xs:p-0 md:p-4 xl:p-0">
          <div className="h-[250px] xs:h-full w-full xs:max-w-[180px] sm:max-w-full overflow-hidden rounded-2xl xs:rounded-none md:rounded-3xl xl:rounded-none">
            <img src={e.img} alt="" className="h-full w-full object-cover object-top" />
          </div>
          <div className=" pt-5 pb-2 xs:pt-6 2xl:pt-8 px-3 md:px-2 xl:px-4 2xl:pr-9 w-full">
            <h5 className="text-xl font-medium text-[#040404] hover:text-primary mb-2.5 leading-5 w-full overflow-hidden text-nowrap text-ellipsis">
              {e.name}
            </h5>
            <p className="text-sm text-text2 mb-2 xs:mb-3 sm:mb-4 xl:mb-6">
              <span>{e.position}</span>
            </p>
            <div className="mb-6">
              <p
                className="text-sm mb-2
               flex items-center gap-1.5 text-text2 "
              >
                <span className="min-w-[80px]">Nationality:</span>{" "}
                <span className="font-medium">{e.nationality}</span>
              </p>
              <p
                className="text-sm mb-2
               flex items-center gap-1.5 text-text2 "
              >
                <span className="min-w-[80px]">Language:</span>{" "}
                <span className="font-medium">{e.language}</span>
              </p>
              <p className="sm:min-h-6">
                {e.superAgent && (
                  <span className="text-[13px] text-white bg-primary px-2.5 py-1 rounded-full">
                    Super agent
                  </span>
                )}
              </p>
            </div>
            <div className="flex gap-2">
              <div className="text-sm flex-1 text-center text-primary border border-primary rounded-full px-2.5 py-2">
                For Sale: <span>{e.forSale}</span>
              </div>
              <div className="text-sm flex-1 text-center text-primary border border-primary rounded-full px-2.5 py-2">
                For Rent: <span>{e.forRent}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default AgentCard;
