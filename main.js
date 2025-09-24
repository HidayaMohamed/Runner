const signUp = document.getElementById("signUp");
const form = document.getElementById("form");
const TrainersInfo = document.getElementById("TrainersInfo");
const membersInfo = document.getElementById("membersInfo");
const trainers = document.getElementById("trainers");
const members = document.getElementById("members");
const TrainersBtn = document.getElementById("TrainersBtn");
const MembersBtn = document.getElementById("MembersBtn");

// Creates variables for the Founder section
const founder = document.getElementById("fullName")
const image = document.getElementById("image")
const age = document.getElementById("age")
const educationLevel = document.getElementById("educationLevel")
const description = document.getElementById("description")

// Creates variable for the Trainer


function displayOnClick(Btn, element) {
  Btn.addEventListener("click", () => {
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

displayOnClick(MembersBtn, members);
displayOnClick(signUp, form);
displayOnClick(TrainersBtn, trainers)


function fetchFounder() {
    fetch("http://localhost:3000/founder")
}