const textContainer = document.querySelector("#text-container");
const imageContainer = document.querySelector(".the-cookie-itself");
const image = document.querySelector("img");
const bubbles = document.querySelector(".bubbles");
const treatText = document.querySelector(".treat-text");
const container = document.querySelector(".container");
const link = "https://www.instagram.com/macascookiehouse/";
const delay = 2000;

isTextVisible = false;

imageContainer.addEventListener("mouseover", () => {
  textContainer.innerHTML = "Click me!";
  textContainer.style.visibility = "visible";
  textContainer.style.opacity = 1;
  textContainer.style.transition = ".5s";
  bubbles.style.visibility = "visible";
  bubbles.style.transition = ".5s";
});

imageContainer.addEventListener("click", () => {
  isTextVisible = true;
  treatText.innerText = "You are being redirected to heaven!";
  treatText.style.fontSize = "50px";
  container.classList.toggle("clicked");
  setTimeout(() => {
    window.open(link, "_blank");
  }, delay);
});

// imageContainer.addEventListener("mouseout", () => {
//   if (!isTextVisible) {
//     textContainer.style.visibility = "hidden";
//     textContainer.style.opacity = 0;
//     bubbles.style.visibility = "hidden";
//   }
// });
