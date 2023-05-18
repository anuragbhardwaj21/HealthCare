// import  {navbar,footer}  from "./components/components.js";
// document.getElementById('navbar').innerHTML = navbar()

var API = "https://chiragajmeraapi.onrender.com/api/products";
const fetch_api = async (api)=>{
  try {
    let resp = await fetch(api);
    let res = await resp.json()
    document.getElementById("loading").style.display = "none"
   console.log(res)
   display(res)
  } catch (error) {
    console.log(error)
  }
}
fetch_api(API)
function display(e)
{
  let arr = e.mydata;
  
  arr.forEach(ele => {
    let div1 = document.createElement('div')
    div1.setAttribute('class','box')
    let image = document.createElement('img')
    image.setAttribute('src',ele.img)

    let name = document.createElement('p')
    name.textContent = ele.name;

    let brand = document.createElement('p')
    brand.textContent = ele.brand;
    
    let mrp = document.createElement('p')
    mrp.textContent = `₹${ele.mrp}`;

    let addbtn = document.createElement('button')
    addbtn.textContent = "ADD TO CART"
    addbtn.addEventListener("click",function(){
      tocart(ele)
    })

    div1.append(image,name,brand,mrp,addbtn)
    document.getElementById("data_box").appendChild(div1)

    div1.addEventListener('click',function(){
      singlepro(ele)
    })
  });
}
var single_product = [];
function singlepro(i) {
  single_product.push(i);
  localStorage.setItem("single_prod", JSON.stringify(single_product));
  window.location.href = "singleProduct.html";
}

function sortbypric(){
  console.log("lsdjfl")
  
}
function sortbypric() {
  console.log(document.getElementById("standard-select2").value) 
     
}