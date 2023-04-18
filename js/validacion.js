const form = document.getElementById("form");
const PASS1 = document.getElementById("password1");
const terms = document.getElementById("terminos");

let enableValidationTerms = false;

const checkPassword = function (PASS2) {
  if (PASS1.value === PASS2.value && PASS1.checkValidity()) {
    PASS2.setCustomValidity("");
  } else {
    PASS2.setCustomValidity("Las contraseñas deben coincidir.");
  }
};

const checkTerms = function (terms) {
  if (!enableValidationTerms) return;
  const BTN_TERMS = document.getElementById("btnTerms");
  const DIV_INVALID_TERMS = document.getElementById("terminos_invalidos");

  if (!terms.checked) {
    BTN_TERMS.classList.add("text-danger");
    DIV_INVALID_TERMS.style.display = "block";
  } else {
    BTN_TERMS.classList.remove("text-danger");
    BTN_TERMS.classList.add("text-success");
    DIV_INVALID_TERMS.style.display = "none";
  }
};

form.addEventListener("submit", function (event) {
  form.classList.add("was-validated");
  enableValidationTerms = true;
  checkTerms(terms);
  if (!form.checkValidity()) {
    event.stopPropagation();
    event.preventDefault();
  }
});
