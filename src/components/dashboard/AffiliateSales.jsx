import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { salesData } from ".././dashboard/components/affiliatesales/affiliateSales";
import Sidebar from "./components/Sidebar";
import GetInTouch from "./components/getInTouch";

const AffiliateSales = () => {
  // State variable for current page number
  const [currentPage, setCurrentPage] = useState(1);

  // Set itemsPerPage to 15 to match design
  const itemsPerPage = 15;

  // Calculate total number of pages
  const totalPages = Math.ceil(salesData.length / itemsPerPage);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Get current sales data based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSalesData = salesData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total commission earned
  const totalCommissionEarned = salesData.reduce(
    (total, sale) => total + sale.commission,
    0
  );

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="w-3/4 py-2 px-16 overflow-y-auto">
          <div className="relative block items-center mt-3 mb-1 py-10">
            <div
              style={{
                background: "linear-gradient(90deg, #10E7E7 0%, #33FFA8 100%)",
              }}
              className="py-3 mb-3 px-6 rounded-2xl z-10 relative ml-10 mr-10"
            >
              <p className="font-bold text-2xl text-white">
                See Your Sales Below, Ruth Chinoye
              </p>
            </div>

            {/* Table Section with light gray background */}
            <div className="rounded-3xl p-6 relative -top-10 pt-20" style={{ backgroundColor: "#F6FFFB", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", marginLeft: "10px",}}>
              <div className="flex justify-between items-center">
                <div className="font-bold text-[21px] leading-[30px]">
                  <h2 className="">Affiliate Sales</h2>
                </div>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    style={{
                      backgroundColor: "#F6FFFB",
                      boxShadow: "inset 0 1px 5px rgba(0, 0, 0, 0.25)",
                    }}
                  />
                </div>
              </div>

              {/* Table Headers with deeper color */}
              <div className="flex flex-col mt-5 mb-10 bg-gray-50 rounded-lg p-4 shadow-md">
                {/* Table Headers */}
                <div className="flex justify-between font-semibold text-gray-700 text-center pb-6 text-lg">
                  <p className="w-1/5">Courses sold</p>
                  <p className="w-1/5">Date sold</p>
                  <p className="w-1/5">Buyer's Name</p>
                  <p className="w-1/5">Amount Sold</p>
                  <p className="w-1/5">Commission</p>
                </div>

                {/* Scrollable Table Rows Section */}
                <div className="overflow-y-auto hide-scrollbar" style={{ maxHeight: '300px' }}>
                  {/* Table Rows */}
                  {currentSalesData.map((sale, index) => (
                    <div
                      key={index}
                      className={`flex justify-between text-sm py-3 text-center border-b border-gray-200 ${
                        index % 2 === 0 ? "bg-[#F6FFFB]" : "bg-[#F6FFFB]"
                      }`}
                    >
                      <p className="w-1/5">{sale.course}</p>
                      <p className="w-1/5">{sale.date.toLocaleDateString()}</p>
                      <p className="w-1/5">{sale.buyer}</p>
                      <p className="w-1/5">${sale.amount}</p>
                      <p className="w-1/5">${sale.commission}</p>
                    </div>
                  ))}
                </div>

                {/* Pagination controls aligned to the right */}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="mx-1 px-3 py-1 border rounded bg-white text-black"
                  >
                    &lt;
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`mx-1 px-3 py-1 border rounded ${
                        currentPage === index + 1
                          ? "bg-[#33FFA8] text-black"
                          : "bg-white text-black"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="mx-1 px-3 py-1 border rounded bg-white text-black"
                  >
                    &gt;
                  </button>
                </div>
                 {/* Total Commission Section */}
              <div className="flex justify-between items-center mt-4">
                <div className="font-bold rounded-md">
                  Total Commission Earned: ${totalCommissionEarned.toFixed(2)}
                </div>
              </div>
              </div>
            </div>

            {/* Get in touch section */}
          <div className="mt-5">
            <GetInTouch/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateSales;