const signUp = document.getElementById("signUp");
const form = document.getElementById("form");
const TrainersInfo = document.getElementById("TrainersInfo");
const membersInfo = document.getElementById("membersInfo");
const trainers = document.getElementById("trainers");
const members = document.getElementById("members");
const TrainersBtn = document.getElementById("TrainersBtn");
const MembersBtn = document.getElementById("MembersBtn");

// Creates variables that store the ul
const membersList = document.getElementById("membersList");
const trainersList = document.getElementById("trainersList");

// Creates variables for the Founder section

// Creates variables for the trainer information

// Creates variables to store member information
const memberName = document.getElementById("name");
const memberImage = document.getElementById("memberImage");
const memberAge = document.getElementById("memberAge");
const bloodType = document.getElementById("blood-type");
const experience = document.getElementById("experience");
const fiveKmPr = document.getElementById("5kmPr");
const races = document.getElementById("races");
const review = document.getElementById("review");

function displayOnClick(Btn, element) {
  Btn.addEventListener("click", () => {
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function fetchFounder() {
  fetch("http://localhost:3000/founder")
    .then((res) => res.json())
    .then((founderArr) => {
      displayFounder(founderArr[0]);
    });
}
function displayFounder(founder) {
  const founderName = document.getElementById("fullName");
  const image = document.getElementById("image");
  const age = document.getElementById("age");
  const educationLevel = document.getElementById("educationLevel");
  const description = document.getElementById("description");

  founderName.textContent = founder.fullName;
  image.src = founder.image;
  age.textContent = founder.age;
  educationLevel.textContent = founder.educationLevel;
  description.textContent = founder.description;
}

function fetchTrainers() {
  fetch("http://localhost:3000/trainers")
    .then((res) => res.json())
    .then((trainers) => {
      trainers.forEach((trainer) => renderTrainer(trainer));
    });
}

function renderTrainer(trainer) {
  const li = document.createElement("li");
  li.textContent = trainer.fullName;
  li.addEventListener("click", () => displayTrainer(trainer));
  trainersList.appendChild(li);
}

function displayTrainer(trainer) {
  const TrainerName = document.getElementById("TrainerName");
  const ImageTrainer = document.getElementById("ImageTrainer");
  const trainerAge = document.getElementById("trainerAge");
  const trainerEducationLevel = document.getElementById(
    "trainerEducationLevel"
  );
  const TrainerWorkingExperience = document.getElementById(
    "TrainerWorkingExperience"
  );
  const trainerDescription = document.getElementById("trainerDescription");

  TrainerName.textContent = trainer.fullName;
  ImageTrainer.src = trainer.image;
  ImageTrainer.alt = trainer.fullName;
  trainerAge.textContent = trainer.age;
  trainerEducationLevel.textContent = trainer.educationLevel;
  TrainerWorkingExperience.textContent = trainer.YearsWorkedASATrainer;
  trainerDescription.textContent = trainer.description;
}

function fetchMembers() {
  fetch(" http://localhost:3000/members")
    .then((res) => res.json())
    .then((members) => {
      members.forEach((member) => renderMembers(member));
    });
}

function renderMembers(member) {
  const li = document.createElement("li");
  li.textContent = member.name;
  li.addEventListener("click", displayMembers(member));
  membersList.appendChild(li);
}

function displayMembers(member) {
  memberName.textContent = member.name;
  memberImage.src = member.image;
  memberImage.alt = member.name;
  memberAge.textContent = member.age;
  bloodType.textContent = member.bloodType;
  experience.textContent = member.runningExperience;
  fiveKmPr.textContent = member.fiveKmPR;
  races.textContent = member.races;
  review.textContent = member.review;
}

fetchFounder();
fetchTrainers();
fetchMembers();

displayOnClick(MembersBtn, members);
displayOnClick(signUp, form);
displayOnClick(TrainersBtn, trainers);
