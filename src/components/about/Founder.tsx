import pappi from "../../assets/images/CLMI/hero1.jpg";
import mama from "../../assets/images/CLMI/mama.jpg";

const Founder = () => {
  return (
    <div className="my-16 px-4 sm:px-8 md:px-16 lg:px-24 space-y-16 md:space-y-24">
      {/* First Section - Normal order */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 items-center">
        <h4 className="md:hidden text-lg md:text-2xl font-extrabold">
          MEET OUR FOUNDER & LEAD PASTOR
        </h4>
        {/* Image */}
        <div className="flex justify-center items-center order-1">
          <div className="bg-[#1DAEEF] p-4 sm:p-6 rounded-2xl w-full ">
            <div className="bg-white p-4 sm:p-6 rounded-2xl">
              <img
                src={pappi}
                alt="Pst Odekunle Epaphras"
                className="rounded-2xl w-full h-92 object-cover aspect-[3/4] shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center items-start order-2 space-y-6">
          <h4 className="hidden md:flex text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            MEET OUR FOUNDER & LEAD PASTOR
          </h4>
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              Pastor Odekunle's journey began in 1998, when he felt a divine
              burden to bring hope and transformation through the undiluted Word
              of God. What started as an evening youth fellowship in a primary
              school classroom in Ibadan has since grown into a vibrant
              movement, reaching many with the gospel through prayer, prophetic
              ministry, and outreach. He is an alumnus of Living Spring Bible
              College, where he received his theological training, equipping him
              to shepherd the growing church he founded.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Pastor Odekunle Ephaphras is the visionary founder and Lead Pastor
              of Comfort Life Mission International, often known as Olorun
              Ojiji. He is a prophetic voice and passionate soul‐winner,
              dedicated to raising a people of prayer, purpose, and power.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section - Reversed order on medium+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 items-center">
        <h4 className="md:hidden text-lg md:text-2xl font-extrabold">
          MEET OUR MOTHER-IN-ISREAL
        </h4>
        {/* Text - Comes first on medium+ screens */}
        <div className="flex flex-col justify-center items-start order-2 md:order-1 space-y-6">
          <h4 className="hidden md:flex text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            MEET OUR MOTHER-IN-ISREAL
          </h4>
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              Under Pastor Odekunle's leadership, Comfort Life Mission
              International has become a beacon of hope and spiritual guidance.
              The ministry continues to expand its reach through various
              outreach programs and community initiatives.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              The church's mission is to spread the gospel, empower believers,
              and transform communities through the power of prayer and
              prophetic ministry. Each service is designed to bring people
              closer to God and equip them for purposeful living.
            </p>
          </div>
        </div>

        {/* Image - Comes second on medium+ screens */}
        <div className="flex w-full justify-center items-center order-1 lg:order-2">
          <div className="bg-[#1DAEEF] p-4 sm:p-6 rounded-2xl w-full ">
            <div className="bg-white p-4 sm:p-6 rounded-2xl">
              <img
                src={mama}
                alt="Pst (Mrs) Temitayo Odekunle"
                className="rounded-2xl w-full h-92 object-cover aspect-[3/4] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
