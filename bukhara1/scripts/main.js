const openModalButtons = document.querySelectorAll(".modalButton");
const closeModalButtons = document.querySelectorAll(".closeModalButton");
const modal = document.querySelector(".modal");
const openModalFormButtons = document.querySelectorAll(".modalFormButton");
const modalForm = document.querySelector(".modalForm");
const submit = document.querySelector(".modalForm button");
const passwordInput = document.querySelector('input[id="password"]');
const confirmInput = document.querySelector('input[id="confirm"]');
const error = document.querySelector(".error");
//const modalForBuy = document.querySelector(".modalForBuy");
//const buyButton = document.querySelector(".modalForBuy .submit_button");
const burgerMenu = document.querySelector(".burger button");
const navPanel = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navPanel.classList.toggle("open");
});

openModalButtons.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "block";
  });
});
closeModalButtons.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "none";
  });
});

openModalFormButtons.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    modalForm.style.display = "block";

    function closeButtonFunction(x) {
          if (x.matches) { // If media query matches
              var closeButtonA = document.getElementById("closeButtonA");
              closeButtonA.style.display = "block";
              var closeButtonB = document.getElementById("closeButtonB");
              closeButtonB.style.display = "none";
          } else {
              var closeButtonA = document.getElementById("closeButtonA");
              closeButtonA.style.display = "none";
              var closeButtonB = document.getElementById("closeButtonB");
              closeButtonB.style.display = "block";
          }
        }
        
        var x = window.matchMedia("(max-width: 767px)")
        closeButtonFunction(x) // Call listener function at run time
  });
});

//submit.addEventListener("click", e => {
//  e.preventDefault();
//  modal.style.display = "none";
//  modalForBuy.style.display = "block";
//});

[passwordInput, confirmInput].forEach(input =>
  input.addEventListener("blur", validation)
);

//buyButton.addEventListener("click", () => {
//  modalForBuy.style.display = "none";
//});

function validation() {
  if (
    confirmInput.value.length > 0 &&
    passwordInput.value.length > 0 &&
    passwordInput.value !== confirmInput.value
  ) {
    submit.disabled = true;
    confirmInput.classList.add("error");
    error.innerHTML = "wrong password";
  } else if (
    confirmInput.value.length > 0 &&
    passwordInput.value.length > 0 &&
    passwordInput.value === confirmInput.value
  ) {
    submit.disabled = false;
    confirmInput.classList.remove("error");
    error.innerHTML = "";
  }
}

// Pending Pop Up
function showPendingPopUp() {
  validation();
  var pending = document.getElementById("pending-pop-up");
  pending.style.display = "block";
}
function closePendingPopUp() {
  var pending = document.getElementById("pending-pop-up");
  pending.style.display = "none";
  var info = document.getElementById("infoPopUp");
  info.style.display = "none";
}

// Sign In Pop Up
function showSignInPopUp() {
  var sign = document.getElementById("sign-in-pop-up");
  sign.style.display = "block";
}
function closeSignInPopUp() {
  var sign = document.getElementById("sign-in-pop-up");
  sign.style.display = "none";
}

// Terms Pop Up
function showTermsPopUp() {
  var info = document.getElementById("terms-pop-up");
  info.style.display = "block";
}
function closeTermsPopUp() {
  var info = document.getElementById("terms-pop-up");
  info.style.display = "none";
}
function acceptAndCloseTermsPopUp() {
  var info = document.getElementById("terms-pop-up");
  info.style.display = "none";
  var termsCheck = document.getElementById("terms-check");
  termsCheck.checked = true;
}
function rejectAndCloseTermsPopUp() {
  var info = document.getElementById("terms-pop-up");
  info.style.display = "none";
  var termsCheck = document.getElementById("terms-check");
  termsCheck.checked = false;
}

new WOW().init();
