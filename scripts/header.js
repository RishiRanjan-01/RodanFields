
// Show Search box function start here

let Searchbox = document.getElementById("searchDiv")
Searchbox.style.display = "none"

let login_box = document.getElementById("login-box");
login_box.style.display = "none";

let language_box = document.getElementById("language");
language_box.style.display = "none"

let cart_box = document.getElementById("cart-box");
cart_box.style.display = "none"


let ShowSearchFun = ()=>{
    let Searchbox = document.getElementById("searchDiv")

    if(Searchbox.style.display == "none"){
        Searchbox.style.display = "block"
    }else{
        if(Searchbox.style.display = "block"){
            Searchbox.style.display == "none"
        }
    }
}

let RemoveSearch = ()=>{
    console.log("hii")
    let Searchbox = document.getElementById("searchDiv")

    if(Searchbox.style.display == "block"){
        Searchbox.style.display = "none"
    }
    else{
        if(Searchbox.style.display == "block"){
            Searchbox.style.display = "none"
        }
    }

}

document.getElementById("search").addEventListener("click",ShowSearchFun)
document.getElementById("Cross-button").addEventListener("click",RemoveSearch)

// Show Search box function ends here

// Login Box Show Function 

let ShowSigninBox = ()=>{
    console.log("hii")
    if(login_box.style.display=="none"){
        login_box.style.display="block"
    }else{
        if(login_box.style.display=="block"){
            login_box.style.display="none"
        }
    }
}
// window.onclick = function(event){
//     if (event.target == login_box){
//         login_box.style.display="none"
//     }
// }

document.getElementById("signinbox").addEventListener("click",ShowSigninBox)

// Login box show function ends here

// Language Function to Show Language box

let ShowLangFun = ()=>{

    if(language_box.style.display = "none"){
        language_box.style.display = "block";
    } 
}

let RemoveLangFun = ()=>{
    console.log("hii")
    if(language_box.style.display = "block"){
        language_box.style.display = "none";
    }
}

document.getElementById("lang-cross").addEventListener("click",RemoveLangFun)
document.getElementById("lang").addEventListener("click",ShowLangFun)

// Language Function ends Here

//   cart box show function

let cartBoxShow = ()=>{
    window.location.href = "cart/bag.html"
    if(cart_box.style.display == "none"){
        cart_box.style.display = "block"
    }

}
let cartBoxRemove = ()=>{
    if(cart_box.style.display = "block"){
        cart_box.style.display = "none"
    }
}


document.getElementById("cart").addEventListener("click",cartBoxShow)
document.getElementById("cross-icon").addEventListener("click",cartBoxRemove)