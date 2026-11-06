const toggle = document.querySelector(".menu-toggle");
const links = document.querySelectorAll(".nav-links a");
const contents = document.querySelectorAll("main .content");

document.querySelector(`[data-year]`).textContent = new Date().getFullYear();

window.addEventListener("DOMContentLoaded", () => {
  links[0].click();
});

function menuToggle() {
  toggle.classList.toggle("active");
  document.body.style.overflowY = "hidden";
}

function Overlay() {
  close();
}

for(const link of links) {
  link.addEventListener("click", () => Links(link));
}

const close = () => {
  toggle.classList.remove("active");
  document.body.style.overflowY = "auto";
}

const Links = (link) => {
  for(const l of links) {
    l.classList.remove("active");
  }
  for(const content of contents) {
    content.style.display = "none";
  }

  link.classList.add("active");

  const id = link.getAttribute("href").slice(1);
  const content = document.getElementById(id);
  content.style.display = "block";

  close();
}

const items = document.querySelectorAll("#home .panels");
const panels = document.querySelectorAll("#project .panels");

items.forEach((item, index) => {
  panels[index].innerHTML = item.innerHTML;
})
