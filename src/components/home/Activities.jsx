import { FaHiking, FaMountain, FaUmbrellaBeach, FaCamera } from 'react-icons/fa';

const activities = [
  {
    icon: <FaHiking size={40} className="text-green-600" />,
    title: "Hiking & Nature Trails",
    description: "Explore the beautiful trails around Charikot with guided or self-guided hikes.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FaMountain size={40} className="text-blue-600" />,
    title: "Mountain Views",
    description: "Experience breathtaking views of the Himalayas and surrounding landscapes.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FaUmbrellaBeach size={40} className="text-yellow-500" />,
    title: "Outdoor Relaxation",
    description: "Unwind in our peaceful gardens and outdoor relaxation areas.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FaCamera size={40} className="text-purple-600" />,
    title: "Photography Spots",
    description: "Discover perfect spots for capturing memorable moments and stunning landscapes.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Activities() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        {/* Activities Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold">
            Resort Activities
          </h1>
          <p className="text-gray-600 text-lg mt-2">Explore and experience the best of Charikot</p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  {activity.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <a 
                  href="/activities" 
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Activities Button */}
        <div className="flex justify-center mb-16">
          <a
            href="/activities"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            View All Activities
          </a>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Ready for Your Mountain Adventure?
            </h1>
            <p className="text-gray-600 mb-8">
              Experience the magic of the Himalayas at The Woods Charikot Resort. 
              Book your stay now and create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/booking" 
                className="px-8 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold"
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
