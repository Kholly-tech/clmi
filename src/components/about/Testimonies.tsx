import { useEffect, useState } from "react";
import { client } from "../../sanity/client";

export interface Testimony {
  _id: string;
  name: string;
  testimony: string;
  date: string;
  link: string;
}

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    client
      .fetch(
        `*[_type == 'testimony'] {
          _id,
          name,
          testimony,
          link,
          date,
        } | order(date desc)`
      )
      .then((data) => {
        console.log("Fetched testimonies: ", data);
        setTestimonies(data);
      })
      .catch((err) => {
        console.log("Error fetching testimonies: ", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="my-16 px-4 sm:px-8 md:px-16 lg:px-24 mx-auto text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-64 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border-2 rounded-2xl p-6 h-64 bg-gray-100"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-16 px-4 sm:px-8 md:px-16 lg:px-24 mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="font-bold text-primary text-3xl md:text-4xl lg:text-5xl mb-4">
          Testimonies
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
          Boost your faith with powerful testimonies from our community
        </p>
      </div>

      {/* Testimonies Grid */}
      {testimonies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No testimonies available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonies.map((testimony) => (
            <div
              key={testimony._id}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              {/* Testimony Text */}
              <div className="flex-1 mb-6">
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed line-clamp-6">
                  "{testimony.testimony}"
                </p>
              </div>

              {/* Footer with Name and Date */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {testimony.name}
                    </p>
                    {testimony.date && (
                      <p className="text-sm text-gray-500 mt-1">
                        {formatDate(testimony.date)}
                      </p>
                    )}
                  </div>

                  {/* Optional: Add a share/link icon if link exists */}
                  {testimony.link && (
                    <a
                      href={testimony.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Optional: Load More Button for pagination */}
      {testimonies.length > 6 && (
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            Load More Testimonies
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonies;
