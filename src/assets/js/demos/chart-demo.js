import Chart from 'chart.js/auto';

// Sample monthly revenue data (you can replace this with your own data)
const monthlyRevenueData = [
    1000, 1500, 1200, 1800, 2000, 2500, 2200, 2700, 2300, 2800, 3000, 3200,
];

// Months for the x-axis labels
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

// Function to create the chart
function createRevenueChart() {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Monthly Revenue',
                    data: monthlyRevenueData,
                    borderColor: '#D35400', // You can customize the line color here
                    backgroundColor: '#FFDAB9', // You can customize the area color here
                    borderWidth: 2,
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value, index, values) {
                            return '$' + value; // Format the y-axis labels as currency
                        },
                    },
                },
            },
        },
    });
}

// Sample data
const totalOrders = 452;
const julyPercentage = 18.2;
const augustPercentage = 100 - julyPercentage;

// Function to create the chart
function createOrderChart() {
    const ctx = document.getElementById('orderChart').getContext('2d');
    const orderChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['July', 'August'],
            datasets: [
                {
                    data: [julyPercentage, augustPercentage],
                    backgroundColor: ['#8b5cf6', '#fb923c'], // Orange for July, Blue for August
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
}

document.addEventListener('DOMContentLoaded', function () {
    createOrderChart();
    createRevenueChart();
});