// map
let mapIndex = 0;
let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let myMap = document.getElementById("my-map");
let mapArray = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48292.419970910465!2d-73.97152943515711!3d40.84385832631497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f69c56373bcb%3A0x1e7573510a4a0504!2sWashington%20Heights%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sil!4v1590003888696!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96519.77679096194!2d-74.08242735093788!3d40.888483653961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f0ba1dffe277%3A0x6742b8c0c98d33cf!2sTeaneck%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sil!4v1590003933172!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27168.213120437762!2d35.097772913853944!3d31.660490902483478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502dc27c3c10157%3A0x986c0b293ebf3a76!2sAlon%20Shvut!5e0!3m2!1sen!2sil!4v1590004441373!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48292.419970910465!2d-73.97152943515711!3d40.84385832631497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f69c56373bcb%3A0x1e7573510a4a0504!2sWashington%20Heights%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sil!4v1590003888696!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96768.07861242424!2d-74.00911886765371!3d40.71796241721213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c75b6a8b821%3A0xf3bc87276691ebdc!2sBedford-Stuyvesant%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sil!4v1590004525489!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217027.5412506226!2d35.03527137217639!3d31.796241906660175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1590004577071!5m2!1sen!2sil",
];

let heights = { name: "Washington", ageGap: "0-8", src: "src1" };
let teaneck = { name: "Teanck", ageGap: "8-17", src: "src2" };
let alon = { name: "Alon Shvut", ageGap: "17-19", src: "src3" };

let cities = [heights, teaneck, alon];

function myCities() {
  if (previousButton != null) {
    previousButton.addEventListener("click", function () {
      mapIndex--;
      myMap.src = cities[mapIndex].src;
      nextButton.disabled = false;

      if (mapIndex === 0) {
        previousButton.disabled = true;
      }
    });

    nextButton.addEventListener("click", function () {
      mapIndex++;
      myMap.src = mapArray[mapIndex];
      previousButton.disabled = false;

      if (mapArray.length === mapIndex + 1) {
        nextButton.disabled = true;
      }
    });
  }
}

myCities();

// footer
const footer = document.getElementById("footer-page-built");
const createdByArray = ["HTML", "CSS", "Javascript"];

createdByArray.forEach(function (item, index, array) {
  if (index != array.length - 1) {
    footer.innerHTML += item + ", ";
  } else footer.innerHTML += "and " + item;
});
