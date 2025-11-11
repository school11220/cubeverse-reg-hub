import React from 'react';
import { Trophy, Users, Globe, Award, Target, Sparkles } from "lucide-react";

const About = () => {
  // Quick stats for the competition
  const stats = [
    { icon: Trophy, number: "120", label: "Competitors", color: "from-yellow-400 to-amber-500" },
    { icon: Award, number: "2", label: "Days Event", color: "from-lime-400 to-green-500" },
    { icon: Target, number: "WCA", label: "Official", color: "from-rose-400 to-pink-500" }
  ];

  return (
    <section id="about" className="py-10 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-lime-400 text-gray-900 px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              About the Competition
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-">
            <h2 className='font-Main2'>COMPETE</h2> AT THE
            <br />
            <span className="text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-yellow-500 via-lime-500 to-green-500 bg-clip-text text-transparent font-Main">
              HIGHEST LEVEL
            </span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-2xl mx-auto ">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-gradient-to-tr from-slate-100 to-lime-100  rounded-2xl sm:rounded-3xl p-2 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 font-sec2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium font-sec2">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content Cards */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* WCA Recognition - Hero Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10">
                <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-lime-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 font-Main ">Official WCA Recognition</h3>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      <span className="font-semibold text-rose-400 font-sec2">RVITM CubeVerse 2025</span> is an official World Cube 
                      Association (WCA) recognized competition. This event brings together the speedcubing 
                      community for two days of intense competition and camaraderie.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elite Competition Card */}
            <div className=" rounded-2xl sm:rounded-3xl p-4 sm:p-8  hover:ring-1 hover:ring-pink-200 transition-all duration-300 border-2 border-gray-100">
             
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-sec">Elite Competition</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sec2">
                Limited slots for speedcubers from across India. First come, first served registration
              </p>
            </div>

            {/* Multiple Events Card */}
            <div className=" rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:ring-1 hover:ring-pink-200 transition-all duration-300  border-2 border-gray-100">
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-sec">Multiple Events</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sec2">
                Compete in various cube solving challenges across different categories and difficulty levels
              </p>
            </div>
          </div>
        </div>

        {/* Organizers */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-lime-400 via-yellow-400 to-rose-400 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-6 sm:p-10">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-Main">Organized By</h3>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-base sm:text-lg">
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 px-4 sm:px-6 py-2 rounded-full font-bold text-gray-900 font-sec">
                    RVITM Cubing Association
                  </span>
                  <span className="bg-gradient-to-r from-lime-400 to-green-500 px-4 sm:px-6 py-2 rounded-full font-bold text-gray-900 font-sec">
                    CubeX RVCE
                  </span>
                  <span className="bg-gradient-to-r from-rose-400 to-pink-500 px-4 sm:px-6 py-2 rounded-full font-bold text-gray-900 font-sec">
                    Speed Cubing Bangalore
                  </span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm sm:text-base text-gray-700 mb-4 font-sec2">
                  This competition upholds all WCA regulations and standards. All competitors must be familiar with the official guidelines.
                </p>
                <a 
                  href="https://www.worldcubeassociation.org/regulations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base font-sec"
                >
                  View WCA Regulations
                  <span className="text-lg sm:text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;