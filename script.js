
const mobile_nav = document.querySelector(".res-icon");
const nav_header = document.querySelector(".forresponsiveness");

const toggleNavbar = () => {
  nav_header.classList.toggle("start");
};

mobile_nav.addEventListener("click", () => toggleNavbar());