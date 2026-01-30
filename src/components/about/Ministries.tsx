// import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { constants } from "../../utils/constants";

const Ministries = () => {
  return (
    <div className="my-16 px-3 sm:px-10 md:px-15 lg:px-25 mx-auto">
      <h3 className="text-center text-4xl text-primary font-bold mb-5">
        Ministries & Outreach
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {constants.ministries.map((ministry, i) => (
          // <div key={i} className="border-2 rounded-2xl p-8"></div>
          <div
            key={i}
            className="flex flex-col rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <div className="h-72 min-w-x max-w-4xl">
              <img
                src={ministry.image}
                alt={`Ministry image ${i + 1}`}
                className="w-full h-full rounded-t-3xl object-cover"
              />
            </div>

             {/* Other properties */}
            <div className="mt-10 ml-7 flex-1">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-1">
                {ministry.title}
              </h3>
              <h6 className="text-lg md:text-xl mb-5">{ministry.desc}</h6>
            </div>

            {/* Button */}
            <div className="mt-10 relative flex items-end justify-end">
              <Link
                to={ministry.link}
                className="bg-primary hover:bg-blue-800 transition-colors p-4 text-white text-center font-semibold w-full rounded-2xl mx-5 items-end justify-end"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministries;
