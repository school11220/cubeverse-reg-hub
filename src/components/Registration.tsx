import { CheckCircle2, ExternalLink } from "lucide-react";

const Registration = () => {
  const steps = [
    {
      step: 1,
      title: "Wait for Registration to Open",
      content:
        "Registration opens on Monday, November 3, 2025, at 5:30 PM IST, and closes on Wednesday, November 26, 2025, at 5:30 PM IST. Early closure may occur if the competitor limit is reached.",
    },
    {
      step: 2,
      title: "Create a WCA Account",
      content:
        "If you’re new to WCA competitions, create a WCA account. Returning competitors must link their existing WCA ID to their account.",
      link: "https://www.worldcubeassociation.org/users/sign_up",
      linkText: "Create WCA Account",
    },
    {
      step: 3,
      title: "Register on WCA Website",
      content:
        "Head to the official competition page, fill out your events, and confirm your registration.",
      link: "https://www.worldcubeassociation.org/competitions/RVITMCubeVerse2025/register",
      linkText: "Register Here",
    },
    {
      step: 4,
      title: "Pay the Registration Fee",
      content:
        "Once you’ve registered on the WCA website, complete your payment using the button below. Your spot is confirmed only after payment is received.",
    },
  ];

  return (
    <section
      id="registration"
      className="py-20 sm:py-24 bg-gradient-to-b from-rose-50 via-neutral-50 to-rose-50 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-[-10%] w-72 h-72 bg-yellow-300/30 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-[-10%] w-96 h-96 bg-green-300/30 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-900 via-lime-500 to-green-600 bg-clip-text text-transparent font-Main">
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-500 to-rose-600 bg-clip-text text-transparent font-Main2">Registration</span> <span className="bg-gradient-to-r from-cyan-900 via-lime-500 to-green-600 bg-clip-text text-transparent font-Main">Process</span>
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-Main">
            Follow the steps below to secure your spot at{" "}
            <span className="font-semibold text-emerald-900">
              RVITM CubeVerse 2025
            </span>
            .
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-900 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-sm font-Main2">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 font-sec">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed font-sec2  ">
                    {item.content}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
                    >
                      {item.linkText}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div className="text-center mb-14">
          <div className="bg-gradient-to-br from-yellow-100 via-lime-100 to-green-100 border-2 border-emerald-600 rounded-3xl p-10 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-Main">
              Ready to Register?
            </h3>
            <p className="text-gray-700 mb-8 text-base sm:text-lg font-sec2">
              Complete your registration by paying the fee below.
            </p>
            <a
              href="https://pages.razorpay.com/pl_RZIOpv3dXxZ0Eg/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-900 transition-all duration-300 shadow-md hover:shadow-lg font-sec"
            >
              Pay Registration Fee
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Fee Breakdown */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 sm:p-10 text-center mb-14">
          <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Registration Fees
          </h4>
          <div className="grid sm:grid-cols-2 gap-6 mb-4">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700">
                1–4 Events:{" "}
                <span className="font-semibold text-gray-900 font-sec">₹1,000</span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700">
                5–8 Events:{" "}
                <span className="font-semibold text-gray-900 font-sec">₹1,500</span>
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600 font-medium mt-2">
            Payment is required for confirmation. Fees are non-refundable.
          </p>
        </div>

        {/* Waitlist Info */}
        <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-rose-50  border-amber-800 rounded-3xl shadow-sm p-8 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-Main">
            Waitlist Information
          </h3>
          <p className="text-gray-700 mb-3 leading-relaxed font-sec2">
            If the competition reaches its capacity, new registrants will be
            placed on the waitlist automatically. Payments made after the limit
            is reached will hold your spot in the waitlist queue.
          </p>
          <p className="text-gray-700 leading-relaxed font-sec2">
            If a competitor cancels their registration, the top-ranked waitlisted
            participant will be added to the competitor list and notified
            accordingly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
