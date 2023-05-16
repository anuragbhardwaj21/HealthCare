import { navbar, footer } from "./components/components.js";

var navbarArea = document.getElementById("navbar");
navbarArea.innerHTML = navbar();

var footerArea = document.getElementById("footer");
footerArea.innerHTML = footer();

var data = [
  {
    name: "Online Consultation",
    link: "./images/stethoscope.png",
  },
  {
    name: "Hospital",
    link: "./images/hospital-building.png",
  },
  {
    name: "Medicine",
    link: "./images/syringe.png",
  },
  {
    name: "Pathology Tests",
    link: "./images/blood-test.png",
  },
  {
    name: "Nursing",
    link: "./images/nurse.png",
  },
  {
    name: "Emergency",
    link: "./images/ambulance.png",
  },
];
console.log(data);

var cardsection=document.getElementById("cardsection")
for(let i=0;i<data.length;i++){
    var card=document.createElement("div")
    card.setAttribute("id","m-b-card")

    card.innerHTML=`
    <img src="${data[i].link}" alt="">
    <p>${data[i].name}</p>
    `
    cardsection.append(card)
}