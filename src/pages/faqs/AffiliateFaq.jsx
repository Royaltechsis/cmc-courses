import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { affiliateData } from "../../components/affiliate/affiliateData";
import SecondNavBar from '../../components/navbar/SecondNavbar'
import Footer from '../../components/footer/Footer'

const AffiliateFAQ = () => {
  const [openStates, setOpenStates] = useState(Array(affiliateData.length).fill(false));
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const faqRefs = useRef(affiliateData.map(() => React.createRef()));

  const trendingFAQs = [
    "When do affiliates get paid?",
    "What support is available for affiliates?",
    "How often do affiliates get paid?",
  ];

  useEffect(() => {
    setFilteredQuestions(affiliateData.slice(0, 4)); // Initially display the first 4 FAQs
  }, []);

  const toggleOpen = (index) => {
    const newOpenStates = Array(affiliateData.length).fill(false);
    newOpenStates[index] = true;
    setOpenStates(newOpenStates);
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setShowDropdown(query !== "");

    // Filter affiliate data based on the query
    const filtered = affiliateData.filter((faq) =>
      faq.question.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredQuestions(filtered);

    if (query.trim() === "") {
      setFilteredQuestions(affiliateData.slice(0, 4)); // Reset to first 4 FAQs if search is empty
    }
  };

  // Scroll to the selected FAQ and center it in the view
  const scrollToFAQ = (index) => {
    const faqElement = faqRefs.current[index]?.current; // Access the current ref
    if (faqElement) {
      faqElement.scrollIntoView({
        behavior: "smooth",
        block: "center", // Ensures the element scrolls to the center
      });
    }
  };

  const handleClickQuestion = (question) => {
    const index = affiliateData.findIndex((faq) => faq.question === question);
    if (index !== -1) {
      const newOpenStates = Array(affiliateData.length).fill(false);
      newOpenStates[index] = true;
      setOpenStates(newOpenStates);

      // Scroll to the FAQ
      scrollToFAQ(index);
    }
    setShowDropdown(false);
  };

  const handleTrendingClick = (faqQuestion) => {
    handleClickQuestion(faqQuestion); // Open and scroll to clicked trending FAQ
  };

  return (
    <>
      <SecondNavBar />
      <div className="p-5 md-min:mt-36 mt-10">
      <section className="w-full items-center justify-center text-center">
        <h1 className="text-[#33FFA8] font-extrabold uppercase tracking-wide  text-2xl md-min:mt-0 mt-5 md-min:text-6xl pb-10">
            Affiliates FAQ
        </h1>
          <h1 className="md:text-2xl text-lg md-min:text-4xl font-bold text-center text-gray-800 md-min:leading-[40px] max-w-3xl mx-auto lg-min:px-28">
            Ask us anything
          </h1>
        <h1 className="md-min:text-lg text-sm">
          Have any questions? We're here to assist you
        </h1>
      </section>

      <div className="relative mx-auto mt-4 w-full md-min:w-[496px] rounded-[30px] border-gray-200 border-[1px]">
        <input
          type="text"
          placeholder="Search FAQs"
          value={searchQuery}
          onChange={handleInputChange}
          className="p-2 pl-10 border border-[#22F9D0] rounded-[30px] w-full text-[#53686A] outline-none"
        />
        <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {showDropdown && (
          <div className="absolute z-10 p-5 bg-white w-full border border-gray-300 rounded-md mt-1">
            <div className="trending-section">
              <h4 className="font-semibold mb-2">Trending Searches</h4>
              <ul>
                {trendingFAQs.map((faq, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleTrendingClick(faq)}
                  >
                    <FontAwesomeIcon icon={faArrowTrendUp} className="mr-2" />
                    {faq}
                  </li>
                ))}
              </ul>
            </div>
            {searchQuery && (
              <div>
                <h4 className="font-semibold mt-4 mb-2">Search Results</h4>
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((faq, index) => {
                    const originalIndex = affiliateData.findIndex((item) => item.question === faq.question);
                    return (
                      <div
                        key={originalIndex}
                        className="p-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          handleClickQuestion(faq.question);
                          scrollToFAQ(originalIndex);
                        }}
                      >
                        <FontAwesomeIcon icon={faClockRotateLeft} className="mr-2" />
                        {faq.question}
                      </div>
                    );
                  })
                ) : (
                  <div>No FAQs found</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="faq-inner text-sm md-min:mt-8 mt-3 py-16 lg-min:px-8 px-2 rounded-[20px] lg-min:rounded-none flex justify-center items-center flex-col space-y-8">
        {filteredQuestions.map(({ id, question, answer }, index) => {
          const originalIndex = affiliateData.findIndex(item => item.question === question);
          return (
            <div
              key={originalIndex}
              ref={faqRefs.current[originalIndex]} // Attach ref for scrolling
              className={`faq-each text-black lg-min:w-[896px] shadow-custom lg-min:max-w-[80%] w-full h-auto lg-min:p-11 py-2 px-4 lg-min:rounded-2xl rounded-[14px] ${
                openStates[originalIndex] ? "border-[#22F9D0] border-4" : ""
              }`}
            >
              <div
                className="question-section flex justify-between items-center"
                key={id}
                onClick={() => toggleOpen(originalIndex)}
              >
                <h2 className="text-[13px] md-min:text-base font-semibold ">
                  {question}
                </h2>
                <div
                  className={`arrow p-2 text-[#33FFA8] shadow-lg rounded-full transition-all duration-500 ease-in-out ${
                    openStates[originalIndex] ? "rotate-90 background3 text-white" : ""
                  }`}
                >
                  <IoIosArrowForward
                    size={25}
                    className="cursor-pointer text-[4px] scale-75 md-min:scale-100"
                  />
                </div>
              </div>
              <div
                className={`mt-4 transition-all duration-500 ease-in-out ${
                  openStates[originalIndex] ? "opacity-1 flex  h-full" : "h-0 opacity-0"
                }`}
              >
                <p className="text-[#6F6C90]">{answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-10 mb-32">
        <div className="contact flex flex-col justify-between items-center md-min:flex-row border-[#22F9D0] border-2 bg-[#f2fdf8] text-[#53686A] lg-min:w-[896px] lg-min:max-w-[80%] p-6 rounded-[11px]">
          <div className="word">
            <p className="text-base font-semibold">Still have questions?</p>
            <p className="text-sm">
              Can't find the questions you're looking for?
            </p>
          </div>

          <p className="w-fit mt-1 px-3 py-2 bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] font-bold rounded-[11px] text-black border-black border-[1px] cursor-pointer">
            Get in touch
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AffiliateFAQ;