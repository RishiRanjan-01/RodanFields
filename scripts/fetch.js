

let getData = async(url)=>{

    let res = await fetch(url);

    let data = await res.json();

    return data
}


let append = (data,container)=>{
    data.forEach(({brand,image_link,name,price,rating},index)=>{
        let div = document.createElement("div");

        let title = document.createElement("h4");
        title.innerText =  name;

        let brnd = document.createElement("p");
        brnd.innerText ="Brand : "+ brand;

        let image = document.createElement("img");
        image.src = image_link;

        let price1 = document.createElement("p");
        price1.innerText = "Price : $"+ price;

        let rat = document.createElement("p");
        rat.innerText ="Rating : "+ rating;
        if(rating == null){
            rat.innerText ="Rating : "+ "1.5"
        }

        let btn = document.createElement("button");
        btn.innerText = "ADD TO BAG";
        btn.addEventListener("click", ()=>{
            AddToCart(data[index]);
        })
        let ratingfDiv = document.createElement("div")
        ratingfDiv.setAttribute("class","rating")
        for(let i=0; i<5; i++){
        let sp1 = document.createElement("span");
        sp1.setAttribute("class","fa fa-star");
        ratingfDiv.append(sp1);
        }
        ratingfDiv.append(rat)

        div.append(image,title,brnd,price1,ratingfDiv,btn);
        container.append(div)

        
    })
}


let array1 = JSON.parse(localStorage.getItem("item"))||[];
let AddToCart = (el)=>{
    // console.log(el)
    
    array1.push(el);
    localStorage.setItem("item",JSON.stringify(array1))
    alert("Than You! Your Products Added To The Bag")

    // window.location.href = "cart/bag.html";
}

export { getData, append}
