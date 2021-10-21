const catImageEl = document.querySelector("img");
const activityEl = document.querySelector("#activity");

catImageEl.addEventListener("click", (e) => {
  catImageEl.classList = "loader";
  activityEl.innerText = "Loading...";

  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((res) => {
      catImageEl.classList = "";
      activityEl.innerText = res.activity;
    });
});
