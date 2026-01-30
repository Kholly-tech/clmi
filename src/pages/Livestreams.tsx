import { Icon } from "@iconify/react";
import { useState } from "react";
import LifeToJesus from "../components/home/LifeToJesus";
import useYouTubeStreams from "../hooks/useYoutubeStreams";
import Button from "../components/ui/Button";

interface Service {
  id: string;
  title: string;
  date: string;
  time: string;
  link: '',
  description: string;
}

const liveStreams: Service[] = [
  {
    id: "1",
    title: "Sunday Morning Worship Service",
    date: "Sunday, January 21, 2025",
    time: "10:00am",
    link: '',
    description:
      "Join us for our weekly worship service featuring inspiring music, fellowship, and a message",
  },
  {
    id: "2",
    title: "Wednesday Evening Bible Study",
    date: "Wednesday, January 24, 2025",
    time: "7:00pm",
    link: '',
    description:
      "Dive deep into scripture and connect with others in study and prayer.",
  },
  {
    id: "3",
    title: "Youth Group Meeting",
    date: "Friday, January 26, 2025",
    time: "6:00pm",
    link: '',
    description:
      "A fun evening for all teens with games, discussions, and snacks!",
  },
];

const pastStreams: Service[] = [
  {
    id: "4",
    title: "Men's Fellowship Breakfast",
    date: "Saturday, January 27, 2025",
    time: "8:00am",
    link: '',
    description:
      "Join us for a hearty breakfast and great fellowship among men.",
  },
  {
    id: "5",
    title: "Women's Bible Study",
    date: "Tuesday, January 30, 2025",
    time: "6:30pm",
    link: '',
    description:
      "Explore faith and life with other women in a supportive environment.",
  },
  {
    id: "6",
    title: "Community Service Day",
    date: "Saturday, February 3, 2025",
    time: "9:00am",
    link: '',
    description:
      "Join us as we serve our local community through various projects.",
  },
  {
    id: "7",
    title: "Children's Church",
    date: "Sunday, February 4, 2025",
    time: "10:00am",
    link: '',
    description:
      "A fun and engaging service for kids during our main worship service. hdbhgfusgfuhfsuhghfugfushgfhjfsjhgfhfsghfsghfshjfshfjdjdhhfhfdhhdhhdhdhdhdhdhdhghegdjvd",
  },
  {
    id: "8",
    title: "Family Game Night",
    date: "Saturday, February 10, 2025",
    time: "6:00pm",
    link: '',
    description: "Bring your family for an evening of games and bonding time!",
  },
  {
    id: "9",
    title: "Ash Wednesday Service",
    date: "Wednesday, February 14, 2025",
    time: "7:00pm",
    link: '',
    description:
      "Join us for a reflective service marking the beginning of Lent.",
  },
];

const Livestreams = () => {
  let channelId = "UC-yFRVi-sdCLAQzaEyYuK5Q"; // For Baba mhi //"UCbgTbkCoakOEobyM0fzupvA";
  const [activeTab, setActiveTab] = useState<"live" | "past">("live");
  const { live, past, upcoming, loading, error, refetch } =
    useYouTubeStreams(channelId);

    console.log('Stats: ', {
      live, past, upcoming, loading, error, refetch
    });

  const currentServices = activeTab === "live" ? liveStreams : pastStreams;

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-primary text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-5">Live Streams & Services</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Can't make it to church in person? Join us online for live worship
            services and catch up on past services you may have missed.
          </p>
        </div>
      </div>

      {/* Tab Section */}
      <div className="max-w-6xl mx-auto px-6 py-8 mb-10 ">
        <div className="flex bg-white rounded-3xl shadow-sm overflow-hidden mb-8">
          <button
            onClick={() => setActiveTab("live")}
            className={`flex-1 py-4 font-semibold transition-colors ${
              activeTab === "live"
                ? "bg-[#1DAEEF] rounded-3xl text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Live Streams
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`flex-1 py-4 font-semibold transition-colors ${
              activeTab === "past"
                ? "bg-[#1DAEEF] rounded-3xl text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Past streams
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentServices.map((service) => (
            <div
              key={service.id}
              className="bg-white flex flex-col rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
                    {/* <Calendar className="w-4 h-4 text-red-500" /> */}
                    <Icon icon="solar:calendar-bold" width="24" height="24" />
                    <span className=" font-medium">{service.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
                    {/* <Clock className="w-4 h-4 text-gray-400" /> */}
                    <Icon icon="mingcute:time-line" width="24" height="24" />
                    <span className="">{service.time}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed text-wrap">
                  {service.description}
                </p>
              </div>

              <div className="flex relative items-end justify-end">
                <Button
                  content={
                    <a className="flex items-center gap-2" href={service.link}>
                      <Icon icon="hugeicons:play" width="30" height="30" />
                      Watch Live
                    </a>
                  }
                  onCLick={() => {} }
                  // className='items-end justify-end'
                />
              </div>
              {/* <button className="w-full bg-blue-900 text-white py-3 rounded-2xl font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-white" />
                <Icon icon="hugeicons:play"  width="30" height="30" />
                Watch Live
              </button> */}
            </div>
          ))}
        </div>
      </div>

      {/* Help Connecting? */}
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-xl py-14 mb-10 font-semibold text-center space-y-5">
        <h3 className="text-xl">Need help trying to connect?</h3>
        <h3>Our technical team is here to help during service times.</h3>
        <h3>
          Send an email to :{" "}
          <a
            className="text-blue-400"
            href="mailto:support@comfortlifemission.com"
          >
            {" "}
            support@comfortlifemission.com
          </a>
        </h3>
      </div>

      {/* Life to Jesus */}
      <LifeToJesus />
    </div>
  );
};

export default Livestreams;
