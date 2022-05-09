import { headers } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = headers();

import { footer } from "../components/footer.js";

document.getElementById("footer").innerHTML = footer();

let arr1 = JSON.parse(localStorage.getItem("product")) || [];

let array1 = [
    {
        image:"https://www.rodanandfields.com/en-us/medias/ENFM030-Thumbnail-458x458.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ2MHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaGQ2LzE0ODgyMTk1ODk4Mzk4LmpwZ3wyYThhMjQ0NTc4YjI1ZmQ1ODY3MDE5NGMyYjk3MjA2MTRmNDQ2MzdmOGVhYzMxYTFmMDk1YmIyY2Q5NDhjMzIw",
        name:"Total RF Serum",
        description:"Energizes millions of surface skin cells by 200% to address all key signs of skin aging.",
        price:"175",
        rating:"4.5 (2998)"
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/ENHLSH01-458x458.jpg?context=bWFzdGVyfGltYWdlc3w0MDkxfGltYWdlL2pwZWd8aW1hZ2VzL2gzNS9oODgvMTM5Nzc1NDQ2ODc2NDYuanBnfDlmYTEwMTFkMjFiNzMwYjlhNjU0NTNiYjU5ZDBmMGY3ZWIzNmNiZmYwMTJhMGYzMTFkMzA1ODhkOGI1MjdlMmE",
        name:"R+F Lash Boost",
        description:"Nightly conditioning serum gives the appearance of longer, darker-looking lashes",
        price:"155",
        rating:"4.6 (7499)"
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/AAEY015-458x458.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDljLzEzOTc3NTQ0NDI1NTAyLmpwZ3xiNzQ3NjJkOWU1Y2QxOWM5ZDQ4ZGQzZDA1ZjdkNzBhZmRhMjdkYzE5MTU0MWZiZjY5MDc3NzEyMjBkM2E1YThj",
        name:"REDEFINE Multi-Function Eye Cream",
        description:"Visibly firms + improves all eye-area wrinckles to resore youthful, natural contours",
        price:"70",
        rating:"4.6 (8723)"
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2g2NS9oYjUvMTQ1MzIxNjY4MTE2NzgucG5nfGNhNTQzZTUyNmU3NTMxZjAxZTc5NThjMmQ3MzU0YzVkNTY1OTExMThjNWEyMDBiYTIwMTFhNWM1Yzk4YTk3ODI",
        name:"Active Hydration Serum",
        description:"Instantly boosts hydration levels by 200% + locks in moisture for bouncy skin",
        price:"112",
        rating:"4.8 (8322)"
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HAAGR-458x458.jpg?context=bWFzdGVyfGltYWdlc3w5MjA3fGltYWdlL2pwZWd8aW1hZ2VzL2gzZC9oMzMvMTM5Nzc1NDM5MDEyMTQuanBnfDU5YTY2OWVkYTZjODM5NzY4YTVhZmJlMGNjZDQzNDU1MzUzMWY2MmUzMzY4ZTkxMTgyMWIwYThkNjYxZGRjMzc",
        name:"REDEFINE Regimen",
        description:"Award-Winning anti-aging routine visibly lifts + firms for younger-looking skin",
        price:"220",
        rating:"4.7 (7006)"
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HUNRJ001-458x458.jpg?context=bWFzdGVyfGltYWdlc3w5ODg3fGltYWdlL2pwZWd8aW1hZ2VzL2g1ZC9oNGUvMTM5Nzc1NDM2MzkwNzAuanBnfDU5ZTJkYmVkZTg2MTRlOGU1NTg3NjkxYjVjZGYwZjBjZjY4ZTk4YTBiZTYzN2UxZmJjZTE5ZmJhM2I0ZGVhNGM",
        name:"UNBLEMISH Regimen",
        description:"Flight Adult acne, uneven skin tone + sign of aging with this potent 4-step routine",
        price:"190",
        rating:"4.5 (1006)"
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/ENBR001-458x458.jpg?context=bWFzdGVyfGltYWdlc3w3Nzc0fGltYWdlL2pwZWd8aW1hZ2VzL2g3MS9oMmQvMTM5Nzc1NDMzNzY5MjYuanBnfDMxMTEyY2E3ZDMzNTVjZDA0OGRmODE4NTk4NmNkZjcyMTQwNGM3NDMxNTRkNGEyNTI5MDI2ZTM4OWRkZmEzMzc",
        name:"Rodan + Fields Active Hydration Body ",
        description:"Breakthrough body moisturizer instantly + continuously hydrates skin",
        price:"66",
        rating:"4.9 (6866)"
    },
]
console.log(array1)

array1.forEach(({image,name,description,price,rating},index)=>{

    let box = document.getElementById("card-box");

    let div1 = document.createElement("div");
    div1.setAttribute("class","card1")

    let p1 = document.createElement("span");
    let a1 = document.createElement("a");
    a1.innerText = "Best Seller";
    p1.append(a1);

    let image1 = document.createElement("img");
    image1.src = image;

    let Title = document.createElement("p");
    Title.innerText = name;

    let  para = document.createElement("p");
    para.innerText = description;

    let price1 = document.createElement("p");
    price1.innerText = "$"+price;
    let sp2 = document.createElement("p");
    sp2.setAttribute("id","retail")
    sp2.innerText = "Retail Price";

    let ratingfDiv = document.createElement("div")
    ratingfDiv.setAttribute("class","rating")
    for(let i=0; i<5; i++){
        let sp1 = document.createElement("span");
        sp1.setAttribute("class","fa fa-star");
        ratingfDiv.append(sp1);

    }
    let rat = document.createElement("p");
    rat.innerText = rating;

    ratingfDiv.append(rat)

    let btn1 = document.createElement("button");
    btn1.addEventListener('click',()=>{
        addcart(array1[index])
    })
    btn1.innerText = "ADD TO BAG"

    div1.append(p1,image1,Title,para,price1,sp2,ratingfDiv,btn1);

    box.append(div1);
})

const scrollContainer = document.querySelector("#card-box");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

const scrollContainer1 = document.querySelector("#thirdImagebox");

scrollContainer1.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
});

let addcart = (el)=>{
    // console.log(el)
    arr1.push(el);
    localStorage.setItem("product",JSON.stringify(arr1));
}


let ImgArr = [
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/24/17897284883279424/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/85/18124584601232185/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/80/17889235427243880/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/94/17878795901249094/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/69/17869295408638069/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/35/18149372425211935/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/30/17928229432858630/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/58/18145885435212058/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/13/17938930987707113/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/26/17937476044732026/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/21/17918148008057821/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/63/18192350263192663/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/63/17936354605688863/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/21/18173775787084721/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/21/18173775787084721/low_resolution.jpg"
    },
    {
        url:"https://cdn-yotpo-images-production.yotpo.com/instagram/51/17914183256051851/low_resolution.jpg"
    },
]

ImgArr.forEach(({url})=>{
    let box = document.getElementById("slideImagebox");

    let div = document.createElement("div");
    div.setAttribute("class","item");

    div.style.backgroundImage = "url(" + url + ")";

    let div1 = document.createElement("div");
    div1.setAttribute("id","hoverContent")

    let icon = document.createElement("i");
    icon.setAttribute("class","fa-brands fa-instagram")

    let btn = document.createElement("button");
    btn.innerText = "Shop Now"

    div1.append(icon,btn)
    div.append(div1)

    box.append(div);
})

let SearchFun = (e)=>{
    if(e.key == "Enter"){
        let query_search = document.getElementById("query").value
        // console.log(query_search)
        localStorage.setItem("search_val",query_search);
        window.location.href="search.html"
    }
    
}

document.getElementById("query").addEventListener("keydown",SearchFun)

let MyFun = ()=>{
    window.location.href = "shop_specialoffer10.html"
}


document.getElementById("shop-now-btn").addEventListener("click",MyFun)



let login = async () =>{
    let user = {
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }
    user = JSON.stringify(user);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:"POST",
        body:user,
        headers:{
            "Content-Type":"application/json"
        }
    })

    let data = await res.json()
    console.log(data)
    

}

document.getElementById("submit").addEventListener("click",login)