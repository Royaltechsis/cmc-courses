import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../pages/about/About.css";

import person1 from "../../assets/images/Testimonial1.png";
import person2 from "../../assets/images/Testimonial2.png";
import person3 from "../../assets/images/Testimonial3.png";
import about from "../../assets/images/decorative_images/decorativeImage.svg";
import about1 from "../../assets/images/decorative_images/decorativeImage2.svg";
import about2 from "../../assets/images/decorative_images/decorativeImage3.svg";
import prevImage from "../../assets/images/leftArrow.png";
import nextImage from "../../assets/images/rightArrow.png";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialsData = [
    {
      name: "Adejumo Eniola",
      quote:
        "ExpertSkillz has been a total game-changer for me in the online world! Their first course which is their flagship course on Affiliate Marketing “CMC” is top-notch. With the trainings I got on CMC, I have seen massive results in no time even as a newbie! Another thing is, the mentorship on CMC is super beginner-friendly.",
      personImage: person1,
    },
    {
      name: "Adejumo Eniola",
      quote:
        "ExpertSkillz has been a total game-changer for me in the online world! Their first course which is their flagship course on Affiliate Marketing “CMC” is top-notch. With the trainings I got on CMC, I have seen massive results in no time even as a newbie! Another thing is, the mentorship on CMC is super beginner-friendly.",
      personImage: person2,
    },
    {
      name: "Adejumo Eniola",
      quote:
        "ExpertSkillz has been a total game-changer for me in the online world! Their first course which is their flagship course on Affiliate Marketing “CMC” is top-notch. With the trainings I got on CMC, I have seen massive results in no time even as a newbie! Another thing is, the mentorship on CMC is super beginner-friendly.",
      personImage: person3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    className: "center",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const sliderRef = React.useRef(null);

  const goToPrevSlide = () => {
    console.log("Previous slide clicked");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    console.log("Next slide clicked");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="overflow-hidden">
      <div className="w-full items-center justify-center text-center mb-12">
        <h1 className="text-fontSize1 sm:text-fontSize2">Testimonials</h1>
        <span className="text-fontSize3 sm:text-fontSize4 sm:mx-1">
          Join Thousands of Satisfied Learners Who Have Achieved Success With
          ExpertSkillz. Hear What Our Users Have To Say About Us:
        </span>
      </div>
      <div className="items-center justify-center relative py-10">
        <img
          src={about2}
          alt="Card Image"
          className="absolute top-20 left-32 -z-50 sm:w-50 sm:top-0 sm:left-16"
        />
        <img
          src={about1}
          alt="Card Image"
          className="absolute top-10 left-20 -z-50 sm:w-50 sm:-top-5 sm:left-5"
        />
        <Slider {...settings} initialSlide={currentSlide} ref={sliderRef}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
              <div className="relative sm:my-10 mx-60 sm:mx-2 my-10 h-[80vh]">
                <img
                  src={about}
                  alt="Card Image"
                  className="absolute -top-12 right-0 -z-50 sm:w-50 sm:-right-0"
                />
                <div className="bg-white justify-center items-center text-center mx-20 px-20 sm:m-5 sm:p-5 relative">
                  <h2 className="pt-10 text-fontSize2">{testimonial.name}</h2>
                  <div className="flex py-10">
                    <span className="text-span text-[200px] absolute left-10 top-0">
                      “
                    </span>
                    <p className="text-fontSize3 text-base px-10 w-full">
                      {testimonial.quote}
                      <br></br>
                      <br></br>
                    </p>
                    <span className="text-span text-[200px] absolute right-10 -bottom-7 rotate-180">
                      “
                    </span>
                  </div>
                  <div className="triangle rotate-180 w-10 h-20"></div>
                </div>
                <img
                  src={testimonial.personImage}
                  alt="card image"
                  className="absolute -bottom-8 left-[320px] sm:w-50"
                />
                <img
                  src={about}
                  alt="Card Image"
                  className="absolute bottom-[100px] left-0 -z-50 sm:w-50"
                />
              </div>
            </div>
          ))}
        </Slider>
        <img
          src={about1}
          alt="Card Image"
          className="absolute bottom-[255px] right-32 -z-50 sm:w-50 sm:bottom-0 sm:right-16"
        />
        <img
          src={about2}
          alt="Card Image"
          className="absolute bottom-[210px] right-20 -z-50 sm:w-50 sm:-bottom-5 sm:right-5"
        />
        <div className="absolute top-1/3 -translate-y-1/2 left-[150px] cursor-pointer w-16">
          <img src={prevImage} alt="Prev" onClick={goToPrevSlide} />
        </div>
        <div className="absolute top-1/3 -translate-y-1/2 right-[150px] cursor-pointer w-16">
          <img src={nextImage} alt="Next" onClick={goToNextSlide} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
