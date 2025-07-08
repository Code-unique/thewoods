import React from "react";
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { FaWifi, FaMountain, FaTree, FaConciergeBell, FaTv, FaFire, FaBed, FaShieldAlt, FaLeaf, FaCrown, FaParking, FaKey } from 'react-icons/fa';
import { rooms } from "../data/roomData";

const whyChooseUs = [
  {
    icon: <FaMountain className="text-3xl mx-auto mb-2" />,
    title: 'Stunning Views',
    description: 'Every room offers breathtaking views of the surrounding mountains and forests.'
  },
  {
    icon: <FaLeaf className="text-3xl mx-auto mb-2" />,
    title: 'Nature Integration',
    description: 'Thoughtfully designed to harmonize with the natural environment.'
  },
  {
    icon: <FaCrown className="text-3xl mx-auto mb-2" />,
    title: 'Luxury Amenities',
    description: 'Premium furnishings and modern amenities for ultimate comfort.'
  },
  {
    icon: <FaParking className="text-3xl mx-auto mb-2" />,
    title: 'Spacious Parking',
    description: 'Ample parking space for guests with vehicles, ensuring easy access.'
  },
];

const amenityIcons = {
  'Free WiFi': <FaWifi />, 'Mountain View': <FaMountain />, 'Forest View': <FaTree />, 'Private Balcony': <FaKey />, 'Room Service': <FaConciergeBell />, 'TV': <FaTv />, 'Fireplace': <FaFire />, 'Safe': <FaShieldAlt />, 'Work Desk': <FaBed />
};

export default function Rooms() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <PageHero
        kicker="Accommodations"
        title="Luxury Rooms & Villas"
        subtitle="Discover your perfect sanctuary where comfort meets nature"
        bgImage="https://images.unsplash.com/photo-1560200353-ce0a76b1d425?auto=format&fit=crop&w=1200&q=80"
      />
      {/* Gap after hero section */}
      <div className="h-10 md:h-16" />
      {/* Room Listing Section */}
      <div className="container mx-auto px-4 pb-20">
        {rooms.map((room, idx) => (
          <div key={room._id} className={`bg-[var(--bg)] rounded-2xl flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-stretch mb-12 overflow-hidden`}>
            {/* Image + badges */}
            <div className="relative md:w-1/2 w-full bg-[var(--bg)] h-full">
              <div className="relative w-full h-full min-h-[380px]">
                <img src={room.images && room.images[0]} alt={room.title} className="w-full h-full object-cover rounded-2xl transition-all duration-700 hover:scale-105" />
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">Featured</span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-green-600 text-white text-base font-bold px-5 py-2 rounded-full shadow">NPR {room.price}</span>
                </div>
              </div>
            </div>
            {/* Info */}
            <div className="flex flex-col justify-between p-10 md:w-1/2 w-full h-full bg-[var(--bg)]">
              <div>
                <h2 className="font-playfair font-bold leading-tight mb-4 text-[color:var(--heading)] text-3xl md:text-5xl">{room.title}</h2>
                <p className="text-lg text-gray-500 mb-6">{room.description ? room.description.split('\n')[0] : "No description available."}</p>
                <div className="flex flex-wrap gap-8 mb-6">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Max Guests</div>
                    <div className="text-lg font-bold text-gray-900">{room.maxGuest} People</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Room Size</div>
                    <div className="text-lg font-bold text-gray-900">{room.roomSize || "Spacious"}</div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-base font-semibold text-gray-900 mb-2">Amenities</div>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(room.amenities) && room.amenities.length > 0
                      ? room.amenities.map((amenity, i) => (
                        <span key={i} className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                          {amenityIcons[amenity] || null} {amenity}
                        </span>
                      ))
                      : <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">No amenities listed.</span>
                    }
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <Link to={`/rooms/${room.slug}`} className="flex-1 block text-center px-4 py-3 bg-green-600 text-white text-base font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200">View Details</Link>
                <Link to="/booking" className="flex-1 block text-center px-4 py-3 bg-white border border-green-600 text-green-600 text-base font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200">Book Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Why Choose Our Rooms Section */}
      <section className="py-16 bg-white/60 border-t border-black/10 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-4">Why Choose Our Rooms?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every accommodation is designed with your comfort and connection to nature in mind</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
