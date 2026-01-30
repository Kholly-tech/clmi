import { Icon } from "@iconify/react";
// import programs from "../../assets/images/programs.jpg";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { client } from "../../sanity/client";

const UpcomingPrograms = () => {
  // const upcomingPrograms = [
  //   {
  //     image: programs,
  //     title: "Sunday Worship Service",
  //     desc: "Join us for a time of worship and fellowship every sunday",
  //     date: "Every Sunday",
  //     time: "9am ( GMT+1)",
  //   },
  // ];

  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'upcomingProgram'] {
      title,
      description,
      on,
      flier {
        asset -> {
          _id,
          url
        },
        alt,
      },
      } | order(publishedAt desc)`
      )
      .then((data) => {
        console.log("Fetched data: ", data);
        // console.log("Format date: ", format(data[0].on, ""));
        // console.log("This: ", {
        //   date: data[0].on,
        //   desc: data[0].description,
        //   flier: data[0].flier,
        // });
        setUpcoming(data);
      })
      .catch((err) => {
        console.log("Error fetching: ", err);
      })
      .finally(() => {
        // console.log("Upcoming data: ", upcoming);
      });
  }, []);

  return (
    <div className="font-sans px-3 my-16">
      <h3 className="text-4xl text-primary ml-20 font-bold">
        Upcoming Programs
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-8 px-3 md:px-10 lg:px-15 xl:px-25 gap-6">
        {upcoming &&
          upcoming.map((program: any, i) => {
            const datetimeString = program.on;

            // 1. Parse the string into a Date object
            const dateObject = parseISO(datetimeString);

            // 2. Format the Date object to extract date and time components
            const datePart = format(dateObject, "dd-MM-yyyy");
            const timePart = format(dateObject, "HH:mm a");

            // console.log("Original Datetime String:", datetimeString);
            // console.log("Separated Date:", datePart);
            // console.log("Separated Time:", timePart);
            return (
              <div key={i} className="flex flex-col rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="h-96">
                  <img
                    src={program.flier.asset.url}
                    alt={`Hero slide ${i + 1}`}
                    className="w-full h-full rounded-t-3xl object-cover"
                  />
                </div>
                <div className="mt-10 ml-7 flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-1">
                    {program.title}
                  </h3>
                  <h6 className="text-lg md:text-xl mb-5">
                    {program.description}
                  </h6>
                </div>
                <div className="ml-7 items-end justify-end">
                  <span className="flex gap-2 items-center text-red-500 mb-2">
                    <Icon icon="solar:calendar-bold" width="24" height="24" />{" "}
                    <span className="font-semibold">{datePart}</span>
                  </span>
                  <span className="flex gap-2 items-center text-red-500">
                    <Icon icon="mingcute:time-line" width="24" height="24" />
                    <span className="font-semibold">{timePart}</span>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UpcomingPrograms;
