import {
  Calendar,
  MapPin,
  Users,
  IndianRupee,
  Clock,
  AlertCircle,
  Award,
} from "lucide-react";

const EventDetails = () => {
  return (
    <section
      id="details"
      className="py-20 sm:py-24 bg-gradient-to-br from-white  to-rose-50  relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-[-5%] w-64 h-64 bg-yellow-300/30 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-[-5%] w-96 h-96 bg-lime-400/30 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-neutral-900  to-green-600 bg-clip-text text-transparent font-Main">
              <span className="font-Main2 bg-gradient-to-r from-rose-500 to-neutral-900 bg-clip-text text-transparent">Event</span> <span>Information</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-sec2">
            Join us for{" "}
            <span className="font-semibold text-emerald-600">
              RVITM CubeVerse 2025
            </span>{" "}
            — a two-day official WCA competition uniting speedcubers from across
            India for intense solves and unforgettable moments.
          </p>
        </div>

        {/* Quick Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Calendar className="w-5 h-5 text-blue-600" />,
              bg: "bg-blue-100",
              title: "Date",
              text: "November 29–30, 2025",
            },
            {
              icon: <MapPin className="w-5 h-5 text-green-600" />,
              bg: "bg-green-100",
              title: "Location",
              text: "RVITM, Bengaluru",
              subtext: "5th Floor",
            },
            {
              icon: <Users className="w-5 h-5 text-purple-600" />,
              bg: "bg-purple-100",
              title: "Capacity",
              text: "120 Competitors",
            },
            {
              icon: <IndianRupee className="w-5 h-5 text-amber-600" />,
              bg: "bg-amber-100",
              title: "Registration",
              text: "₹1,000-₹1,500",
              subtext: "Based on events",
            },
          ].map((item, index) => (
            <div
              key={index}
              className=" rounded-lg border border-pink-200 hover:ring-1 hover:ring-rose-600  transition-all duration-300 p-6 sm:p-8 text-center sm:text-left "
            >
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center`}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 font-Main">{item.title}</h3>
              </div>
              <p className="text-gray-700 font-medium font-sec">{item.text}</p>
              {item.subtext && (
                <p className="text-sm text-gray-500 mt-1 font-sec">{item.subtext}</p>
              )}
            </div>
          ))}
        </div>

        {/* Venue and Fee Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Venue */}
          <div className=" rounded-lg shadow-md border border-gray-900  p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-Main">
                  Venue Details
                </h3>
                <p className="text-gray-700 leading-relaxed font-sec2">
                  RV Institute of Technology and Management
                  <br />
                  Chaithanya Layout, 8th Phase, J.P. Nagar
                  <br />
                  Bengaluru, Karnataka 560076
                  <br />
                  <span className="text-sm text-gray-500">Competition Hall: 5th Floor</span>
                </p>
              </div>
            </div>
          </div>

          {/* Registration Fees */}
          <div className=" rounded-lg shadow-md border border-gray-900 p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <IndianRupee className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-Main">
                  Registration Fees
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center font-sec2">
                    <span className="text-gray-600">1-4 events</span>
                    <span className="font-semibold text-gray-900">₹1,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">5-8 events</span>
                    <span className="font-semibold text-gray-900">₹1,500</span>
                  </div>
                  <p className="text-sm text-gray-500 pt-3 border-t border-gray-100">
                    All fees are non-refundable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Timeline */}
        <div className="bg-gradient-to-r border-b-2 border-t-2 from-emerald-50 via-lime-50 to-yellow-50  border-emerald-800 rounded-2xl shadow-lg p-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-Main">
                Registration Timeline
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 font-sec">
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-medium">Opens</p>
                  <p className="text-gray-900 font-semibold">November 3, 2025</p>
                  <p className="text-sm text-gray-600">5:30 PM IST</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-medium">Closes</p>
                  <p className="text-gray-900 font-semibold">November 26, 2025</p>
                  <p className="text-sm text-gray-600">5:30 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Guidelines */}
        <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-rose-50 border-b-2 border-t-2 border-amber-900 rounded-3xl shadow-sm p-8 mb-14">
          <div className="flex items-start gap-4">
            
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-Main">
                Important Guidelines
              </h3>
              <ul className="space-y-2.5 text-gray-900 font-sec2">
                {[
                  "Registration fees are non-refundable under all circumstances.",
                  "On-the-spot registrations will not be accepted.",
                  "Only pre-registered competitors may participate.",
                  "Each competitor may bring a maximum of one guest.",
                  "Waitlisted registrants may be accepted until the closing date.",
                  "Event modifications can be requested before registration closes by contacting the organizing team.",
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1.5">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Organizers */}
        <div className=" rounded-3xl p-8 sm:p-10   text-center">
          
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-Main2">
            Organized By
          </h3>
          <p className="text-gray-700 mb-4 text-base sm:text-lg font-Main">
            RVITM Cubing Association, CubeX RVCE, and Speed Cubing Bangalore
          </p>
          <p className="text-gray-600 text-sm font-sec">
            <span className="font-semibold text-gray-900">WCA Delegate:</span>{" "}
            Sukesh Kumar
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
