import { Calendar, MapPin } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            RVITM CubeVerse 2025
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90">
            Official World Cube Association Competition
          </p>

          {/* Event Poster */}
          <div className="my-8">
            <img 
              src="/cubeverse.png" 
              alt="CubeVerse 2025 Event Poster" 
              className="mx-auto rounded-lg shadow-2xl max-w-full md:max-w-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              <span>November 29-30, 2025</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>RV Institute of Technology and Management, Bengaluru</span>
            </div>
          </div>

          <div className="pt-8">
            <CountdownTimer />
          </div>

          <div className="pt-8">
            <a
              href="https://pages.razorpay.com/pl_RZIOpv3dXxZ0Eg/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-bold hover:bg-accent/90 transition-smooth shadow-hover"
            >
              Register & Pay Now
            </a>
          </div>

          <p className="text-sm opacity-75 pt-4">
            Competitor Limit: 120 | Registration Fee: ₹1,000 - ₹1,500
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
