import { ExternalLink, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import rcaLogo from "@/assets/rca-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={rcaLogo} alt="RCA" className="h-12 w-12" />
                <span className="font-bold text-lg text-foreground">RCA</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Organizing official WCA speedcubing competitions across India
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.worldcubeassociation.org/competitions/RVITMCubeVerse2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 transition-smooth"
                  >
                    WCA Competition Page
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.worldcubeassociation.org/regulations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 transition-smooth"
                  >
                    WCA Regulations
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://pages.razorpay.com/pl_RZIOpv3dXxZ0Eg/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 transition-smooth"
                  >
                    Payment Page
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Refund & Cancellation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:cubing_rca.rvitm@rvei.edu.in"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Mail className="w-4 h-4" />
                  cubing_rca.rvitm@rvei.edu.in
                </a>
                <a
                  href="tel:+918073294215"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Phone className="w-4 h-4" />
                  +91-8073294215
                </a>
              </div>
              <div className="mt-6 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Organizers:</p>
                <p>RVITM Cubing Association</p>
                <p>CubeX RVCE</p>
                <p>Speed Cubing Bangalore</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RCA. All rights reserved. | RVITM CubeVerse 2025
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              This is an official World Cube Association competition
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
