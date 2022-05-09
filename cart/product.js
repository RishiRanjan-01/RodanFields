
import { headers } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = headers();

import { footer } from "../components/footer.js";

document.getElementById("footer").innerHTML = footer();


// Store cart items in local storage with key: "items"
let item = JSON.parse(localStorage.getItem("item"));

console.log(item)
 cart(item)
function cart(data){
        // item.push(data);
        // localStorage.setItem("items",JSON.stringify(item));

        item.forEach((elem,index) => {

            let main_div = document.createElement("div");
            let product_image_div = document.createElement("div");
            product_image_div.setAttribute("class","product-image");
            let product_image = document.createElement("img");
            product_image.src = elem.api_featured_image;
            product_image_div.append(product_image);
        
            let product_details_div = document.createElement("div");
            product_details_div.setAttribute("class","product-details-div");
            let product_title_and_quantity_div = document.createElement("div");
            product_title_and_quantity_div.setAttribute("class","product-title-and-quantity-div");

            let p_tag = document.createElement("p");
            p_tag.setAttribute("class","product-title");
            p_tag.innerText = elem.name;
            let qty = document.createElement("div");
            qty.setAttribute("class","quantity");
        
            let icon_minus = document.createElement("ion-icon");
            icon_minus.setAttribute("name","remove-outline");
            icon_minus.setAttribute("class","minus");
            let product_quantity = document.createElement("span");
            product_quantity.setAttribute("class","product-quantity");
            product_quantity.innerText = 1;
            let icon_plus = document.createElement("ion-icon");
            icon_plus.setAttribute("name","add-outline");
            icon_plus.setAttribute("class","plus");
            qty.append(icon_minus,product_quantity,icon_plus);
            product_title_and_quantity_div.append(p_tag,qty);
            product_details_div.append(product_title_and_quantity_div);
        
            let product_delete_and_price_div = document.createElement("div");
            product_delete_and_price_div.setAttribute("class","product-delete-and-price-div");

            // Trash Icon to delete products

            let icon_trash = document.createElement("ion-icon");
            icon_trash.setAttribute("name","trash-outline");
            icon_trash.setAttribute("class","trash");

            // Price icon of individual products

            let price_font_css = document.createElement("span");
            price_font_css.setAttribute("class","price-font-css");
            price_font_css.innerText = '$';
            let product_price = document.createElement("span");
            product_price.setAttribute("class","product-price");
            product_price.innerText = Number(elem.price);
            price_font_css.append(product_price);

            product_delete_and_price_div.append(icon_trash,price_font_css);
        
            product_details_div.append(product_delete_and_price_div);
            main_div.append(product_image_div,product_details_div);

            // *********Remove function start****************
            icon_trash.addEventListener("click",function(){
                removeFunction(elem,index)
            });

            
            // *********Remove function end******************
        

            // ***************Increament and Decrement*********************
            // let increment = document.getElementsByClassName(".fa-plus");
            // let decrement = document.getElementsByClassName(".fa-minus");
            // let Qty = document.querySelectorAll(".product-quantity");
            let Estimated_total = document.getElementById("estimated-total");
            // let Product_price = document.querySelectorAll(".product-price");

             // For counting total price

            let total = data.reduce((sum,elem)=>{
                return sum+Number(elem.price);
             },0)
            Estimated_total.innerText = total
            localStorage.setItem("total_cost" ,total)
            //  console.log(total)
            let counter = 1;
            let curr_val_pr ;
            let  curr_value;
            icon_minus.addEventListener("click",()=>{
                counter--;
                product_price.innerHTML = null
                if(counter <= 0){
                    alert("Product can't be Zero!");
                    counter = 1
                    
                }
                product_quantity.innerHTML = counter;
                // product_price.innerHTML = null
                let a = Number(elem.price)*counter;
                a = a.toFixed(2)
                product_price.innerText = a;
                price_font_css.append(product_price);
                curr_value = Number(elem.price)*(counter) - Number(elem.price)*(counter-1)
                // if(curr_value == Number(elem.price)){
                //     curr_value = curr_value;
                // }else{
                //     curr_value = curr_value - Number(elem.price);
                // }

                
                    let curr_total = +localStorage.getItem("total_cost");
                    curr_total = curr_total - curr_value;
                    localStorage.setItem("total_cost" ,curr_total);
                    var y =  curr_total.toFixed(2);
                    Estimated_total.innerText = y;
                
    
            });
            icon_plus.addEventListener("click",()=>{
                counter++;
                product_price.innerHTML = null
                if(counter>5){
                    alert("You are allowed to buy maximum 5 quantity!");   
                    counter = 5;   
                }
                product_quantity.innerHTML = counter;
                // product_price.innerHTML = null
                let b = Number(elem.price)*counter;
                b = b.toFixed(2)
                product_price.innerText = b;
                price_font_css.append(product_price)
                curr_val_pr = Number(elem.price)*(counter) - Number(elem.price)*(counter-1) ;
                // if(curr_val_pr == Number(elem.price)){
                //     curr_val_pr = curr_val_pr;
                // }else{
                //     curr_val_pr = curr_val_pr - Number(elem.price);
                // }
                let curr_total = +localStorage.getItem("total_cost");

                curr_total = curr_total + curr_val_pr;
                localStorage.setItem("total_cost" ,curr_total);
                var x = curr_total.toFixed(2);
                Estimated_total.innerText = x;
                
            });

            // **********************Increament and Decrement End****************************
            document.getElementById("display-products").append(main_div);
        });

        
    }


    // Remove function
    function removeFunction(elem,index){
        console.log(elem,index)
        item.splice(index,1);
        console.log(item);
        console.log(elem);
        localStorage.setItem("item",JSON.stringify(item));
        window.location.reload();
        // document.getElementById("display-products").innerHTML = null;
        // cart(item);
    }


    let SearchFun = (e)=>{
        if(e.key == "Enter"){
            let query_search = document.getElementById("query").value
            console.log(query_search)
            localStorage.setItem("search_val",query_search);
            window.location.href="search.html"
        }
        
    }
    
    document.getElementById("query").addEventListener("keydown",SearchFun)

    let check = ()=>{

        window.location.href = "http://127.0.0.1:5501/RodanFields/cart/checkout_page.html"
    }

    document.getElementById("checkout").addEventListener("click",check)