const inputDays = document.querySelector("#days");
const inputMonths = document.querySelector("#months");
const inputYear = document.querySelector("#year");
const days = document.querySelector(".days");
const months = document.querySelector(".months");
const years = document.querySelector(".years");
const submitBtn = document.querySelector(".btn");
const errorMsg = document.querySelectorAll(".error-msg");

const currenrDate = new Date();
let todayDay = currenrDate.getDate();
let todayMonth = currenrDate.getMonth() + 1;
let todayYear = currenrDate.getFullYear();

const monthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calculation() {
  let y = todayYear - inputYear.value;
  let m = todayMonth - inputMonths.value;
  let d = todayDay - inputDays.value;

  if (d < 0) {
    m -= 1;
    d += monthsArray[inputMonths.value - 1];
  }
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  days.textContent = d;
  months.textContent = m;
  years.textContent = y;
}

function checkDays(d) {
  if (d > 31 || d < 1) {
    errorMsg[0].classList.remove("hidden");
    errorMsg[0].innerHTML = "Must be a valid day";
    inputDays.style.borderColor = "red";
  }
}

function checkMonths(m) {
  if (m > 12 || m < 1) {
    errorMsg[1].classList.remove("hidden");
    errorMsg[1].innerHTML = "Must be a valid month";
    inputMonths.style.borderColor = "red";
  }
}

function checkYear(m) {
  if (m >= currenrDate.getFullYear()) {
    errorMsg[2].classList.remove("hidden");
    errorMsg[2].innerHTML = "Must be in the past";
    inputYear.style.borderColor = "red";
  }
}

submitBtn.addEventListener("click", function () {
  if (inputDays.value === "") {
    errorMsg[0].classList.remove("hidden");
  }
  if (inputMonths.value === "") {
    errorMsg[1].classList.remove("hidden");
  }
  if (inputYear.value === "") {
    errorMsg[2].classList.remove("hidden");
  } else {
    const d = inputDays.value;
    checkDays(d);
    const m = inputMonths.value;
    checkMonths(m);
    checkYear(inputYear.value);
    calculation();
  }
});
