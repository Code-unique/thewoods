import React from "react";
import { useRoom } from "../context/RoomContext";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import {
  FaWifi,
  FaMountain,
  FaTree,
  FaConciergeBell,
  FaTv,
  FaFire,
  FaBed,
  FaShieldAlt,
  FaKey,
} from "react-icons/fa";

const amenityIcons = {
  "Free WiFi": <FaWifi />,
  "Mountain View": <FaMountain />,
  "Forest View": <FaTree />,
  "Private Balcony": <FaKey />,
  "Room Service": <FaConciergeBell />,
  TV: <FaTv />,
  Fireplace: <FaFire />,
  Safe: <FaShieldAlt />,
  "Work Desk": <FaBed />,
};

export default function Rooms() {
  const { rooms, loading } = useRoom();

  if (loading) return <div className="text-center p-10">Loading rooms...</div>;
  if (!rooms.length)
    return <div className="text-center p-10">No rooms available</div>;

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <PageHero
        kicker="Accommodations"
        title="Luxury Rooms & Villas"
        subtitle="Discover your perfect sanctuary where comfort meets nature"
        bgImage="https://images.unsplash.com/photo-1560200353-ce0a76b1d425?auto=format&fit=crop&w=1200&q=80"
      />

      <div className="container mx-auto px-4 pb-20">
        {rooms.map((room) => (
          <div
            key={room._id}
            className="mb-12 flex flex-col md:flex-row gap-6 rounded-lg bg-white shadow-lg"
          >
            <img
              src={room.images[0]}
              alt={room.title}
              className="w-full md:w-1/2 object-cover rounded-lg"
              loading="lazy"
            />
            <div className="p-6 flex flex-col justify-between md:w-1/2">
              <div>
                <h3 className="text-2xl font-bold mb-2">{room.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {room.amenities?.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-sm bg-teal-100 text-teal-700 px-3 py-1 rounded"
                    >
                      {amenityIcons[amenity] || null}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={`/rooms/${room.slug}`}
                className="self-start bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
