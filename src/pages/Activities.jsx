import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { activities } from '../data/activityData';
import { FaUsers, FaGlassCheers, FaSeedling, FaHiking, FaStar } from 'react-icons/fa';

const categories = [
  { name: "All Activities", icon: FaStar },
  { name: "Cultural", icon: FaUsers },
  { name: "Events", icon: FaGlassCheers },
  { name: "Nature", icon: FaSeedling },
  { name: "Adventure", icon: FaHiking },
];

// --- Component ---
export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState("All Activities");

  const filteredActivities =
    selectedCategory === "All Activities"
      ? activities
      : activities.filter((activity) => activity.category === selectedCategory);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <PageHero
        kicker="Adventures & Experiences"
        title="Unforgettable Activities"
        subtitle="Discover the beauty of Charikot through our carefully curated experiences. From thrilling adventures to peaceful cultural immersions."
        bgImage="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Category Filter Tabs */}
      <div className="py-12 bg-[var(--bg)]">
        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-x-10 gap-y-3">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setSelectedCategory(name)}
              className={`flex items-center gap-2 px-6 py-2 transition-all duration-300 border-b-2 rounded-t-lg
                ${selectedCategory === name
                  ? 'border-green-600 text-[var(--text)] font-bold bg-transparent'
                  : 'border-transparent text-[var(--text)]/70 font-normal hover:text-[var(--text)] bg-transparent'}
              `}
              style={{ boxShadow: 'none', background: 'none' }}
            >
              <Icon className="text-lg" />
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Activities Grid */}
      <section className="pt-8 pb-20 bg-[var(--bg)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div 
                key={activity.id} 
                className="group bg-white rounded-2xl shadow-sm overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-black/10 flex flex-col"
              >
                <div className="relative h-64">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                   <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 bg-white/80 text-gray-700 text-xs font-semibold shadow-sm">
                    {(() => {
                      const cat = categories.find(c => c.name.toLowerCase().includes(activity.category.toLowerCase()));
                      const Icon = cat ? cat.icon : FaStar;
                      return <Icon className="text-xs mr-1" />;
                    })()}
                    <span className="capitalize">{activity.category.toLowerCase()}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="text-green-600 text-2xl mr-3"><activity.Icon /></span>
                      <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">{activity.description}</p>
                    <Link to={`/activities/${activity.slug}`} className="mt-auto block w-full text-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200">
                      Learn More
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for Your Adventure?</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8 text-lg">
            Book your stay with us and experience the perfect blend of luxury and adventure in the heart of Charikot.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/booking" className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-transform hover:scale-105">
              Book Your Stay
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all hover:scale-105">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
