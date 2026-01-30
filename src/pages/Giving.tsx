import LifeToJesus from "../components/home/LifeToJesus";
import Locate from "../components/home/Locate";

const Giving = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-primary text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Give With a Cheerful Heart
          </h1>
          <p className="text-blue-100 text-xl leading-relaxed">
            "Each one must give as he has decided in his heart, not reluctantly
            or under compulsion, for God loves a cheerful giver" - 2 Corinthians
            9:7
          </p>
        </div>
      </div>

      {/* Section for Account details */}
      <div></div>

      <LifeToJesus />

      <Locate />
    </div>
  );
};

export default Giving;
