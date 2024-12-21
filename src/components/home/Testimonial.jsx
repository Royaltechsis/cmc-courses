import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './Testimonials.css'; 

import profile1 from "../../assets/images/student1.jpg";
import profile2 from "../../assets/images/student2.jpg";
import profile3 from "../../assets/images/student3.jpg";
import profile4 from "../../assets/images/student4.jpg";

const Testimonials = () => {
  useEffect(() => {
    const swiper = new Swiper('.slide-content', {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centeredSlides: true,
      fade: true,
      grabCursor: true,
      autoplay: { // Add autoplay configuration
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });

    // Add listeners to buttons for debugging
    document.querySelector('.swiper-button-next').addEventListener('click', () => {
      console.log('Next button clicked');
      swiper.slideNext();
    });

    document.querySelector('.swiper-button-prev').addEventListener('click', () => {
      console.log('Previous button clicked');
      swiper.slidePrev();
    });
  }, []);

  return (
    <div className="slide-container swiper">
      <div className="slide-content">
        <div className="card-wrapper swiper-wrapper">
          <div className="card swiper-slide">
            <div className="image-content">
              <span className="testimonial-overlay bg-gradient-to-r from-[#11F1F1] to-[#33FFA8]"></span>
              <div className="card-image">
                <img src={profile1} alt="Adejumo Eniola" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">Adejumo Eniola</h2>
              <p className="description">
              ExpertSkillz has been a total game-changer in my online journey! Their flagship course, 
              CMC, brought fast results even as a newbie. The mentorship is also extremely beginner-friendly 
              and supportive.
              </p>
            </div>
          </div>

          <div className="card swiper-slide">
            <div className="image-content">
              <span className="testimonial-overlay bg-gradient-to-r from-[#11F1F1] to-[#33FFA8]"></span>
              <div className="card-image">
                <img src={profile2} alt="Popoola Hikmah" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">Popoola Hikmah</h2>
              <p className="description">
              ExpertSkillz’s course, Complete Affiliate Mastery Course has helped thousands, 
              including me, succeed in Affiliate Marketing. It’s an incredible course 
              that will definitely yield results if you try it.
              </p>
            </div>
          </div>

          <div className="card swiper-slide">
            <div className="image-content">
              <span className="testimonial-overlay bg-gradient-to-r from-[#11F1F1] to-[#33FFA8]"></span>
              <div className="card-image">
                <img src={profile3} alt="Aigbe Gift" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">Lawal Sufiyan</h2>
              <p className="description">
              ExpertSkillz changed my perspective on online opportunities. 
              I was introduced by Coach Ayomide Wakeel, and I’ve never regretted 
              getting trained under ExpertSkillz. Alhamdulillah for the opportunity.
              </p>
            </div>
          </div>

          <div className="card swiper-slide">
            <div className="image-content">
              <span className="testimonial-overlay bg-gradient-to-r from-[#11F1F1] to-[#33FFA8]"></span>
              <div className="card-image">
                <img src={profile4} alt="Lawal Sufiyan" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">Aigbe Gift</h2>
              <p className="description">
              Expertskillz provided incredible help with CMC. The course is exceptional, 
              and I've made millions despite economic challenges. Give it a try for a 
              transformative online money-making experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Testimonials;