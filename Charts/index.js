const ctx = document.getElementById('myChart');

new Chart(ctx, {
  data: {
    labels: ['black', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        type: 'line',
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 3,
      },
      {
        type: 'bar',
        label: '# of Votes',
        data: [10, 5, 23, 8, 6, 5],
        borderWidth: 2,
      },
      {
        type: 'pie',
        label: '# of Votes',
        data: [10, 5, 23, 8, 6, 5],
        borderWidth: 5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
