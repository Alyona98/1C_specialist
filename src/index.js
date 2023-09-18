import "./index.html"
import "./index.css";

//height - viewport

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

//modal window

let modal = document.querySelector('.modal');
let modal_close = document.querySelectorAll(".modal_bg, .click_close_modal");
let modal_open = document.querySelector('.click_open_modal');
let mainForm = document.forms;

modal_close.forEach(el => el.addEventListener('click', e => {
  modal.classList.add("d-none");
  document.forms.modal_form.querySelectorAll('*[required]').forEach(function(el) {
    el.value = '';
  });
}));

modal_open.addEventListener('click', e => {
  modal.classList.remove("d-none");
  document.forms.modal_form.querySelectorAll('*[required]').forEach(function(el) {
    el.classList.remove("attention");
    if(el.parentElement.querySelector('.attention_i')) {
      el.parentElement.querySelector('.attention_i').remove();
    }
  });
});

//form validation

for (let i = 0; i < mainForm.length; ++i ) {
  let el = mainForm[i];
  let form_input_required = el.querySelectorAll('*[required]');
  let form_btn = el.querySelector('button');

  form_btn.addEventListener("click", function (event) {
    form_input_required.forEach(function(el) {
      if (el.value == '') {
        el.classList.add("attention");
        if(!el.parentElement.querySelector('.attention_i')) {
          el.parentElement.querySelector('label').insertAdjacentHTML(
            "beforeend", 
            `<svg class ='attention_i' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0C7.62108 0 5.78435 0.557165 4.22209 1.60104C2.65982 2.64491 1.44218 4.12861 0.723148 5.86451C0.00411604 7.6004 -0.184015 9.51054 0.182544 11.3534C0.549104 13.1962 1.45389 14.8889 2.78249 16.2175C4.11109 17.5461 5.80383 18.4509 7.64664 18.8175C9.48946 19.184 11.3996 18.9959 13.1355 18.2769C14.8714 17.5578 16.3551 16.3402 17.399 14.7779C18.4428 13.2156 19 11.3789 19 9.5C18.997 6.98135 17.9952 4.56671 16.2142 2.78575C14.4333 1.0048 12.0187 0.0029579 9.5 0ZM9.5 17.8823C7.84213 17.8823 6.22149 17.3907 4.84302 16.4697C3.46455 15.5486 2.39016 14.2395 1.75572 12.7078C1.12128 11.1761 0.955281 9.4907 1.27872 7.86468C1.60215 6.23867 2.40049 4.74507 3.57278 3.57278C4.74508 2.40049 6.23867 1.60215 7.86469 1.27871C9.4907 0.955276 11.1761 1.12127 12.7078 1.75572C14.2395 2.39016 15.5486 3.46454 16.4697 4.84301C17.3907 6.22148 17.8824 7.84213 17.8824 9.5C17.8799 11.7224 16.996 13.853 15.4245 15.4245C13.853 16.996 11.7224 17.8799 9.5 17.8823ZM8.94118 10.2451V5.02941C8.94118 4.8812 9.00006 4.73906 9.10485 4.63426C9.20965 4.52946 9.35179 4.47059 9.5 4.47059C9.64821 4.47059 9.79035 4.52946 9.89515 4.63426C9.99995 4.73906 10.0588 4.8812 10.0588 5.02941V10.2451C10.0588 10.3933 9.99995 10.5354 9.89515 10.6402C9.79035 10.745 9.64821 10.8039 9.5 10.8039C9.35179 10.8039 9.20965 10.745 9.10485 10.6402C9.00006 10.5354 8.94118 10.3933 8.94118 10.2451ZM10.4314 13.598C10.4314 13.7822 10.3768 13.9623 10.2744 14.1155C10.1721 14.2686 10.0266 14.388 9.85642 14.4585C9.68624 14.529 9.49897 14.5474 9.3183 14.5115C9.13763 14.4756 8.97168 14.3869 8.84142 14.2566C8.71117 14.1264 8.62246 13.9604 8.58653 13.7797C8.55059 13.5991 8.56903 13.4118 8.63953 13.2416C8.71002 13.0714 8.8294 12.926 8.98256 12.8236C9.13572 12.7213 9.31579 12.6667 9.5 12.6667C9.74702 12.6667 9.98392 12.7648 10.1586 12.9395C10.3332 13.1141 10.4314 13.351 10.4314 13.598Z" fill="#DF2F2F"/>
            </svg>`
          );
        }
      } else {
        el.classList.remove("attention");
        if(el.parentElement.querySelector('.attention_i')) {
          el.parentElement.querySelector('.attention_i').remove();
        }
      }
    });
    event.preventDefault();
  })
}