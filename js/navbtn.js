const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

const browseProp = document.getElementById("browse-properties");
const properties = document.querySelector(".properties");

browseProp.addEventListener("click", () => {
  console.log("Button clicked");
  console.log("Properties element:", properties);

  if (properties) {
    properties.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Properties element not found");
  }
});
