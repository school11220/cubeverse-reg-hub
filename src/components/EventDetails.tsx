import { Calendar, MapPin, Users, IndianRupee, Clock, AlertCircle } from "lucide-react";

const EventDetails = () => {
  return (
    <section id="details" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Event Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg shadow-card space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Date</h3>
                  <p className="text-muted-foreground">November 29-30, 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Venue</h3>
                  <p className="text-muted-foreground">
                    RV Institute of Technology and Management<br />
                    Chaithanya Layout, 8th Phase, J.P. Nagar<br />
                    Bengaluru, Kothnur, Karnataka 560076<br />
                    <span className="text-sm">(5th Floor)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card space-y-4">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Competitor Limit</h3>
                  <p className="text-muted-foreground">Maximum 120 competitors</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card space-y-4">
              <div className="flex items-start gap-4">
                <IndianRupee className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Registration Fee</h3>
                  <p className="text-muted-foreground">
                    ₹1,000 for 1-4 events<br />
                    ₹1,500 for 5-8 events
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg mb-8">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-3">Registration Period</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Opens:</span> Monday, November 3, 2025 at 5:30 PM IST
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Closes:</span> Wednesday, November 26, 2025 at 5:30 PM IST
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-lg mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-3 text-accent">Important Information</h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Registration fees won't be refunded under any circumstance</li>
                  <li>No on-the-spot registrations will be accepted</li>
                  <li>Spectators are only permitted as companions of competitors</li>
                  <li>Competitors may bring at most 1 guest</li>
                  <li>Registrants on the waiting list may be accepted onto the competitor list until the closing date</li>
                  <li>Registered competitors may change their registered events until the closing date by contacting the organization team</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-card">
            <h3 className="font-bold text-xl mb-4">Organizers</h3>
            <p className="text-muted-foreground mb-4">
               RVITM Cubing Association, CubeX RVCE, and Speed Cubing Bangalore
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">WCA Delegate:</span> Sukesh Kumar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
