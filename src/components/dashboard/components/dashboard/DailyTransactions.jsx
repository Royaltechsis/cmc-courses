import React, { useState } from 'react';

const DailyTransactions = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const transactions = [
        { product: 'CMC', status: 'Paid' },
        { product: 'CMC', status: 'Not Paid' },
        { product: 'CMC', status: 'Paid' },
        { product: 'CMC', status: 'Not Paid' },
        { product: 'CMC', status: 'Not Paid' },
        { product: 'CMC', status: 'Paid' },
    ];

    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="p-4 bg-[#F6FFFB] md-min:px-6 pb-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-sm md-min:text-lg mb-4">Daily Transactions</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#F6FFFB] border border-gray-200">
                    <thead>
                        <tr className="bg-gray-50 text-center">
                            <th className="py-3 border-b md-min:text-base text-xs font-semibold text-gray-500">Product</th>
                            <th className="py-3 border-b md-min:text-base text-xs font-semibold text-gray-500">Payout Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTransactions.map((transaction, index) => (
                            <tr key={index} className="hover:bg-[#E7FFF5] text-center">
                                <td className="py-3 md-min:text-base text-xs pt-6 px-4 border-b">{transaction.product}</td>
                                <td className="py-3 md-min:text-base text-xs pt-6 px-4 border-b" style={{ color: transaction.status === 'Paid' ? '#33FFA8' : '#A33FFA8' }}>
                                    {transaction.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="mx-1 px-2 py-0.5 text-xs border rounded bg-white text-black"
                >
                    &lt;
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-2 py-0.5 text-xs border rounded ${
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
                    className="mx-1 px-2 py-0.5 text-xs border rounded bg-white text-black"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default DailyTransactions;
