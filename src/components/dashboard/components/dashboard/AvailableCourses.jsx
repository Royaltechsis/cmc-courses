import React, { useState } from "react";
import PromotionModal from "./PromotionModal";

const AvailableCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courseData = [
    { name: "CMC", amount: "$12", category: "Marketing", status: "Promote" },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 bg-[#F6FFFB] pt-5 md-min:pb-10 md-min:px-6 rounded-lg shadow-md">
      <h3 className="font-semibold md-min:text-lg text-sm mb-4">Available Courses to Promote</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#F6FFFB] border border-gray-200">
          <thead>
            <tr className="bg-gray-50  rounded-t-xl">
              <th className="text-center md-min:text-base text-xs py-3 px-5 border-b text-[15px] font-semibold text-gray-500">Name</th>
              <th className="text-center md-min:text-base text-xs py-3 px-5 border-b text-[15px] font-semibold text-gray-500">Amount</th>
              <th className="text-center md-min:text-base text-xs py-3 px-5 border-b text-[15px] font-semibold text-gray-500">Category</th>
              <th className="text-center md-min:text-base text-xs py-3 px-3 border-b text-[15px] font-semibold text-gray-500">Market Status</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={index} className=''>
                <td className="md-min:py-6 text-[15px]md-min:text-base text-xs text-center border-b">{course.name}</td>
                <td className="md-min:py-6 text-[15px]md-min:text-base text-xs text-center border-b">{course.amount}</td>
                <td className="md-min:py-6 text-[15px]md-min:text-base text-xs text-center border-b">{course.category}</td>
                <td className="md-min:py-6 px-4 border-b">
                  <button
                    onClick={openModal}
                    className="bg-[#F6FFFB] border-2 border-[#33FFA8] text-[#33FFA8] font-bold px-4 py-1 rounded-md transition-all duration-500 ease-in-out hover:bg-[#33FFA8] hover:text-white m-2"
                  >
                    {course.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Promotion Modal */}
      <PromotionModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AvailableCourses;
