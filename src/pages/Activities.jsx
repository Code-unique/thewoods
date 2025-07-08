import React, { useState } from "react";
import { useActivity } from "../context/ActivityContext";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import {
  FaUsers,
  FaGlassCheers,
  FaSeedling,
  FaHiking,
  FaStar,
} from "react-icons/fa";

const categories = [
  { name: "All Activities", icon: FaStar },
  { name: "Cultural", icon: FaUsers },
  { name: "Events", icon: FaGlassCheers },
  { name: "Nature", icon: FaSeedling },
  { name: "Adventure", icon: FaHiking },
];

export default function Activities() {
  const { activities, loading } = useActivity();
  const [selectedCategory, setSelectedCategory] = useState("All Activities");

  if (loading) return <div className="text-center p-10">Loading activities...</div>;

  const filteredActivities =
    selectedCategory === "All Activities"
      ? activities
      : activities.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <PageHero
        kicker="Adventures & Experiences"
        title="Unforgettable Activities"
        subtitle="Discover the beauty of Charikot through our curated experiences."
        bgImage="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1200&q=80"
      />

      <div className="py-12 bg-[var(--bg)]">
        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-x-10 gap-y-3">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setSelectedCategory(name)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer transition
                ${
                  selectedCategory === name
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-teal-400 hover:text-white"
                }
              `}
            >
              <Icon />
              {name}
            </button>
          ))}
        </div>
      </div>

      <section className="pt-8 pb-20 bg-[var(--bg)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div key={activity._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={activity.images?.[0]}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-700 line-clamp-3 mb-4">{activity.description}</p>
                  <Link
                    to={`/activities/${activity.slug}`}
                    className="text-teal-600 hover:text-teal-800 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
