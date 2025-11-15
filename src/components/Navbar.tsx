import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import rcaLogo from "@/assets/rca-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home", type: "scroll" },
    { label: "About", id: "about", type: "scroll" },
    { label: "Event Details", id: "details", type: "scroll" },
    { label: "Registration", id: "registration", type: "scroll" },
    { label: "Contact", path: "/contact", type: "link" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-1.8xl shadow-xl border-b border-white/20"
          : "bg-white/40 backdrop-blur-xl border-b border-white/10 shadow-md"
      } ${isMobileMenuOpen ? "rounded-b-3xl" : "rounded-b-2xl"}`}
    >
      {/* Accent line */}
      <div
        className={`h-0.5 bg-gradient-to-r from-emerald-600 via-green-600  to-lime-600 transition-all duration-500 ${
          isScrolled ? "opacity-100" : "opacity-50"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm p-1.5 group-hover:shadow-md transition-all duration-300 border border-white/50">
                <img
                  src={rcaLogo}
                  alt="RCA"
                  className="h-8 w-8 lg:h-10 lg:w-10 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg lg:text-xl text-gray-900">
                RCA
              </span>
              <span className="text-[10px] lg:text-xs text-gray-600 font-medium tracking-wide hidden sm:block">
                RVITM Cubing Association
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-Main font-bold ">
            {navLinks.map((link) =>
              link.type === "link" ? (
                <Link
                  key={link.path}
                  to={link.path!}
                  className="relative px-4 py-2 text-gray-700  text-sm hover:text-emerald-600 transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id!)}
                  className="relative px-4 py-2 text-neutral-900 tracking-wide text-sm hover:text-emerald-600 transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              )
            )}

            {/* CTA Button */}
            <a
              href="https://pages.razorpay.com/pl_RZIOpv3dXxZ0Eg/view"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 shadow-md hover:shadow-emerald-400/40 transition-all duration-300 hover:scale-[1.05] group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-lime-400 via-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                
                Register & Pay
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-100 rounded-sm transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-[100%] transition-all duration-300 ease-in-out transform rounded-none ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="mx-3 mt-2 bg-white/60 backdrop-blur-2xl rounded-xl shadow-xl border border-white/20 overflow-hidden">
            <div className="py-3 divide-y divide-emerald-50/50">
              {navLinks.map((link, index) =>
                link.type === "link" ? (
                  <Link
                    key={link.path}
                    to={link.path!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-5 py-3 text-gray-700 font-medium text-sm hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                    style={{
                      animationDelay: `${index * 30}ms`,
                      animation: isMobileMenuOpen
                        ? "slideIn 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id!)}
                    className="block w-full text-left px-5 py-3 text-gray-700 font-medium text-sm hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                    style={{
                      animationDelay: `${index * 30}ms`,
                      animation: isMobileMenuOpen
                        ? "slideIn 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    {link.label}
                  </button>
                )
              )}

              {/* Mobile CTA */}
              <div className="p-3">
                <a
                  href="https://pages.razorpay.com/pl_RZIOpv3dXxZ0Eg/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-emerald-400/40 transition-all duration-300 hover:scale-[1.03]"
                >
                 
                  Register & Pay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
