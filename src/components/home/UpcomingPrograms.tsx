import { Icon } from "@iconify/react";
import programs from "../../assets/images/programs.jpg";

const UpcomingPrograms = () => {
  const upcomingPrograms = [
    {
      image: programs,
      title: "Sunday Worship Service",
      desc: "Join us for a time of worship and fellowship every sunday",
      date: "Every Sunday",
      time: "9am ( GMT+1)",
    },
    {
      image: programs,
      title: "Sunday Worship Service",
      desc: "Join us for a time of worship and fellowship every sunday",
      date: "Every Sunday",
      time: "9am ( GMT+1)",
    },
    {
      image: programs,
      title: "Sunday Worship Service",
      desc: "Join us for a time of worship and fellowship every sunday",
      date: "Every Sunday",
      time: "9am ( GMT+1)",
    },
  ];

  return (
    <div className="font-sans px-3 my-15">
      <h3 className="text-4xl text-primary ml-20 font-bold">
        Upcoming Programs
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-8 px-3 md:px-10 lg:px-15 xl:px-25 gap-6">
        {upcomingPrograms.map((program, i) => (
          <div>
            <div className="h-96">
              <img
                src={program.image}
                alt={`Hero slide ${i + 1}`}
                className="w-full h-full rounded-t-3xl object-cover"
              />
            </div>
            <div className="mt-10 ml-7">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-1">
                {program.title}
              </h3>
              <h6 className="text-lg md:text-xl mb-5">{program.desc}</h6>

              <span className="flex gap-2 items-center text-red-500 mb-2">
                <Icon icon="solar:calendar-bold" width="24" height="24" />{" "}
                <span className="font-semibold">{program.date}</span>
              </span>
              <span className="flex gap-2 items-center text-red-500">
                <Icon icon="mingcute:time-line" width="24" height="24" />
                <span className="font-semibold">{program.time}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPrograms;
