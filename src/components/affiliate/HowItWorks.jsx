import React from "react";

const HowItWorks = () => {
  const howItWorks = [
    {
      number: "01",
      title: "Become an Affiliate",
      description:
        "Pay a one-time subscription fee to unlock access to the sign-up page and create your account.",
    },
    {
      number: "02",
      title: "Promote a Product",
      description:
        "Select a top digital product, copy your affiliate link, and access promotional materials.",
    },
    {
      number: "03",
      title: "Get Paid",
      description:
        "Earn 50% commission on each sale you generate and get your payout every week.",
    },
  ];

  return (
    <section className="py-20 pb-20 px-5 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-sm pb-6">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-[40px] max-w-3xl mx-auto px-28">
          Getting Started is Simple and Exciting
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-7 max-w-3xl mx-auto">
          Becoming an affiliate under ExpertSkillz is easy, straightforward 
          and doesn’t require any additional or hidden fees.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid  grid-cols-1 lg-min:grid-cols-3 md-min:grid-cols-2 md-min:gap-16  md:gap-y-10 justify-between mt-12 px-16">
        {howItWorks.map((step, index) => (
          <div key={index} className="flex flex-col items-start">
            {/* Number Circle */}
            <div className="text-white bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
              {step.number}
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            {/* Description */}
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;