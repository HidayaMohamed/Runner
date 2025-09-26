// this variables store buutons and divs 
const signUp = document.getElementById("signUp");
const form = document.getElementById("form");
const TrainersInfo = document.getElementById("TrainersInfo");
const membersInfo = document.getElementById("membersInfo");
const trainers = document.getElementById("trainers");
const members = document.getElementById("members");
const TrainersBtn = document.getElementById("TrainersBtn");
const MembersBtn = document.getElementById("MembersBtn");
const founderBtn = document.getElementById("founderBtn");
const founderDiv = document.getElementById("founderDiv");

// Creates variables that store the uls
const membersList = document.getElementById("membersList");
const trainersList = document.getElementById("trainersList");

// Creates variables for the Founder section
const founderName = document.getElementById("fullName");
const founderImage = document.getElementById("founderImage");
const founderAge = document.getElementById("founderAge");
const educationLevel = document.getElementById("educationLevel");
const description = document.getElementById("description");

// Creates variables for the trainer information
const TrainerName = document.getElementById("TrainerName");
const ImageTrainer = document.getElementById("ImageTrainer");
const trainerAge = document.getElementById("trainerAge");
const trainerEducationLevel = document.getElementById("trainerEducationLevel");
const TrainerWorkingExperience = document.getElementById(
  "TrainerWorkingExperience"
);
const trainerDescription = document.getElementById("trainerDescription");

// Creates variables to store member information
const memberName = document.getElementById("memberName");
const memberImage = document.getElementById("memberImage");
const memberAge = document.getElementById("memberAge");
const bloodType = document.getElementById("member-blood-type");
const runningExperience = document.getElementById("runningExperience");
const fiveKmPr = document.getElementById("5kmPr");
const numberOfRaces = document.getElementById("numberOfRaces");
const review = document.getElementById("review");

// Creates variables that store form input and submit button
const name = document.getElementById("name");
const image = document.getElementById("image");
const age = document.getElementById("age");
const NewBloodType = document.getElementById("blood-type");
const experience = document.getElementById("experience");
const pr = document.getElementById("pr");
const races = document.getElementById("races");
const submitBtn = document.getElementById("submit");

// Function to handle new member form submission
function addMember(e) {
  e.preventDefault(); 

  // Create a new member object from the form inputs
  const newMember = {
    name: name.value,
    image: image.value,
    age: age.value,
    bloodType: NewBloodType.value,
    runningExperience: experience.value,
    fiveKmPR: pr.value,
    races: races.value,
  };

  // POST request to db.json
  fetch("http://localhost:3000/members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMember),
  })
    .then((res) => res.json())
    .then((member) => {
      // Add the new member to the list
      renderMember(member);

      // Reset the form
      form.reset();

      // This message sidplays when the member is added
      alert(`${member.name} has been added successfully!`);
    })
    .catch((err) => console.error("Error adding member:", err));
}

// Attach submit event
form.addEventListener("submit", addMember);

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
  founderName.textContent = founder.fullName;
  founderImage.src = founder.image;
  founderAge.innerHTML = founder.age;
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
  if (
    TrainersInfo.style.display === "none" ||
    TrainersInfo.style.display === ""
  ) {
    TrainersInfo.style.display = "block";
  } else {
    TrainersInfo.style.display = "none";
  }

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
      members.forEach((member) => renderMember(member));
    });
}

function renderMember(member) {
  const li = document.createElement("li");
  li.textContent = member.name;
  li.addEventListener("click", () => {
    displayMember(member);
  });
  membersList.appendChild(li);
}

function displayMember(member) {
  if (
    membersInfo.style.display === "none" ||
    membersInfo.style.display === ""
  ) {
    membersInfo.style.display = "block";
  } else {
    membersInfo.style.display = "none";
  }

  memberName.textContent = member.name;
  memberImage.src = member.image;
  memberImage.alt = member.name;
  memberAge.textContent = member.age;
  bloodType.textContent = member.bloodType;
  runningExperience.textContent = member.runningExperience;
  fiveKmPr.textContent = member.fiveKmPR;
  numberOfRaces.textContent = member.races;
  review.textContent = member.review;
}

const searchBar = document.getElementById("searchMember");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult");


function searchMember() {
  const query = searchBar.value.trim().toLowerCase();
  if (!query) {
    searchResult.innerHTML = "<p>Please enter a name to search.</p>";
    return;
  }

  fetch("http://localhost:3000/members")
    .then((res) => res.json())
    .then((members) => {
      const foundMember = members.find(
        (member) => member.name.toLowerCase() === query
      );

      if (foundMember) {
        displayMember(foundMember); 

        
        searchResult.innerHTML = `<p>Showing results for <strong>${foundMember.name}</strong></p>`;
      } else {
        searchResult.innerHTML =`<p>No member found with the name "${query}".</p>`;
      }
    })
    .catch((err) => console.error("Error searching member:", err));
}

// Event listener
searchBtn.addEventListener("click", searchMember);


fetchFounder();
fetchTrainers();
fetchMembers();

displayOnClick(MembersBtn, members);
displayOnClick(signUp, form);
displayOnClick(TrainersBtn, trainers);
displayOnClick(founderBtn, founderDiv);