import HomeAbout from "../components/home/HomeAbout";
import FeaturedRooms from "../components/home/FeaturedRooms";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import Activities from "../components/home/Activities";


export default function HomePage() {
  return (
    <>
      <section className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 py-16">
          <h1 className="text-3xl md:text-6xl !text-white font-bold mb-4 drop-shadow-lg">
            The Woods Charikot Resort
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Luxury Hillside Resort in the Heart of Nature. <br />
            Unwind, recharge, and reconnect with yourself and the wild.
          </p>
          <a
            href="/booking"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded shadow transition"
          >
            Book your stay
          </a>
        </div>
      </section>

      <HomeAbout />

      <FeaturedRooms />

      <Features />

      <Testimonials />

      <Activities />

    </>
  );
}
