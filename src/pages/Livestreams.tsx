import React, { useState } from "react";
// import { Calendar, Clock, Play } from "lucide-react";

interface Service {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
}

const liveStreams: Service[] = [
  {
    id: "1",
    title: "Sunday Morning Worship Service",
    date: "Sunday, January 21, 2025",
    time: "10:00am",
    description:
      "Join us for our weekly worship service featuring inspiring music, fellowship, and a message",
  },
  {
    id: "2",
    title: "Wednesday Evening Bible Study",
    date: "Wednesday, January 24, 2025",
    time: "7:00pm",
    description:
      "Dive deep into scripture and connect with others in study and prayer.",
  },
  {
    id: "3",
    title: "Youth Group Meeting",
    date: "Friday, January 26, 2025",
    time: "6:00pm",
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
    description:
      "Join us for a hearty breakfast and great fellowship among men.",
  },
  {
    id: "5",
    title: "Women's Bible Study",
    date: "Tuesday, January 30, 2025",
    time: "6:30pm",
    description:
      "Explore faith and life with other women in a supportive environment.",
  },
  {
    id: "6",
    title: "Community Service Day",
    date: "Saturday, February 3, 2025",
    time: "9:00am",
    description:
      "Join us as we serve our local community through various projects.",
  },
  {
    id: "7",
    title: "Children's Church",
    date: "Sunday, February 4, 2025",
    time: "10:00am",
    description:
      "A fun and engaging service for kids during our main worship service.",
  },
  {
    id: "8",
    title: "Family Game Night",
    date: "Saturday, February 10, 2025",
    time: "6:00pm",
    description: "Bring your family for an evening of games and bonding time!",
  },
  {
    id: "9",
    title: "Ash Wednesday Service",
    date: "Wednesday, February 14, 2025",
    time: "7:00pm",
    description:
      "Join us for a reflective service marking the beginning of Lent.",
  },
];

const Livestreams = () => {
  const [activeTab, setActiveTab] = useState<"live" | "past">("live");

  const currentServices = activeTab === "live" ? liveStreams : pastStreams;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Live Streams & Services</h1>
          <p className="text-blue-100 leading-relaxed">
            Can't make it to church in person? Join us online for live worship
            services and catch up on past services you may have missed.
          </p>
        </div>
      </div>

      {/* Tab Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <button
            onClick={() => setActiveTab("live")}
            className={`flex-1 py-4 font-semibold transition-colors ${
              activeTab === "live"
                ? "bg-sky-400 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Live Streams
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`flex-1 py-4 font-semibold transition-colors ${
              activeTab === "past"
                ? "bg-sky-400 text-white"
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
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  {/* <Calendar className="w-4 h-4 text-red-500" /> */}
                  <span className="text-red-500 font-medium">
                    {service.date}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {/* <Clock className="w-4 h-4 text-gray-400" /> */}
                  <span className="text-gray-600">{service.time}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                {/* <Play className="w-4 h-4 fill-white" /> */}
                Watch Live
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Livestreams;
