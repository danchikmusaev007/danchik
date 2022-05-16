// const prev = document.getElementById('btn-prev'),
//       next = document.getElementById('btn-next'),
//       slides = document.querySelectorAll('.slide'),
//       dots = document.querySelectorAll('.dot');

// let index = 0;

// const activeSlide = n => {
//     for(slide of slides) {
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }

// const activeDot = n => {
//     for(dot of dots) {
//         dot.classList.remove('active');
//     }
//     dots[n].classList.add('active');
// }

// const prepareCurrentSlide = ind => {
//     activeSlide(index);
//     activeDot(index);
// }

// const nextSlide = () => {
//     if(index == slides.length - 1) {
//         index = 0;
//         prepareCurrentSlide(index);
//     }else {
//         index++;
//         prepareCurrentSlide(index);
//     }
// }

// const prevSlide = () => {
//     if(index == slides.length - 1) {
//         index = 0;
//         prepareCurrentSlide(index);
//     }else {
//         index++;
//         prepareCurrentSlide(index);
//     }
// }

// dots.forEach((item, indexDot)=> {
//     item.addEventListener('click', () => {
//         index = indexDot;
//         prepareCurrentSlide(index);
//     })
// })

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);



const example = document.querySelector(".box")
const slider_ex = document.querySelector(".slider")

let xPos = 0;
let yPos = 0;

function move() {
  if(xPos < 340 && yPos == 0) {
    xPos += 16;
    slider_ex.style.left = `${xPos}px`;
    setTimeout(() => {
      move();
    }, 160);
  }  else if (xPos >= 340 && yPos < 340 ) {
    yPos += 16;
    slider_ex.style.top = `${yPos}px`;
    setTimeout(() => {
      move();
    }, 160);
  }  else if (xPos > 0 && yPos >= 340) {
    xPos -= 16;
    slider_ex.style.left = `${xPos}px`;
    setTimeout(() => {
      move();
    }, 160)
  } else if (xPos == 0 && yPos > 0) {
    yPos -= 16;
    slider_ex.style.top = `${yPos}px`;
    setTimeout(() => {
      move();
    }, 160)
  }
}
move()