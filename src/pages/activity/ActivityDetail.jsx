import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActivity } from "../../context/ActivityContext";

export default function ActivityDetail() {
  const { slug } = useParams();
  const { activities, fetchActivities, loading } = useActivity();
  const activity = activities.find((a) => a.slug === slug);

  useEffect(() => {
    if (!activities.length) fetchActivities();
  }, [activities, fetchActivities]);

  if (loading) return <div className="text-center p-10">Loading activity...</div>;
  if (!activity) return <div className="text-center p-10">Activity not found</div>;

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">{activity.title}</h1>

      <img
        src={activity.images?.[0]}
        alt={activity.title}
        className="rounded-lg w-full max-w-3xl mx-auto mb-8 object-cover"
        loading="lazy"
      />

      <p className="mb-6">{activity.description}</p>

      {/* Add more details as needed */}
    </div>
  );
}
