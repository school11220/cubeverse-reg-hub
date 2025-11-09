import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
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
            Terms & Conditions
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By registering for RVITM CubeVerse 2025, you agree to share information entered on this page with RCA, RVITM Cubing Association, and the World Cube Association (WCA). You acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Registration Requirements</h2>
              <p>All competitors must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create a WCA account and register through the official WCA website</li>
                <li>Complete payment of the registration fee before the deadline</li>
                <li>Provide accurate personal information during registration</li>
                <li>Be eligible to compete according to WCA regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Competition Rules</h2>
              <p>All competitors must adhere to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Official WCA regulations available at <a href="https://www.worldcubeassociation.org/regulations/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">worldcubeassociation.org/regulations/</a></li>
                <li>The competitor limit of 120 participants</li>
                <li>No on-the-spot registration policy</li>
                <li>Guest policy: Maximum 1 guest per competitor</li>
                <li>Instructions from organizers and WCA delegates during the event</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Code of Conduct</h2>
              <p>Participants are expected to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain respectful behavior towards other competitors, organizers, and delegates</li>
                <li>Follow venue rules and regulations</li>
                <li>Not engage in any form of cheating or unsportsmanlike conduct</li>
                <li>Take responsibility for their personal belongings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Liability</h2>
              <p>
                RCA, RVITM Cubing Association, and the event organizers are not liable for any injury, loss, or damage to persons or property during the competition. Participants attend at their own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Photography and Media</h2>
              <p>
                By participating, you consent to being photographed and recorded during the event. These materials may be used for promotional purposes by the organizers and WCA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes and Cancellations</h2>
              <p>
                The organizers reserve the right to make changes to the competition schedule, events, or venue if necessary. In case of cancellation due to unforeseen circumstances, refer to our Refund & Cancellation Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
              <p>
                For any queries regarding these terms, please contact us at{" "}
                <a href="mailto:cubing_rca.rvitm@rvei.edu.in" className="text-accent hover:underline">
                  cubing_rca.rvitm@rvei.edu.in
                </a>
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

export default Terms;
