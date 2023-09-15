import "./index.html"
import "./index.css";

let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.1;
let doc_width = window.innerWidth;
let deg_count = document.querySelector('.deg_count');

if (doc_width <= 450) {
  deg_count.style.transform = `rotate(-${80-vw*1.6}deg)`;
}

document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.1;
  let doc_width = window.innerWidth;
  let deg_count = document.querySelector('.deg_count');
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  if (doc_width <= 450) {
    deg_count.style.transform = `rotate(-${80-vw*1.5}deg)`;
  }
});

let modal = document.querySelector('.modal');
let modal_close = document.querySelectorAll(".modal_bg, .click_order_consultation, .click_close_modal");
let modal_open = document.querySelector('.click_open_modal');

modal_close.forEach(el => el.addEventListener('click', e => {
  modal.classList.add("d-none");
}));

modal_open.addEventListener('click', e => {
  modal.classList.remove("d-none");
});