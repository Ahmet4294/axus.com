const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const links = nav.querySelectorAll("a");
const overlay = document.querySelector(".overlay");

const close = () => {
  for(const element of [toggle, nav, overlay]) {
    element.classList.remove("active");
  }
}

function menuToggle() {
  for(const element of [toggle, nav, overlay]) {
    element.classList.toggle("active");
  }
}

for(const link of links) {
  link.addEventListener("click", () => Links(link));
}

const Links = (link) => {
  for(const l of links) {
    l.classList.remove("active");
  }
  link.classList.add("active");
  close();
}

function Overlay() {
  close();
}
