const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const mainContainer = document.getElementById("main-content");
const footer = document.getElementById("footer");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  mainContainer.classList.toggle("m-open");
  footer.classList.toggle("m-open");
});




// button for the chart switching
const btnYear = document.getElementById("btnYear");
const btnMonth = document.getElementById("btnMonth");
const btnDay = document.getElementById("btnDay");

const chartYear = document.querySelector(".lineChartOne");
const chartMonth = document.querySelector(".lineChartTwo");
const chartDay = document.querySelector(".lineChartThree");

function resetButtons() {
  btnYear.classList.remove("btn-primary");
  btnYear.classList.add("btn-outline-secondary");
  btnMonth.classList.remove("btn-primary");
  btnMonth.classList.add("btn-outline-secondary");
  btnDay.classList.remove("btn-primary");
  btnDay.classList.add("btn-outline-secondary");
}

function hideCharts() {
  chartYear.classList.add("d-none");
  chartMonth.classList.add("d-none");
  chartDay.classList.add("d-none");
}


btnYear.addEventListener("click", () => {
  resetButtons();
  hideCharts();
  btnYear.classList.add("btn-otline-primary");
  chartYear.classList.remove("d-none");
});

btnMonth.addEventListener("click", () => {
  resetButtons();
  hideCharts();
  btnMonth.classList.add("btn-outline-primary");
  chartMonth.classList.remove("d-none");
});

btnDay.addEventListener("click", () => {
  resetButtons();
  hideCharts();
  btnDay.classList.add("btn-outline-primary");
  chartDay.classList.remove("d-none");
});

