import { Trophy, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            About the Competition
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Official WCA Event</h3>
              <p className="text-muted-foreground">
                Recognized by the World Cube Association with official rankings
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-smooth">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">120 Competitors</h3>
              <p className="text-muted-foreground">
                Limited slots for speedcubers from across India
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Multiple Events</h3>
              <p className="text-muted-foreground">
                Compete in various cube solving challenges
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-primary">RCA</span> proudly presents{" "}
              <span className="font-semibold">RVITM CubeVerse 2025</span>, an official World Cube 
              Association (WCA) recognized competition. This event brings together the speedcubing 
              community for two days of intense competition and camaraderie.
            </p>

            <p className="text-lg leading-relaxed">
              Organized by <span className="font-semibold text-primary">RVITM Cubing Association</span>, 
              <span className="font-semibold text-primary">CubeX RVCE</span>,{" "}and{" "}
              <span className="font-semibold text-primary">Speed Cubing Bangalore</span>, this 
              competition upholds all WCA regulations and standards. All competitors must be familiar 
              with the{" "}
              <a 
                href="https://www.worldcubeassociation.org/regulations/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                WCA Regulations
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
