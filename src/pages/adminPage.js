import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/adminPage.css'; // Import CSS file for styling

const AdminPage = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'bar', // Ensure type is set to "bar"
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Revenue',
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: [65, 59, 80, 81, 56, 55, 40],
          }],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        },
      });
    }
  }, []);

  return (
    <div className="admin-page">
      <canvas ref={chartRef} />
    </div>
  );
};

export default AdminPage;
