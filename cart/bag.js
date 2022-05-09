
// add to bag javascript

// let data = JSON.parse(localStorage.getItem("items"));

/* <div>
                   <div id="product-image">
                    <img src="https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2g2NS9oYjUvMTQ1MzIxNjY4MTE2NzgucG5nfGNhNTQzZTUyNmU3NTMxZjAxZTc5NThjMmQ3MzU0YzVkNTY1OTExMThjNWEyMDBiYTIwMTFhNWM1Yzk4YTk3ODI" alt="">
                   </div>
                   <div id="product-details-div">
                        <div id="product-title-and-quantity-div">
                            <p id="product-title">Active hydration serum</p>
                            <div id="quantity">
                                <i class="fa-solid fa-minus"></i>
                                <span id="product-quantity">1</span>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <div id="product-delete-and-price-div">
                            <i class="fa-solid fa-trash"></i>
                            <span id="price-font-css">$<span id="product-price">125</span></span>
                        </div>
                    </div>
                </div> */

// data.forEach((elem) => {
//     let main_div = document.createElement("div");
//     let product_image_div = document.createElement("div");
//     product_image_div.setAttribute("class","product-image");
//     let product_image = document.createElement("img");
//     product_image.src = elem.image;
//     product_image_div.append(product_image);

//     let product_details_div = document.createElement("div");
//     product_details_div.setAttribute("class","product-details-div");
//     let product_title_and_quantity_div = document.createElement("div");
//     product_title_and_quantity_div.setAttribute("class","product-title-and-quantity-div");
//     let p_tag = document.createElement("p");
//     p_tag.setAttribute("class","product-title");
//     p_tag.innerText = elem.name;
//     let qty = document.createElement("div");
//     qty.setAttribute("class","quantity");

//     let icon_minus = document.createElement('i');
//     icon_minus.setAttribute("class","fa-solid");
//     icon_minus.setAttribute("class","fa-minus");
//     let product_quantity = document.createElement("span");
//     product_quantity.setAttribute("class","product-quantity");
//     product_quantity.innerText = 1;
//     let icon_plus = document.createElement('i');
//     icon_plus.setAttribute("class","fa-solid");
//     icon_plus.setAttribute("class","fa-plus");
//     qty.append(icon_minus,product_quantity,icon_plus);
//     product_title_and_quantity_div.append(p_tag,qty);
//     product_details_div.append(product_title_and_quantity_div);

//     let product_delete_and_price_div = document.createElement("div");
//     product_delete_and_price_div.setAttribute("class","product-delete-and-price-div");
//     let icon_trash = document.createElement('i');
//     icon_trash.setAttribute("class","fa-solid");
//     icon_trash.setAttribute("class","fa-trash");
//     let price_font_css = document.createElement("span");
//     price_font_css.setAttribute("class","price-font-css");
//     price_font_css.innerText = '$';
//     let product_price = document.createElement("span");
//     product_price.setAttribute("class","product-price");
//     product_price.innerText = elem.price;
//     price_font_css.append(product_price);
//     product_delete_and_price_div.append(icon_trash,price_font_css);

//     product_details_div.append(product_delete_and_price_div);
//     main_div.append(product_image_div,product_details_div);

//     document.getElementById("display-products").append(main_div);
// });


// Increament and Decrement
// let increment = document.getElementsByClassName(".fa-plus");
// let decrement = document.getElementsByClassName(".fa-minus");
// let Qty = document.querySelectorAll(".product-quantity");
// let Estimated_total = document.getElementById("estimated-total");
// let Product_price = document.querySelectorAll(".product-price");
// let counter = 1;
// decrement.addEventListener("click",()=>{
//     counter--;
//     if(counter == 0){
//         alert("Product can't be Zero!");
//         return;
//     }
//     Qty.innerHTML = counter;
//     Estimated_total.innerText = (Number(Product_price.innerText)*counter)+".00";
// });
// increment.addEventListener("click",()=>{
//     counter++;
//     if(counter>5){
//         alert("You are allowed to buy maximum 5 quantity!");
//         return;
//     }
//     Qty.innerHTML = counter;
//     Estimated_total.innerText = (Number(Product_price.innerText)*counter)+ ".00";
// });



