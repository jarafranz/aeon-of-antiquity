const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

const visibleSlides = 3;
let index = 0;
const slideWidth = slides[0].offsetWidth + 30;

function updateActiveSlide() {
  slides.forEach(slide => slide.classList.remove("active"));

  // Center slide
  slides[index + 1].classList.add("active");
}

function moveCarousel() {
  index++;
  track.style.transition = "transform 1s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * index}px)`;
  updateActiveSlide();

  // When we reach the duplicated set
  if (index === slides.length / 2) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      index = 0;
      updateActiveSlide();

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          track.style.transition = "transform 1s ease-in-out";
        });
      });
    }, 1000); // wait for slide animation to finish
  }
}

// initial state
updateActiveSlide();

// autoplay
setInterval(moveCarousel, 4000);
