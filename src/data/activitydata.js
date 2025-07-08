import { FaHiking, FaSeedling, FaUsers, FaGlassCheers } from 'react-icons/fa';

// Function to generate a slug from a title
const generateSlug = (title) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

const activities = [
  {
    id: 1,
    title: "Exploring the Local Culture",
    image: "https://images.unsplash.com/photo-1534532787225-b4b3e640b3de?auto=format&fit=crop&w=800&q=80",
    description: "Explore the local culture and traditions of the region.",
    Icon: FaUsers,
    longDescription: "Discover the rich heritage of Dolakha. Visit ancient temples, experience traditional Newar and Tamang customs, and immerse yourself in local festivals, crafts, and cuisine.",
    groupSize: "Small Groups",
    category: "Cultural",
    featured: true,
  },
  {
    id: 2,
    title: "Banquet Service",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    description: "Celebrate your special moments in the heart of nature.",
    Icon: FaGlassCheers,
    longDescription: "Our resort offers the perfect setting for your special events. Whether it's a wedding, anniversary, or corporate retreat, our banquet services provide a memorable experience with stunning natural backdrops.",
    groupSize: "Varies",
    category: "Events",
    featured: true,
  },
  {
    id: 3,
    title: "Agriculture Camp",
    image: "https://images.unsplash.com/photo-1597916819322-19297071a153?auto=format&fit=crop&w=800&q=80",
    description: "Experience sustainable agriculture practices firsthand.",
    Icon: FaSeedling,
    longDescription: "Join our agriculture camp to learn about organic farming and sustainable living. Participate in hands-on activities and gain insight into the local agricultural lifestyle.",
    groupSize: "Small Groups",
    category: "Nature",
    featured: true,
  },
  {
    id: 4,
    title: "Hiking and Nature Trails",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    description: "Discover the breathtaking beauty of Dolakha's landscapes.",
    Icon: FaHiking,
    longDescription: "Explore the pristine nature trails surrounding our resort. Our guided hikes lead you through lush forests, scenic viewpoints, and diverse ecosystems, offering a refreshing outdoor adventure.",
    groupSize: "Small Groups",
    category: "Adventure",
    featured: true,
  },
];

// Add a slug to each activity
const activitiesWithSlug = activities.map(activity => ({
  ...activity,
  slug: generateSlug(activity.title)
}));

export { activitiesWithSlug as activities }; 