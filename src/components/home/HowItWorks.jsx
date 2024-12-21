import React from "react";

const HowItWorks = () => {
  const howItWorks = [
    {
      number: "01",
      title: "Choose Your Course",
      description:
        "Browse through our selection of courses and choose the one that aligns with your interests and financial goals.",
    },
    {
      number: "02",
      title: "Sign Up and Pay",
      description:
        "Effortlessly register for your course and complete your payment securely to begin your journey.",
    },
    {
      number: "03",
      title: "Learn and Earn",
      description:
        "Acquire valuable skills, apply them effectively, and start earning from your expertise.",
    },
  ];

  return (
    <section className="py-20 pb-48 px-5 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-sm pb-6">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-[40px] max-w-3xl mx-auto px-28">
          Your Online Learning and Earning Journey Made Easy
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-7 max-w-3xl mx-auto">
        Stop Struggling alone, learning and succeding online 
        hasn’t been easy for many. But with ExpertSkillz today, 
        It’s easier than you think.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid  grid-cols-1 lg-min:grid-cols-3 md-min:grid-cols-2 md-min:gap-16  md:gap-y-10 justify-between mt-12 px-11">
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
