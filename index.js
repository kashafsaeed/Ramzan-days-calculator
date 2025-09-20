
    var ramzanDate = moment("2026-02-28 00:00:00"); 
  function Countdown() {
    var now = moment();
    var diff = moment.duration(ramzanDate.diff(now));
    document.getElementById("Months").textContent  = Math.floor(diff.asMonths());
    document.getElementById("weeks").textContent   = Math.floor(diff.asWeeks()) % 4;
    document.getElementById("days").textContent    = diff.days();
    document.getElementById("hours").textContent   = diff.hours();
    document.getElementById("minutes").textContent = diff.minutes();
    document.getElementById("seconds").textContent = diff.seconds();
 
  }

  Countdown();
  setInterval(Countdown, 1000);

