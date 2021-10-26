const buttonEl = document.querySelector("button");
const catImageEl = document.querySelector("img");
const activityEl = document.querySelector("#activity");

buttonEl.addEventListener("click", (e) => {
  activityEl.innerText = "Loading...";

  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((res) => {
      catImageEl.classList = "";
      activityEl.innerText = res.activity;
    });
});
