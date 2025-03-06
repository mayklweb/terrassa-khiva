let data = [
  { id: 1, image: "./foods/61.webp" },
  { id: 1, image: "./foods/62.webp" },
  { id: 1, image: "./foods/63.webp" },
  { id: 1, image: "./foods/64.webp" },
  { id: 1, image: "./foods/65.webp" },
  { id: 1, image: "./foods/66.webp" },
  { id: 1, image: "./foods/67.webp" },
  { id: 1, image: "./foods/68.webp" },
  { id: 1, image: "./foods/70.webp" },
  { id: 1, image: "./foods/71.webp" },
  { id: 1, image: "./foods/72.webp" },
  { id: 1, image: "./foods/73.webp" },
  { id: 1, image: "./foods/74.webp" },
];

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-container");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("active");
});

// Rasm divlarini yaratish va qo‘shish
let imgDivs = data
  .map(({ image }) => {
    return `<div class='menu-img'>
      <img src="${image}" alt="Food Image" />
    </div>`;
  })
  .join(""); // String qilib birlashtiramiz

menuContainer.innerHTML = imgDivs;
