import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                When you register for RVITM CubeVerse 2025, we collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information: Name, date of birth, gender, nationality</li>
                <li>Contact information: Email address, phone number</li>
                <li>WCA ID (if applicable)</li>
                <li>Event selections and registration details</li>
                <li>Payment information (processed securely through Razorpay)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your competition registration</li>
                <li>Communicate important updates about the event</li>
                <li>Comply with WCA requirements and regulations</li>
                <li>Manage competition logistics and participant lists</li>
                <li>Send event-related notifications and announcements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
              <p>Your information may be shared with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The World Cube Association (WCA) as per their requirements</li>
                <li>Event co-organizers: CubeX RVCE, RVITM Cubing Association, and Speed Cubing Bangalore</li>
                <li>WCA Delegates for competition administration</li>
                <li>Payment processors for secure transaction processing</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Payment information is processed through secure payment gateways and is not stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Public Information</h2>
              <p>
                Please note that certain information will be publicly visible on the WCA website, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name and country</li>
                <li>Competition results and rankings</li>
                <li>Event participation history</li>
              </ul>
              <p className="mt-4">
                This is standard practice for all WCA competitions and is required for official result tracking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data (subject to WCA requirements)</li>
                <li>Opt-out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar technologies to enhance user experience and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
              <p>
                If you are under 18 years of age, you must have parental or guardian consent to register for the competition. We are committed to protecting the privacy of minors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or how we handle your data, please contact us:
              </p>
              <p className="mt-4">
                Email: <a href="mailto:cubing_rca.rvitm@rvei.edu.in" className="text-accent hover:underline">cubing_rca.rvitm@rvei.edu.in</a><br />
                Phone: <a href="tel:+918073294215" className="text-accent hover:underline">+91-8073294215</a>
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: November 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
