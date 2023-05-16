import {navbar,footer} from "./components/components.js"

var navbarArea=document.getElementById("navbar")
navbarArea.innerHTML=navbar()

var footerArea=document.getElementById("footer")
footerArea.innerHTML=footer()