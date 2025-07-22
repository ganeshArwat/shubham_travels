import { Link as ScrollLink } from 'react-scroll';
const Home = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 bg-gradient-to-br from-white via-sky-50 to-blue-100 overflow-hidden"
    >
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 z-0 pointer-events-none">
        <img src="/assets/img/hero/bg2.png" alt="" className="h-full object-cover mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed tracking-normal">
            Drive with Style & Comfort <br />
            <span className="text-[#7b1f1f] font-bold">The Travel Empire</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Premium white cars. Safe, clean, and reliable. <br className="hidden sm:block" />
            Travel across Mumbai and beyond with elegance and peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/9326221811?text=Hi%2C%20I%20want%20to%20book%20a%20vehicle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7b1f1f] hover:bg-[#5e1515] text-white px-6 py-3 rounded-full font-medium shadow-md transition duration-300"
            >
              🚗 Book Now
            </a>
            <ScrollLink
              to="vehicles"
              smooth={true} duration={500} offset={-80}
              className="border-2 border-[#7b1f1f] text-[#7b1f1f] hover:bg-[#7b1f1f] hover:text-white px-6 py-3 rounded-full font-medium shadow-sm transition duration-300"
            >
              View Fleet
            </ScrollLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-blue-100 rounded-full blur-2xl opacity-50 z-0"></div>
          <img
            src="/assets/img/hero/car1.jpg"
            alt="Luxury Car"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 z-10 relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
