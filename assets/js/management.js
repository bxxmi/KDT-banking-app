const canvas1 = document.querySelector('#bar-chart');
const barChart = new Chart(canvas1, {
  type: 'bar',
  data: {
    labels: ['02', '04', '06', '08', '10'],
    datasets: [{
      backgroundColor: ['rgba(255, 92, 200, 0.5)',
        'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      data: [20000, 40000, 60000, 80000, 100000]
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

const canvas2 = document.querySelector('#doughnut-chart'); 
var doughnutChart = new Chart(canvas2, {
  type: 'doughnut',
    data: {
      datasets: [{
        data: [40, 60, 50, 80, 10],
        backgroundColor: [
          '#BD5B00',
          '#0057BD',
          '#00BDB2',
          '#FEC229',
          '#C4C4C4'
        ],
        borderWidth: 0
      }
    ]
  },
  options: {
    plugins: {
      cutoutPercentage: 0
    }
  }
});
