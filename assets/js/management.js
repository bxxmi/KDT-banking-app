// 바 차트
const canvas1 = document.querySelector('#bar-chart');
const barChart = new Chart(canvas1, {
  type: 'bar',
  data: {
    labels: 
    ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
    datasets: [{
      backgroundColor: '#38C976',
      data:
      [20000, 40000, 60000, 80000, 100000]
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          min: 20000,
          max: 100000,
          stepSize: 20000
        }
      }]
    },
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
