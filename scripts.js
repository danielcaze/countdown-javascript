const countDownDate = new Date("19 Sep 2022, 00:00:00").getTime();
let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days 
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").remove()
    document.getElementById("methods").remove()
    const tbl = document.getElementById("main-table")

    const table = document.createElement("table")
    const row = document.createElement("tr")
    const cell = document.createElement("td")

    tbl.appendChild(table)
    table.appendChild(row)
    row.appendChild(cell)

    cell.innerText="EXPIRED"

    cell.style.color= "#4D4C59"
    cell.style.fontSize = "90px"



  }
}, 1000);