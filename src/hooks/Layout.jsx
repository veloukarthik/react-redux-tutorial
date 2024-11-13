import React, { useRef, useLayoutEffect } from 'react';
import Chart from 'chart.js/auto';

function BarChart() {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    // Initialize the Chart.js instance with the canvas context
    const ctx = canvasRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  return <canvas ref={canvasRef} width={400} height={400} />;
}

export default BarChart;
