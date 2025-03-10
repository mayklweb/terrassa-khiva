let data = [
  { id: 1, image: "./foods/61.webp", name: "" },
  { id: 1, image: "./foods/62.webp", name: "Chechivichniy sup" },
  { id: 1, image: "./foods/63.webp", name: "" },
  { id: 1, image: "./foods/64.webp", name: "" },
  { id: 1, image: "./foods/65.webp", name: "" },
  { id: 1, image: "./foods/66.webp", name: "" },
  { id: 1, image: "./foods/67.webp", name: "" },
  { id: 1, image: "./foods/68.webp", name: "" },
  { id: 1, image: "./foods/70.webp", name: "" },
  { id: 1, image: "./foods/71.webp", name: "" },
  { id: 1, image: "./foods/72.webp", name: "" },
  { id: 1, image: "./foods/73.webp", name: "" },
  { id: 1, image: "./foods/74.webp", name: "" },
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
  .map(({ image, name }) => {
    return `<div class="menu-item">
    <div class='menu-img'>
      <img src="${image}" alt="Food Image" />
      </div>
      <p class="menu-name">${name}</p>
    </div>`;
  })
  .join("");
menuContainer.innerHTML = imgDivs;
