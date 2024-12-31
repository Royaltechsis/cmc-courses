import React from 'react';
import SecondNavBar from '../../components/navbar/SecondNavbar';
import PricingCard from './PricingCard';
import Footer from '../../components/footer/Footer';
import AffiliateMap from '../../components/affiliate/AffiliateMap';
import AffiliateFaq from '../../components/affiliate/AffiliateFaq';

const Pricing = () => {
  return (
    <>
      <SecondNavBar />
      <section className="py-11 w-full pt-36 px-2  md-min:px-32">
        <h2 className="text-center text-xl px-3 md-min:px-0 md-min:text-2xl font-semibold md-min:leading-[36px]">
          Activate Your Affiliate Account <br />
          by Paying a One-Time Activation Fee
        </h2>
        <p className="text-center md-min:text-lg text-sm mt-4 text-gray-600 md-min:px-40 px-3 md-in:mx-48">
          To become an affiliate, you'll need to pay a 
          <strong> one-time activation fee</strong>. This fee gives you full access to all affiliate tools, resources, and support, enabling you to succeed as an ExpertSkillz affiliate.
        </p>
        <PricingCard />
        <AffiliateMap />
        <AffiliateFaq />
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
