const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container-2");
const numbers = document.querySelectorAll(".numbers");
const rating = document.getElementById("rating");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
  container1.classList.add("hide");
  container2.classList.remove("hide");
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    rating.innerHTML = number.innerHTML;
  });
});
