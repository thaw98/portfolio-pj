const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
// Typing text
// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Designer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: ["Developer", "Designer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Contact backend
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      //   new add
      status.classList.add("success");
      //   new add end
      status.innerHTML = "✓ Thank you! The form was submitted successfully.";
      form.reset();
    })
    .catch((error) => {
      //   new add
      status.classList.add("error");
      //   new add end
      status.innerHTML = "✗ Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
