

interface Ministry {
  id: string;
  title: string;
  description: string;
  image: string;
  schedule: string;
  time: string;
}

const ministries: Ministry[] = [
  {
    id: "1",
    title: "Men of Honour",
    description:
      "The gathering of married brothers in the church, a fellowship that fosters leadership, unity, and love in Christ",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    schedule: "Every Third Sunday of the month",
    time: "After Church service",
  },
  {
    id: "2",
    title: "Comfort Women",
    description:
      "The gathering of married sisters in the church, a fellowship that fosters leadership, unity, and love in Christ",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    schedule: "Every Second Sunday of the month",
    time: "After Church service",
  },
  {
    id: "3",
    title: "Comfort Teens",
    description: "The gathering of teenagers from age 13 above",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    schedule: "Every Sunday",
    time: "After Church service",
  },
];

const Ministries = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-primary text-white py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-5">Our Ministries</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            At Comfort Life Mission, our ministries are designed to help people
            grow in faith, find purpose, and impact their world. We believe
            every member of the body of Christ has a place to belong and serve.
            Our ministries are platforms to grow spiritually, connect with
            others, and fulfill God's purpose
          </p>
        </div>
      </div>

      {/* Ministries List */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {ministries.map((ministry) => (
            <div
              key={ministry.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Image */}
                <div className="rounded-lg overflow-hidden h-64 md:h-auto">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {ministry.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {ministry.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      {/* <Calendar className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /> */}
                      <span className="text-gray-700">{ministry.schedule}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      {/* <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" /> */}
                      <span className="text-gray-600">{ministry.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ministries