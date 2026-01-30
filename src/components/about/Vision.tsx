import { Icon } from "@iconify/react";
import { constants } from "../../utils/constants";

const Vision = () => {
  return (
    <div className="my-16">
      <div className="text-lg md:text-xl lg:text-2xl px-3 sm:px-10 md:px-15 lg:px-40 mx-auto">
        <h5>
          Welcome to Comfort Life Mission International , where destinies are
          shaped through the undiluted Word of God, prophetic prayer, and
          vibrant fellowship. Join us and experience a supernatural move of God
          that transforms lives daily. Comfort Life Mission International was
          born out of a divine burden laid on Pastor Odekunle Ephaphras in 1998.
          Starting as a youth-focused evening fellowship in a primary school
          classroom, the ministry has since grown into a vibrant movement
          touching lives through prayer, the Word, and outreach.
        </h5>
        <br />
        <p>
          Today, we stand as a beacon of hope and transformation with a growing
          network of branches across Nigeria. Our headquarters is located
          opposite Wema Bank, beside Ajimobi New Park, New Gbagi, Ibadan.
        </p>
      </div>

      {/* Our Vision & Mission */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-3 sm:px-10 lg:px-15 xl:px-22 mt-10">
        {/* Vision */}
        <div className="border-2 border-black/50 p-8 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-6">
            <div className="w-10 md:w-12 lg:w-15 h-10 md:h-12 lg:h-15 rounded-full bg-primary flex items-center justify-center">
              <Icon
                icon="mdi-light:eye"
                className="text-white font-bold w-6 md:w-8 h-6 md:h-8"
              />
            </div>
            <h3 className="font-extrabold text-2xl">Our Vision</h3>
          </div>
          <h5 className="md:ml-3 lg:ml- mt-3 text-lg md:text-2xl">
            {constants.vision}
          </h5>
        </div>

        {/* Mission */}
        <div className="border-2 border-black/50 p-8 rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-6">
            <div className="w-10 md:w-12 lg:w-15 h-10 md:h-12 lg:h-15 rounded-full bg-primary flex items-center justify-center">
              <Icon
                icon="streamline:location-target-1"
                className="text-white font-bold w-6 md:w-8 h-6 md:h-8"
              />
            </div>
            <h3 className="font-extrabold text-2xl">Our Mission</h3>
          </div>
          <h5 className="md:ml-3 lg:ml- mt-3 text-lg md:text-2xl">
            {constants.mission}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Vision;
