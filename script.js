const slides = [
  {
    image: "photos/IMG_9198.jpg",
    kicker: "Para la mejor mamá",
    title: "Feliz Día de las Madres, Mamá",
    message:
      "Hoy es para ti: por tu amor, tu fuerza y la manera en que siempre haces que la casa se sienta llena de cariño.",
  },
  {
    image: "photos/IMG_3851.jpg",
    kicker: "Gracias por todo",
    title: "Gracias por apoyarnos siempre",
    message:
      "Gracias por apoyarnos en cada etapa, en cada sueño y en cada día difícil. Tu confianza en nosotros nos ha dado más fuerza de la que imaginas.",
  },
  {
    image: "photos/IMG_8433.jpg",
    kicker: "Con mucho amor",
    title: "Tu amor nos cuida",
    message:
      "Gracias por siempre demostrarnos tanto amor a mis hermanos y a mí. Nos haces sentir vistos, protegidos y cuidados de una forma que nunca olvidamos.",
  },
  {
    image: "photos/IMG_4982.jpg",
    kicker: "Nuestro corazón",
    title: "Tú eres nuestro hogar",
    message:
      "No importa cuánto cambie la vida, tu voz, tus abrazos y tu corazón siempre han sido el lugar al que podemos regresar.",
  },
  {
    image: "photos/IMG_3959.jpg",
    kicker: "Fuerte y dulce",
    title: "Tu fuerza nos inspira",
    message:
      "Nos has enseñado lo que significa seguir adelante con gracia. Tu valor, tu paciencia y tu fe han formado la persona que cada uno de nosotros está llegando a ser.",
  },
  {
    image: "photos/IMG_4670.jpg",
    kicker: "La reina de la familia",
    title: "Haces la vida más bonita",
    message:
      "Gracias por esas cosas que parecen pequeñas, pero significan todo: las comidas, las risas, los consejos, las oraciones y el amor que pones en todo.",
  },
  {
    image: "photos/IMG_7948.jpg",
    kicker: "Siempre con nosotros",
    title: "Llevamos tu amor con nosotros",
    message:
      "A donde vayamos, llevamos lo que nos enseñaste: cuidar a la familia, trabajar duro, mantenernos humildes y amar con todo el corazón.",
  },
  {
    image: "photos/IMG_8924.jpg",
    kicker: "Feliz Día de las Madres",
    title: "Te queremos muchísimo",
    message:
      "Mamá, esperamos que hoy recuerdes lo importante y amada que eres. Gracias por ser nuestra guía, nuestro consuelo y el corazón de nuestra familia. Mis hermanos y yo tenemos una cena especial planeada para ti.",
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

function preloadSlides() {
  slides.slice(1).forEach((slide) => {
    const image = new Image();
    image.src = slide.image;
  });
}

function renderDots() {
  dots.innerHTML = "";

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Ir al slide ${index + 1}`);
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
preloadSlides();
