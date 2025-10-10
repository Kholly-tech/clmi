import { useState } from "react";
import { constants } from "../../utils/constants";

const LifeToJesus = () => {
  const [dropDown, setDropDown] = useState<number | null>(1);

  const handleChangeDropDown = (index: number | null = null) => {
    if (index) {
      setDropDown(index);
    } else {
      setDropDown(null);
    }
  };

  return (
    <div className="items-center justify-center text-center my-15">
      <div>
        <h2 className="text-primary font-extrabold text-4xl">
          Want to give your life to Christ?
        </h2>
        <h5 className="text-xl">
          Take a bold step of faith by following these steps
        </h5>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
        {constants.lifeToJesus.map((item, i) => (
          <div className="p-4 border-2 border-black/40 rounded-xl">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-primary text-white items-center justify-center">
                {i + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeToJesus;
