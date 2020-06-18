const GITHUB_URL = "https://api.github.com/users/mojwest";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    if (profileImage) {
      profileImage.src = data.avatar_url;
    }
    const myName = document.getElementById("my-name");
    if (myName) {
      myName.innerText = data.login;
    }
  });

// console log form
function sConsole(event) {
  event.preventDefault();
  let firstname = document.getElementById("fname");
  let lastname = document.getElementById("lname");
  let email = document.getElementById("email");
  let country = document.getElementById("country");
  let phone = document.getElementById("phone");
  let comment = document.getElementById("comment");
  console.log("first name: " + firstname.value);
  console.log("last name: " + lastname.value);
  console.log("email: " + email.value);
  console.log("country: " + country.value);
  console.log("phone: " + phone.value);
  console.log("comment: " + comment.value);
}

// flip card
const card = document.querySelector(".card");
if (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
}

// footer array
// const createdByArray = ["HTML", "CSS", "Javascript"];
// const footerLine = `This page was built using ${createdByArray[0]}, ${createdByArray[1]}, and ${createdByArray[2]}.`;
// let footer = document.getElementById("footer-page-built");
// footer.innerText = footerLine;

// footer
const footer = document.getElementById("footer-page-built");
const createdByArray = ["HTML", "CSS", "Javascript"];

createdByArray.forEach(function (item, index, array) {
  if (index != array.length - 1) {
    footer.innerHTML += item + ", ";
  } else footer.innerHTML += "and " + item;
});
