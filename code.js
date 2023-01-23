let btn = document.getElementById("submit_btn");
let rating = document.getElementById("rating");
let ratings = document.querySelectorAll(".circle");
let ratings_container = document.querySelector(".container__ratings");
let thankyou_container = document.querySelector(".thanku_container");

for (let i = 0; i < ratings.length; i++) {
  // Listening for a click event on each number div //
  ratings[i].addEventListener("click", () => {
    // getting the clicked number value property from 1 to 5//
    let selected_rating = ratings[i].innerHTML;

    // looping through the numbers to check for a previously selected rating and removing if such. //
    // Necessary in order to have only one rating selected at a time //
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains("selected");
      ratings[i].classList.remove("selected");
    }

    // add the selected class which highlights the selected rating //
    ratings[i].classList.add("selected");

    btn.addEventListener("click", () => {
      ratings_container.style.display = "none";
      thankyou_container.style.display = "flex";
      rating.innerHTML = selected_rating;
    });
    
  });
}
