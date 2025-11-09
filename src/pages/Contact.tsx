import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:cubing_rca.rvitm@rvei.edu.in"
                        className="text-muted-foreground hover:text-primary transition-smooth break-all"
                      >
                        cubing_rca.rvitm@rvei.edu.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+918073294215"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        +91-8073294215
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Venue</h3>
                      <p className="text-muted-foreground">
                        RV Institute of Technology and Management<br />
                        JP Nagar 8th Phase<br />
                        Bengaluru, Karnataka 560076<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg mb-4 text-foreground">Event Organizers</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• RVITM Cubing Association</p>
                  <p>• CubeX RVCE</p>
                  <p>• Speed Cubing Bangalore</p>
                </div>
              </div>
            </div>

            {/* Quick Links & Information */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-6 text-primary">Important Links</h2>
                
                <div className="space-y-3">
                  <a
                    href="https://www.worldcubeassociation.org/competitions/RVITMCubeVerse2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-smooth group"
                  >
                    <span className="font-medium text-foreground">WCA Competition Page</span>
                    <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="https://www.worldcubeassociation.org/regulations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-smooth group"
                  >
                    <span className="font-medium text-foreground">WCA Regulations</span>
                    <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="https://pages.razorpay.com/pl_RZIOpv3dXxZ0Eg/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-smooth group"
                  >
                    <span className="font-medium text-foreground">Register & Pay Now</span>
                    <ExternalLink className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg mb-4 text-foreground">Event Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Date</p>
                    <p className="text-muted-foreground">November 29-30, 2025</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Competitor Limit</p>
                    <p className="text-muted-foreground">120 participants</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Registration Fee</p>
                    <p className="text-muted-foreground">₹1,000 - ₹1,500</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                <h3 className="font-bold text-lg mb-3 text-foreground">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions about registration, schedule, or competition rules? 
                  Feel free to reach out via email or phone. Our team is here to help!
                </p>
                <p className="text-xs text-muted-foreground">
                  Response time: Within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-card p-6 rounded-lg shadow-card">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Location</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4182841234567!2d77.5734!3d12.8910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d8f7c44b3f%3A0x123456789abcdef!2sRV%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RVITM Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
