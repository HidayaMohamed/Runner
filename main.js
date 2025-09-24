const signUp = document.getElementById("signUp");
const form = document.getElementById("form");
const TrainersInfo = document.getElementById("TrainersInfo");
const membersInfo = document.getElementById("membersInfo");
const trainers = document.getElementById("trainers");
const members = document.getElementById("members");
const TrainersBtn = document.getElementById("TrainersBtn");
const MembersBtn = document.getElementById("MembersBtn");

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