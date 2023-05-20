var getarr = JSON.parse(localStorage.getItem("cart_item")) || [];
if(getarr.length==0)
{
  window.location.href = "emptycart.html"
}

display()
function display() {
  getarr.map(function (ele, b) {
    console.log(ele.quantity)
    let name = document.createElement("h3");
    name.setAttribute("class", "name");
    name.textContent = ele.name;

    let image = document.createElement('img')
    image.setAttribute('src',ele.img)
    image.setAttribute('class','picture')



     var tquantity = document.createElement("p");
     tquantity.setAttribute("class", "quant");
     tquantity.textContent = ele.quantity;
    
    var price = document.createElement("p");
    price.setAttribute("class", "price");
    price.textContent = "₹" + ele.mrp;

    var tprice = document.createElement("p");
    tprice.setAttribute("class", "tprice");
    tprice.textContent = "₹" + (ele.mrp)*(ele.quantity);

    let btn = document.createElement("button")
    btn.textContent = "Remove"
    btn.setAttribute("class","deleted")
    btn.style.backgroundColor = "Red"
    btn.style.border = "none"
    btn.addEventListener("click",function(){
      delete_item(ele)
    })

    let div1 = document.createElement('div')
    div1.setAttribute("class","box")
    div1.append(name,price,tquantity,tprice,btn, image)

    document.getElementById("medicine").append(div1)
  });
}
function  delete_item(i)
{
  var rem = getarr.splice(i,1)
  localStorage.setItem("cart_item",JSON.stringify(getarr))
   location.reload()
}
setdata()
function setdata()
{
  let getar = JSON.parse(localStorage.getItem("cart_item")) || [];
  var totalmrp = 0;
  getar.map(function (ele, b) {
   totalmrp += (ele.mrp)*(ele.quantity);
  });
  document.getElementById("itm_total").textContent = totalmrp
  document.getElementById("ttl_dsc1").textContent = 15;
  if(totalmrp>200)
  {
    document.getElementById("shipping-fee").textContent = 0;
  }
  else{
    document.getElementById("shipping-fee").textContent = 50;
  }
  let topaid = totalmrp-15;
  document.getElementById("ttl").textContent = topaid
  document.getElementById("ttl_dsc").textContent = 15

}


document.getElementById("checkout-btn").addEventListener("click",function(){
  checkout()
})
function checkout(){
  let getar = JSON.parse(localStorage.getItem("cart_item")) || [];
  var totalmrp = 0;
  getar.map(function (ele, b) {
   totalmrp += (ele.mrp)*(ele.quantity);
  });
  localStorage.setItem("bill_amout",totalmrp-15)
  window.location.href = "paymentpage.html"
}
