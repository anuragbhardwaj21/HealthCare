import { navbar, footer, commentData, data} from "./components/components.js";

var navbarArea = document.getElementById("navbar");
navbarArea.innerHTML = navbar();

var footerArea = document.getElementById("footer");
footerArea.innerHTML = footer();



var cardsection=document.getElementById("cardsection")
console.log(commentData)

for(let i=0;i<data.length;i++){
    var card=document.createElement("div")
    card.setAttribute("id","m-b-card")

    card.innerHTML=`
    <img src="${data[i].link}" alt="">
    <p>${data[i].name}</p>
    `
    cardsection.append(card)
}

var storiesCardSection=document.getElementById("stories-card-section")
