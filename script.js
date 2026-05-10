const slides = [
  {
    image: "IMG_9198.jpg",
    kicker: "Para la mejor mamá",
    title: "Happy Mother's Day, Mom",
    message:
      "Today is for you: your love, your strength, and the way you make home feel warm no matter where we are.",
  },
  {
    image: "IMG_3851.jpg",
    kicker: "Gracias por todo",
    title: "Thank You for Supporting Us",
    message:
      "Thank you for being supportive through every season, every dream, and every hard day. Your belief in us has carried us more than you know.",
  },
  {
    image: "IMG_8433.jpg",
    kicker: "Con mucho amor",
    title: "You Love So Deeply",
    message:
      "Thank you for always showing my brothers and me so much love. You make each of us feel seen, protected, and endlessly cared for.",
  },
  {
    image: "IMG_4982.jpg",
    kicker: "Nuestro corazón",
    title: "You Are Our Home",
    message:
      "No matter how much life changes, your voice, your hugs, and your heart have always been the place we can come back to.",
  },
  {
    image: "IMG_3959.jpg",
    kicker: "Fuerte y dulce",
    title: "Your Strength Inspires Us",
    message:
      "You have shown us what it means to keep going with grace. Your courage, patience, and faith have shaped who we are becoming.",
  },
  {
    image: "IMG_4670.jpg",
    kicker: "La reina de la familia",
    title: "You Make Life Beautiful",
    message:
      "Thank you for the little things that are never really little: the meals, the laughs, the advice, the prayers, and the love tucked into everything.",
  },
  {
    image: "IMG_7948.jpg",
    kicker: "Siempre con nosotros",
    title: "We Carry Your Love",
    message:
      "Everywhere we go, we carry what you taught us: to care for family, to work hard, to stay humble, and to love with our whole hearts.",
  },
  {
    image: "IMG_8924.jpg",
    kicker: "Feliz Día de las Madres",
    title: "We Love You So Much",
    message:
      "Mom, we hope today reminds you how treasured you are. Thank you for being our guide, our comfort, and the heart of our family.",
  },
];

const photo = document.querySelector("#slidePhoto");
const backdrop = document.querySelector("#slideBackdrop");
const kicker = document.querySelector("#kicker");
const title = document.querySelector("#slideTitle");
const message = document.querySelector("#slideMessage");
const counter = document.querySelector("#counter");
const dots = document.querySelector("#dots");
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");
const photoShell = document.querySelector(".photo-shell");

let currentIndex = 0;

function renderDots() {
  dots.innerHTML = "";

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index));
    dots.appendChild(dot);
  });
}

function showSlide(nextIndex) {
  currentIndex = (nextIndex + slides.length) % slides.length;
  const slide = slides[currentIndex];

  photo.classList.add("is-changing");

  window.setTimeout(() => {
    photo.src = slide.image;
    backdrop.src = slide.image;
    photo.alt = slide.title;
    kicker.textContent = slide.kicker;
    title.textContent = slide.title;
    message.textContent = slide.message;
    counter.textContent = `${currentIndex + 1} / ${slides.length}`;

    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === currentIndex);
      dot.setAttribute("aria-current", index === currentIndex ? "true" : "false");
    });

    photo.classList.remove("is-changing");
  }, 160);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function previousSlide() {
  showSlide(currentIndex - 1);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previousSlide);
photoShell.addEventListener("click", nextSlide);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    nextSlide();
  }

  if (event.key === "ArrowLeft") {
    previousSlide();
  }
});

renderDots();
showSlide(0);
