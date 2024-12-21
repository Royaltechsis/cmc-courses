import { useState } from "react";
import { cards } from "../main/WhyUsData";

const WhyChooseUs = () => {
  const [switcher, setSwitcher] = useState(0);

  return (
    <>
      {/* Why choose us */}
      <div className="mt-10 pt-10 z-0 relative">
        {/* Header section */}
        <div className="relative text-center">
        <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-sm pb-6">
            Why Choose Us
        </p>  
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 leading-[40px] max-w-3xl mx-auto px-28">
          Experience Boundless Opportunities at Your Fingertips
        </h1>

        {/* Card Section */}

        <div className="grid grid-cols-1 lg-min:grid-cols-4 md-min:grid-cols-2 md-min:gap-6 md:gap-y-10 justify-between my-14 px-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`shadow-2xl bg-[#E7FFF5] rounded-lg py-5 px-6`}
              onClick={() => {
                setSwitcher(index);
                console.log(index);
              }}
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt="Card Image"
                  className="absolute top-0 left-0 w-13 h-14"
                />
              </div>
              <div className="info pt-14">
                <p className="my-3">{card.title}</p>
                <p className="text-gray-500 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
