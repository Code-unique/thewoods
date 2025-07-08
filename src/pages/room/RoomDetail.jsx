import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useRoom } from "../../context/RoomContext";
import {
  FaWifi,
  FaMountain,
  FaTree,
  FaConciergeBell,
  FaTv,
  FaFire,
  FaUserFriends,
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

export default function RoomDetail() {
  const { slug } = useParams();
  const { rooms, fetchRooms, loading } = useRoom();
  const room = rooms.find((r) => r.slug === slug);

  // If rooms not loaded yet, fetch them
  useEffect(() => {
    if (!rooms.length) fetchRooms();
  }, [rooms, fetchRooms]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (!room) return <div className="text-center p-10">Room not found.</div>;

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">{room.title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={room.images[0]}
          alt={room.title}
          className="rounded-lg w-full md:w-1/2 object-cover"
          loading="lazy"
        />

        <div className="md:w-1/2">
          <p className="mb-6">{room.description}</p>

          <h2 className="text-xl font-semibold mb-3">Amenities</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {room.amenities?.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1 rounded"
              >
                {amenityIcons[amenity] || null}
                <span>{amenity}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-3">Price</h2>
          <p className="text-2xl font-bold mb-6">NPR {room.price}</p>

          <Link
            to="/booking"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
