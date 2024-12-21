import React, { useEffect } from 'react';
import termsAndConditions from './TermsAndConditionsData';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="terms-container  py-20 mb-20 px-20 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Terms and Conditions</h1>
      <p className="text-sm text-gray-600 text-center mb-8">
        <strong>Last Updated: {termsAndConditions.lastUpdated}</strong>
      </p>

      {termsAndConditions.sections.map((section, index) => (
        <div key={index} className="mb-8 border-b pb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{section.title}</h2>
          <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
            {section.content}
          </p>
        </div>
      ))}

      <div className="text-center mt-20">
        <p className="text-base text-gray-500">
          If you have any questions or concerns, feel free to contact us at: 
          <span className="text-[#22F9D0]"> wearexpertskillz@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;