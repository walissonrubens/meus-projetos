let container = document.querySelector(".container");
let prevButton = document.querySelector("#prev");
let nextButton = document.querySelector("#next");
let items = document.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = document.querySelectorAll(".indicators ul li");
let list = container.querySelector('.list')

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

nextButton.addEventListener("click", (e) => {
  list.style.setProperty('--calculation', 1)
  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlide()
  items[active].classList.add("active");
  
});

prevButton.addEventListener("click", (e) => {
  list.style.setProperty('--calculation', -1)
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  setSlide()
  items[active].classList.add("active");
});

function setSlide() {
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}
