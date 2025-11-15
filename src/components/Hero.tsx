import React from "react";
import { Calendar, MapPin } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const targetDate = new Date("2025-11-29T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px] sm:min-w-[70px]">
            <div className="text-2xl sm:text-3xl font-bold">{value}</div>
          </div>
          <div className="text-[10px] sm:text-xs uppercase mt-1 opacity-80">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-white pt-20 sm:pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight font-Main2">
                WCA
                <br />
                <span className="text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-rose-600 via-pink-500 to-blue-900 bg-clip-text text-transparent">
                  OFFICIAL EVENT
                </span>
              </h1>

              
            </div>

            {/* Booking Card */}
            <div className="bg-gradient-to-br from-rose-400 to-lime-400 rounded-full p-5 sm:p-6 max-w-sm mx-auto lg:mx-0 shadow-xl">
              <div className="bg-yellow-300 rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="text-xl sm:text-2xl">🎲</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 font-sec">
                      REGISTER NOW
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900 font-sec">
                      ONLINE
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-700 font-sec">
                  Official WCA Competition. Secure your spot - Limited to 120
                  competitors!
                </p>
              </div>

              <a
                href="https://pages.razorpay.com/pl_RZIOpv3dXxZ0Eg/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-900 text-white rounded-xl py-3 sm:py-4 px-5 sm:px-6 font-bold text-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl rotate-2 transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-sec">REGISTER NOW</span>
                  <span className="text-xl sm:text-2xl">→</span>
                </div>
              </a>
            </div>

            {/* Event Details */}
            <div className="flex flex-col gap-3 text-gray-700 items-center lg:items-start font-Main">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">
                  November 29-30, 2025
                </span>
              </div>
              <div className="flex items-center gap-3 text-center sm:text-left">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-bold text-sm sm:text-base text-neutral-950">
                  RV Institute of Technology and Management
                </span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-br from-amber-500 via-rose-900 to-neutral-900 rounded-3xl p-5 sm:p-6 text-white max-w-md mx-auto lg:mx-0">
              <h3 className="text-xs  font-sec sm:text-sm uppercase tracking-wider mb-4 opacity-90">
                Event Countdown
              </h3>
              <CountdownTimer />
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:h-[600px] h-[300px] sm:h-[400px] mt-6 lg:mt-0">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/cubeverse.png"
                alt="CubeVerse 2025"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-gradient-to-br from-yellow-400 to-lime-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-gray-900">
                  PUSH
                </div>
                <div className="text-xl sm:text-3xl font-bold text-gray-900">
                  THE
                </div>
                <div className="text-xl sm:text-3xl font-bold text-gray-900">
                  LIMITS
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-yellow-400 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 sm:w-32 h-20 sm:h-32 bg-lime-400 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
