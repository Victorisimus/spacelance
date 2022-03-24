// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
  window.addEventListener("resize", function () {
    let searchInput = document.getElementsByClassName(
      "search-header__input"
    )[0];
    if (document.documentElement.clientWidth <= 479.98) {
      searchInput.value = "";
      searchInput.placeholder = "search";
    } else {
      searchInput.value = "";
      searchInput.placeholder = "search freelance work";
    }
  });
};
