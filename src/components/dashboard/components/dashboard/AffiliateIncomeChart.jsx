import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Register the necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ChartDataLabels);

const AffiliateIncomeChart = () => {
    const [selectedWeek, setSelectedWeek] = useState('thisWeek');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dataThisWeek = [150, 250, 95, 60, 180, 40, 120];
    const dataLastWeek = [100, 200, 90, 70, 150, 80, 110];

    const incomeData = selectedWeek === 'thisWeek' ? dataThisWeek : dataLastWeek;

    const data = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                label: 'Daily Income',
                data: incomeData,
                backgroundColor: '#33FFA8',
                borderRadius: 5,
            }
        ]
    };

    const options = {
        maintainAspectRatio: false, // Allows chart to fill container height
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `$${tooltipItem.raw}`,
                },
                backgroundColor: '#000',
                titleColor: '#fff',
                bodyColor: '#fff',
            },
            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'end',
                formatter: (value) => `$${value}`,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 300,
                ticks: {
                    stepSize: 50,
                    color: '#333',
                },
                grid: {
                    color: '#eee',
                },
            },
            x: {
                ticks: {
                    color: '#333',
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    const optionsList = [
        { value: 'thisWeek', label: 'This Week' },
        { value: 'lastWeek', label: 'Last Week' },
    ];

    return (
        <div className="p-4 mb-20 bg-[#F6FFF] rounded-lg shadow-md h-[400px] ">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Affiliate Income</h3>
                <div className="relative">
                    <div
                        className="border border-gray-300 rounded-lg p-2 cursor-pointer flex justify-between items-center"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        style={{ backgroundColor: '#F6FFFB' }}
                    >
                        <span>{optionsList.find(option => option.value === selectedWeek)?.label}</span>
                        <FontAwesomeIcon
                            icon={isDropdownOpen ? faChevronUp : faChevronDown}
                            className="ml-2 transition-transform duration-200 ease-in-out"
                            style={{ fontSize: '12px', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                    </div>
                    <div
                        className={`absolute right-0 mt-1 bg-[#F6FFFB] rounded-lg shadow-lg z-10 transition-all duration-200 ease-in-out ${isDropdownOpen ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            transform: isDropdownOpen ? 'scaleY(1)' : 'scaleY(0)',
                            transformOrigin: 'top',
                        }}
                    >
                        {optionsList.map(option => (
                            <div
                                key={option.value}
                                className="p-2 hover:bg-[#33FFA8] cursor-pointer"
                                onClick={() => {
                                    setSelectedWeek(option.value);
                                    setIsDropdownOpen(false);
                                }}
                                style={{ backgroundColor: selectedWeek === option.value ? '#33FFA8' : 'white' }}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Bar data={data} options={options}  />
        </div>
    );
};

export default AffiliateIncomeChart;
