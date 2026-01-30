import { useState } from "react";
import { constants } from "../../utils/constants";
import { Icon } from "@iconify/react";

const LifeToJesus = () => {
  const [dropDown, setDropDown] = useState<number | null>(1);

  const handleChangeDropDown = (index: number | null = null) => {
    if (index) {
      if (dropDown === index) {
        setDropDown(null);
      } else {
        setDropDown(index);
      }
    } else {
      setDropDown(null);
    }
  };

  return (
    <div className="items-center justify-center text-center my-16">
      <div>
        <h2 className="text-primary font-extrabold text-4xl">
          Want to give your life to Christ?
        </h2>
        <h5 className="text-xl">
          Take a bold step of faith by following these steps
        </h5>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto mt-10">
        {constants.lifeToJesus.map((item, i) => (
          <div
            className="p-6 border-2 border-black/40 rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-shadow"
            onClick={() => {
              handleChangeDropDown(i + 1);
            }}
            key={i}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 md:ml-3 flex rounded-full bg-primary text-white text-lg md:text-xl items-center justify-center">
                  {i + 1}
                </div>
                <h2 className="sm:text-lg md:text-xl xl:text-2xl font-semibold ">
                  {item.title}
                </h2>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center pl-2">
                {dropDown === i + 1 ? (
                  <Icon
                    icon="iconamoon:arrow-up-2-bold"
                    width="24"
                    height="24"
                  />
                ) : (
                  <Icon
                    icon="iconamoon:arrow-down-2-bold"
                    width="24"
                    height="24"
                  />
                )}
              </div>
            </div>
            {dropDown === i + 1 && (
              <div className="mt-7 text-lg md:text-xl lg:text-2xl">
                {item.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeToJesus;
