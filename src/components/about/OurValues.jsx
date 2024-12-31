import React from "react";

const values = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We conduct ourselves with honesty, transparency and respect for all.",
    },
    {
      title: "Innovation",
      description:
        "We embrace creativity and strive to stay ahead of the curve in technology and education.",
    },
    {
      title: "Inclusivity",
      description:
        "We welcome diversity and believe that everyone deserves equal opportunities to learn and grow.",
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering excellence in all aspects of our platform and services.",
    },
    {
      title: "Customer-Centricity",
      description:
        "We prioritize the needs and satisfaction of our users above all else.",
    },
    {
      title: "Community",
      description:
        "We foster a sense of belonging, collaboration, and support for learners to connect and grow.",
    },
  ];
  return (
    <>
      <section>
        <div className="w-full items-center justify-center text-center pt-20">
          <p className="text-[#33FFA8] font-extrabold uppercase md-min:text-left text-center tracking-wide text-xs md-min:text-sm md-min:pb-4">
            Our Value
          </p>
          <h1 className=" md-min:text-4xl  text-xl font-bold text-center text-gray-800 md-min:leading-[40px] max-w-3xl mx-auto md-min:px-28">
            At ExpertSkillz, Our Values Guide 
            Everything We do. These Values include:
          </h1>
        </div>
        <div className="grid  grid-cols-1 lg-min:grid-cols-3 md-min:grid-cols-2 md-min:gap-16  md:gap-y-10 justify-between mt-10 mb-20 md-min:my-20 md-min:px-20 px-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="shadow-2xl bg-[#E7FFF5] rounded-lg py-5 px-8"
            >
              <div className="rounded-lg bg-white drop-shadow-[0_1px_5px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center">
                <span className="text-span text-lg">{index + 1}</span>
              </div>
              <p className="my-3">{value.title}</p>
              <p className="text-gray-500 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default values;
