let sliderImg = document.querySelector(".slider");
let images = document.querySelectorAll("img");
let index = 1;

setInterval(() => {
  let porcentage = index * -100;
  sliderImg.style.transform = `translateX(${porcentage}%)`;
  //   console.log("HOla Mundo");
  index++;
  console.log(images.length);
  if (index > images.length - 1) {
    index = 0;
  }
}, 2000);
