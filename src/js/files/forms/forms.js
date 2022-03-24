// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";
// Вспомогательные функции
import {
  isMobile,
  _slideUp,
  _slideDown,
  _slideToggle,
  FLS,
} from "../functions.js";

// Работа с полями формы. Добавление классов, работа с placeholder
export function formFieldsInit(options = { viewPass: false }) {
  // Если включено, добавляем функционал "скрыть плейсходлер при фокусе"
  const formFields = document.querySelectorAll(
    "input[placeholder],textarea[placeholder]"
  );
  if (formFields.length) {
    formFields.forEach((formField) => {
      if (!formField.hasAttribute("data-placeholder-nohide")) {
        formField.dataset.placeholder = formField.placeholder;
      }
    });
  }
  document.body.addEventListener("focusin", function (e) {
    const targetElement = e.target;
    if (
      targetElement.tagName === "INPUT" ||
      targetElement.tagName === "TEXTAREA"
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = "";
      }
      if (!targetElement.hasAttribute("data-no-focus-classes")) {
        targetElement.classList.add("_form-focus");
        targetElement.parentElement.classList.add("_form-focus");
      }
      formValidate.removeError(targetElement);
    }
  });
  document.body.addEventListener("focusout", function (e) {
    const targetElement = e.target;
    if (
      targetElement.tagName === "INPUT" ||
      targetElement.tagName === "TEXTAREA"
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = targetElement.dataset.placeholder;
      }
      if (!targetElement.hasAttribute("data-no-focus-classes")) {
        targetElement.classList.remove("_form-focus");
        targetElement.parentElement.classList.remove("_form-focus");
      }
      // Моментальная валидация
      if (targetElement.hasAttribute("data-validate")) {
        formValidate.validateInput(targetElement);
      }
    }
  });
}
