import { constants } from "../../utils/constants";

const WhatWeStandFor = () => {
  return (
    <div className="items-center justify-center my-16">
      <h2 className="text-primary font-bold text-4xl text-center mb-10">
        What We Stand For
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-10 lg:px-15 xl:px-25 gap-6">
        {constants.whatWeStandFor.map((item, i: number) => (
          <div
            className="border-2 border-black/30 text-black/70 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
            key={i}
          >
            <h3 className="font-semibold text-2xl mb-5">{item.title}</h3>
            <p className="text-xl mb-7">{item.desc}</p>
            <p className="text-black/80 font-semibold text-lg">{item.verse}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeStandFor;
