'use strict'

const hamburgerBtn = document.getElementById('hamburger');
const nav = document.querySelector('.nav-wrapper');

hamburgerBtn.addEventListener('click', function(){
  nav.classList.toggle('active');
});

const items = document.querySelectorAll('.nav-area > nav > ul > li > a');

items.forEach((item) => {
  item.addEventListener('click', function(){
    nav.classList.remove('active');
  })
})


// slider
$(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    // speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }

    ]
  });
});


gsap.registerPlugin(ScrollTrigger);

const imgs = gsap.utils.toArray('.feature-container > .content > img')
console.log(imgs)

imgs.forEach((img) => {
gsap.to(img, {
  scrollTrigger: {
  trigger: img,
  start: 'top center', 
  // markers: true,
  },
  y: 0,
  opacity: 1,
})
});
