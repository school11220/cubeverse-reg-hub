import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => {
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
            Refund & Cancellation Policy
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Registration Fee</h2>
              <p>
                The registration fee for RVITM CubeVerse 2025 is:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>₹1,000 for 1-4 events</li>
                <li>₹1,500 for 5-8 events</li>
              </ul>
              <p className="mt-4">
                Payment must be completed through the official Razorpay payment link to confirm your registration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Cancellation by Participant</h2>
              <p>
                If you need to cancel your registration, the following policy applies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Before November 15, 2025:</strong> 80% refund of registration fee (20% processing fee deducted)</li>
                <li><strong>November 15-22, 2025:</strong> 50% refund of registration fee</li>
                <li><strong>After November 22, 2025:</strong> No refund available</li>
              </ul>
              <p className="mt-4">
                To request a cancellation, please email{" "}
                <a href="mailto:cubing_rca.rvitm@rvei.edu.in" className="text-accent hover:underline">
                  cubing_rca.rvitm@rvei.edu.in
                </a>{" "}
                with your WCA ID and payment confirmation details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Waitlist Policy</h2>
              <p>
                If the competition reaches its capacity of 120 competitors:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Paid registrants will be placed on an official waitlist</li>
                <li>If a spot becomes available, waitlisted competitors will be contacted in order</li>
                <li>Waitlisted competitors who do not get a spot will receive a full refund within 15 business days after the competition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Event Cancellation by Organizers</h2>
              <p>
                In the unlikely event that the competition is cancelled by the organizers due to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Force majeure events (natural disasters, pandemics, etc.)</li>
                <li>Insufficient registrations</li>
                <li>Venue unavailability</li>
                <li>Any other unforeseen circumstances</li>
              </ul>
              <p className="mt-4">
                <strong>All registered participants will receive a full 100% refund</strong> of their registration fee within 30 business days of the cancellation announcement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Event Modifications</h2>
              <p>
                If there are changes to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Competition dates (rescheduling)</li>
                <li>Event lineup (removal of specific events)</li>
                <li>Venue location</li>
              </ul>
              <p className="mt-4">
                Participants will be notified immediately and will have the option to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Continue with their registration for the modified competition, or</li>
                <li>Request a full refund within 7 days of the notification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Refund Processing</h2>
              <p>
                Approved refunds will be processed as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refunds will be credited to the original payment method</li>
                <li>Processing time: 7-15 business days from approval</li>
                <li>Payment gateway charges (if any) are non-refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Non-Refundable Scenarios</h2>
              <p>
                Refunds will <strong>NOT</strong> be provided if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A competitor fails to attend the competition without prior cancellation</li>
                <li>A competitor is disqualified due to violation of WCA regulations or event rules</li>
                <li>A competitor voluntarily withdraws on the day of the competition</li>
                <li>Registration is cancelled after the final deadline (November 22, 2025)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Payment Issues</h2>
              <p>
                If you experience payment issues:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Duplicate payments: Full refund of the duplicate amount</li>
                <li>Payment failed but amount debited: Automatic refund within 5-7 business days</li>
                <li>For any payment disputes, contact us with transaction details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact for Refunds</h2>
              <p>
                For all refund and cancellation requests, please contact:
              </p>
              <p className="mt-4">
                Email: <a href="mailto:cubing_rca.rvitm@rvei.edu.in" className="text-accent hover:underline">cubing_rca.rvitm@rvei.edu.in</a><br />
                Phone: <a href="tel:+918073294215" className="text-accent hover:underline">+91-8073294215</a>
              </p>
              <p className="mt-4">
                Please include the following in your refund request:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name and WCA ID</li>
                <li>Payment confirmation/transaction ID</li>
                <li>Reason for cancellation</li>
                <li>Bank account details for refund</li>
              </ul>
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

export default Refund;
