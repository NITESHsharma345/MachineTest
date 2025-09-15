// Line Chart
const lineCtx = document.getElementById("lineChartOne");

new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["01 Apr", "02 Apr", "03 Apr", "04 Apr", "05 Apr", "06 Apr"],
    datasets: [
      {
        label: "Templates",
        data: [10000, 21000, 22000, 5000, 21000, 30000],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 100, 235, 0)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Hosting",
        data: [14000, 35000, 30000, 66000, 40000, 50000],
        borderColor: "#f97316",
        backgroundColor: "rgba(249,115,22,0.1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
        scales: {
      x: {
        grid: {
          display: true  
        }
      },
      y: {
        grid: {
          display: true 
        }
      }
    },
  },
});

// Line Chart Two
const lineTwoCtx = document.getElementById("lineChartTwo");
new Chart(lineTwoCtx, {
  type: "line",
  data: {
    labels: ["01 Apr", "02 Apr", "03 Apr", "04 Apr", "05 Apr", "06 Apr"],
    datasets: [
      {
        label: "Templates",
        data: [10000, 21000, 22000, 5000, 21000, 30000],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      }
    ],
  },
  options: {
    responsive: true,
        scales: {
      x: {
        grid: {
          display: true 
        }
      },
      y: {
        grid: {
          display: true   
        }
      }
    },
  },
});

// Line Chart Three
const lineThreeCtx = document.getElementById("lineChartThree");
new Chart(lineThreeCtx, {
  type: "line",
  data: {
    labels: ["01 Apr", "02 Apr", "03 Apr", "04 Apr", "05 Apr", "06 Apr"],
    datasets: [
      {
        label: "Hosting",
        data: [14000, 35000, 30000, 66000, 40000, 50000],
        borderColor: "#f97316",
        backgroundColor: "rgba(249,115,22,0.1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
        scales: {
      x: {
        grid: {
          display: true  
        }
      },
      y: {
        grid: {
          display: true
        }
      }
    }
  },
});



// Bar Chart
const barCtx = document.getElementById("barChart");

new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 70],
        backgroundColor: "#2563eb",
        borderRadius: 8,
        barThickness: 10,      
      },
      {
        label: "Profit",
        data: [45, 39, 60, 50, 36, 30, 40],
        backgroundColor: "#f97316",
        borderRadius: 8,
        barThickness: 10,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 15,
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        bodyFont: { weight: "bold" },
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 10,
        displayColors: true,
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#6b7280",
          font: { size: 12 },
        },
      },
      y: {
        grid: { display: false },
        ticks: {
          display: true,
        },
        border: { display: true }, 
      },
    },
  },
});


// Line Chart
const lineBarCtx = document.getElementById("lineBar");

new Chart(lineBarCtx, {
 type: "line",
  data: {
    labels: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"],
    datasets: [
      {
        label: "Templates",
        data: [10000, 21000, 22000, 5000, 21000, 30000],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 100, 235, 0)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
        scales: {
      x: {
        grid: {
          display: false   
        }
      },
      y: {
        grid: {
          display: false 
        }
      }
    },
  },
});


// World Map
fetch("https://cdn.jsdelivr.net/npm/world-atlas/countries-110m.json")
  .then(res => res.json())
  .then(data => {
    const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

    new Chart(document.getElementById("worldMap"), {
      type: "choropleth",
      data: {
        labels: countries.map(d => d.properties.name),
        datasets: [{
          label: "Visitors",
          data: countries.map(d => ({
            feature: d,
            value: Math.floor(Math.random() * 100)
          })),
        }]
      },
      options: {
        showOutline: true,
        scales: {
          projection: { axis: "x", projection: "equalEarth" }
        },
        plugins: {
          tooltip: {
            backgroundColor: "#fff",  
            titleColor: "#000",        
            bodyColor: "#000",        
            borderColor: "#e5e7eb",
            borderWidth: 1,
            callbacks: {
              label: (context) => {
                const country = context.raw.feature.properties.name;
                const value = context.raw.value;
                return `${country}: ${value} visitors`;
              }
            }
          }
        }
      }
    });
  });



// doughnut Chart
const doughnutCtx = document.getElementById("doughnutChart");

  new Chart(doughnutCtx, {
    type: "doughnut",
    data: {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [
        {
          label: "Traffic",
          data: [55, 30, 15], 
          backgroundColor: [
            "hsl(184.33deg 80.36% 43.92%)", 
            "hsl(24.42deg 96.58% 77.06%)", 
            "hsl(219.72deg 89.12% 53.14%)" 
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#fff",
          titleColor: "#000",
          bodyColor: "#000",
          borderColor: "#e5e7eb",
          borderWidth: 1,
          callbacks: {
            label: (context) => `${context.label}: ${context.raw}%`,
          },
        },
      },
    },
  });