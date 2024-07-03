// For the time and day
let timer = setInterval(myTimer ,1000);
function myTimer() {
  let date = new Date();
  document.getElementById("utc-time").innerHTML = date.toLocaleTimeString();
  }

function updateTimeAndDay() {
  const now = new Date();
  const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

  document.getElementById('current-day').innerText = dayOfWeek;
}

document.addEventListener('DOMContentLoaded', (event) => {
  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000); // Update every minute
});

// for the see more and see less button

function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}