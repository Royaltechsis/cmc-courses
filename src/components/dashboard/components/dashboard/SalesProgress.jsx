import React, { useEffect, useState } from 'react';

const SalesProgress = ({ totalSales = 500 }) => {  // Default to 0 if totalSales is undefined
    const [salesPercentage, setSalesPercentage] = useState(0);

    useEffect(() => {
        // Calculate sales percentage, ensuring totalSales is a number
        const progress = Math.min((Number(totalSales) / 500) * 100, 100);
        setSalesPercentage(progress);
    }, [totalSales]);

    return (
        <div className="bg-[#F6FFFB] rounded-lg shadow-md p-6 mb-6">
            {/* Header with Title and Legend */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold md-min:text-lg text-sm">Sales Progress</h3>
                
                {/* Legend for Sales Count and Percentage */}
                <div className="flex space-x-4">
                    <div className="flex items-center">
                        <span className="w-3 h-3 rounded-[3px] bg-[#33FFA8] mr-2"></span>
                        <span className="md-min:text-sm text-xs font-medium text-gray-600">Sales count</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 rounded-[3px] bg-purple-500 mr-2"></span>
                        <span className="md-min:text-sm text-xs font-medium text-gray-600">Percentage</span>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-300 my-4"></div>

            {/* Progress Bars */}
            <div className='mt-10 mb-4'>
                {/* Sales Count Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-600 text-sm">{totalSales}</span>
                        <span className="text-gray-600 text-sm">500</span>
                    </div>
                    <div className="w-full h-4 rounded-lg bg-gray-200 overflow-hidden">
                        <div className="h-full bg-[#33FFA8]" style={{ width: `${salesPercentage}%` }}></div>
                    </div>
                </div>

                {/* Percentage Progress Bar */}
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-600 text-sm">{Math.round(salesPercentage) || 0}%</span>
                        <span className="text-gray-600 text-sm">100%</span>
                    </div>
                    <div className="w-full h-4 rounded-lg bg-gray-200 overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: `${salesPercentage}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesProgress;
