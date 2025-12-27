const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

let index = 0;
const slideWidth = slides[0].offsetWidth + 30; // width + gap

function moveCarousel() {
  index++;

  track.style.transform = `translateX(-${slideWidth * index}px)`;

  // reset smoothly when reaching duplicated slides
  if (index === slides.length / 2) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      index = 0;

      setTimeout(() => {
        track.style.transition = "transform 1s ease-in-out";
      }, 50);
    }, 1000);
  }
}

// auto slide every 4 seconds
setInterval(moveCarousel, 3000);
