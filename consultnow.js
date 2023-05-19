import {navbar, footer} from "./components/components.js"

var consultNavbar = document.getElementById("navbar")
consultNavbar.innerHTML=navbar()

var consultFooter = document.getElementById("footer")
consultFooter.innerHTML=footer()