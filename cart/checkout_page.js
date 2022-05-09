
let item = JSON.parse(localStorage.getItem("item"));
console.log(item)
item.forEach((el)=>{
    let box = document.getElementById("product-box");

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.api_featured_image

    let div1 = document.createElement("div");
    
    let name = document.createElement("p");
    name.innerText = el.name;

    let qty = document.createElement("p");
    qty.innerText ="QTY : "+ 1;

    div1.append(name,qty);

    let price = document.createElement("p");
    price.innerText ="$  "+ el.price

    div.append(img,div1,price)

    box.append(div)
})
let total = item.reduce((sum,el)=>{
    return sum+ Number(el.price);
},0)
document.getElementById("subtotal").innerText = total;
total = total+18.49+5.95;
let a = total.toFixed(2)
// console.log(total)
document.getElementById("total_price").innerText = a;

let paynow= ()=>{
    alert("THANK YOU! Your Purchase Is Done!")
    window.location.href = "../index.html"
}


document.getElementById("pay").addEventListener("click",paynow)