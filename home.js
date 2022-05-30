const slider = document.querySelector(".menu_lateral");
const men = document.getElementById("menu");
const dark = document.getElementById("dark");
const topic1 = document.getElementById("topicS1");
const topic2 = document.getElementById("topicS2");
const topic3 = document.getElementById("topicS3");
const topic4 = document.getElementById("topicS4");
const detalhe1 = document.getElementById("detT");
const detalhe2 = document.getElementById("detT2");
const detalhe3 = document.getElementById("detT3");
const detalhe4 = document.getElementById("detT4");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const arrow4 = document.getElementById("arrow4");
const arrowtop1 = document.getElementById("arrowtop1");
const arrowtop2 = document.getElementById("arrowtop2");
const arrowtop3 = document.getElementById("arrowtop3");
const arrowtop4 = document.getElementById("arrowtop4");
const li4 = document.getElementById("lis");

men.addEventListener("click", ()=>{
  slider.classList.add("menu_latera_afterl")
  dark.classList.add("dark_after")
  dark.style.transition = ".3s;";
})

dark.addEventListener("click", ()=>{
  slider.classList.remove("menu_latera_afterl")
  dark.classList.remove("dark_after")
  dark.style.transition = ".3s;";
})

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

topic1.addEventListener("click", ()=>{ 
  detalhe1.classList.toggle("Show1After")
  detalhe1.style.transition = ".4s"
  arrow1.classList.toggle("fa-angle-down-After")
  arrow1.style.transition = ".2s";
  arrowtop1.classList.toggle("fa-chevron-up-after")
  arrowtop1.style.transition = ".2s";
})

topic2.addEventListener("click", ()=>{ 
  detalhe2.classList.toggle("Show2After")
  detalhe2.style.transition = ".4s"
  arrow2.classList.toggle("fa-angle-down-After")
  arrow2.style.transition = ".2s";
  arrowtop2.classList.toggle("fa-chevron-up-after")
  arrowtop2.style.transition = ".2s";
})

topic3.addEventListener("click", ()=>{
  detalhe3.classList.toggle("Show3After")
  detalhe3.style.transition = ".4s"
  arrow3.classList.toggle("fa-angle-down-After")
  arrow3.style.transition = ".2s";
  arrowtop3.classList.toggle("fa-chevron-up-after")
  arrowtop3.style.transition = ".2s"
})

topic4.addEventListener("click", ()=>{ 
  detalhe4.classList.toggle("Show4After")
  detalhe4.style.transition = ".4s"
  arrow4.classList.toggle("fa-angle-down-After")
  arrow4.style.transition = ".2s";
  arrowtop4.classList.toggle("fa-chevron-up-after")
  arrowtop4.style.transition = ".2s";
  li4.classList.toggle("li4RAfter")
})