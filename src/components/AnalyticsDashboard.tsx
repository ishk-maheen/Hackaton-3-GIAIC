// 'use client'
// import React from 'react';

// const rentalCarKpis = {
//   totalRentals: 1200,  // Example total rentals
//   availableCars: 150,  // Example number of available cars
//   popularCarModels: 35, // Example popular car models
// };

// const AnalyticsDashboard: React.FC = () => {
//   return (
//     <div className="container mx-auto p-8 bg-gray-50">
//       <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Rental Car Service Analytics Dashboard</h2>

//       {/* KPI Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Rentals</h3>
//           <p className="text-3xl font-bold text-blue-600">{rentalCarKpis.totalRentals}</p>
//           <p className="text-sm text-gray-500 mt-2">Total number of car rentals</p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Cars</h3>
//           <p className="text-3xl font-bold text-green-600">{rentalCarKpis.availableCars}</p>
//           <p className="text-sm text-gray-500 mt-2">Cars available for rent</p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Car Models</h3>
//           <p className="text-3xl font-bold text-purple-600">{rentalCarKpis.popularCarModels}</p>
//           <p className="text-sm text-gray-500 mt-2">Most rented car models</p>
//         </div>
//       </div>

//       {/* Chart Section */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Rentals Over Time</h3>
//           <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
//             <p className="text-gray-500">[Rentals Chart Placeholder]</p>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Car Availability</h3>
//           <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
//             <p className="text-gray-500">[Car Availability Chart Placeholder]</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsDashboard;












'use client'
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Import ArcElement for Pie charts
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Register ArcElement for Pie charts
);

const AnalyticsDashboard: React.FC = () => {
  // Line chart data
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Rentals Over Time',
        data: [10, 20, 30, 25, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: ['Sedan', 'SUV', 'Truck', 'Convertible'],
    datasets: [
      {
        data: [30, 25, 15, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="container p-6">
      <h2 className="text-3xl font-bold text-center underline  mb-6">Analytics Dashboard</h2> <br />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line chart */}
        <div className="chart-container">
          <h3 className="text-xl font-semibold mb-4">Rentals Over Time</h3>
          <Line data={lineData} />
        </div>

        {/* Pie chart */}
        <div className="chart-container">
          <h3 className="text-xl font-semibold mb-4">Car Availability</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
