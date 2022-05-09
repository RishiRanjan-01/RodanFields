//navbar importing--------------------->

import {blogPageNavbar} from "../components/blog_navbar.js";
document.getElementById("blog_navbar").innerHTML = blogPageNavbar()

// footer importing ---------------->
import { footer } from "../components/footer.js";

document.getElementById("footer").innerHTML = footer();




//upper image slide part------------->
let sl1 = () =>{
    return ` <div class="upper_slide_div">
    <div class="text_slide">
        <p>DOCTOR'S NOTES</p>
        <h1>Rodan + Fields Multi-Med Therapy Approach</h1>
        <p>OUR FOUNDERS DISCUSS THE MAGIC BEHIND WHAT MAKES R+F SKIN CARE WORK.</p>
        <a href="">READ MORE</a>
    </div>
    <div class="img_slide">
        <img src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/08/06_Rodan_Fields_3333_V7_1100x1100-1024x1024.jpg" alt="">
    </div>
</div>`
}
let sl2 = () =>{
    return ` <div class="upper_slide_div">
    <div class="text_slide">
        <p>PRO TIPS</p>
        <h1>With The Right Lash Care, You Won’t Miss Your Extensions</h1>
        <p>PRO-APPROVED TIPS ON HOW TO GET LASHES SO LONG YOU WON’T BELIEVE YOUR EYES</p>
        <a href="">READ MORE</a>
    </div>
    <div class="img_slide">
        <img src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/08/280119_ROD_08_035_FINAL_1100X1100-1024x1024.jpg" alt="">
    </div>
</div>`
}

let sl3 = () =>{
    return ` <div class="upper_slide_div">
    <div class="text_slide">
        <p>SCIENCE OF SKINCARE</p>
        <h1>Why Dermatologists Recommend Niacinamide Skincare</h1>
        <p>FROM REGULATING DIGESTION TO IMPROVING SKIN, VITAMIN B3/NIACINAMIDE IS A MUST.</p>
        <a href="">READ MORE</a>
    </div>
    <div class="img_slide">
        <img src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/10/Niacinamide-Image.jpg" alt="">
    </div>
</div>`
}

let btn1 = document.getElementById("btn1")
btn1.addEventListener("click",btn1_func)
let btn2 = document.getElementById("btn2")
btn2.addEventListener("click",btn2_func)
let btn3 = document.getElementById("btn3")
btn3.addEventListener("click",btn3_func)
document.querySelector(".upper_slide_div").innerHTML = sl1()
btn1.style.backgroundColor="black"
function btn1_func(){
    document.querySelector(".upper_slide_div").innerHTML = sl1()
    btn1.style.backgroundColor="black"
    btn2.style.backgroundColor="white"
    btn3.style.backgroundColor="white"
}
function btn2_func(){
    document.querySelector(".upper_slide_div").innerHTML = sl2()
    btn1.style.backgroundColor="white"
    btn2.style.backgroundColor="black"
    btn3.style.backgroundColor="white"
}
function btn3_func(){
    document.querySelector(".upper_slide_div").innerHTML = sl3()
    btn1.style.backgroundColor="white"
    btn2.style.backgroundColor="white"
    btn3.style.backgroundColor="black"
}

//meet your mask------------>


    let maskdata = [
        {image:"https://www.rodanandfields.com/en-us/assets/blog/rechargeMask.jpg",
         a : "RECHARGE",
         p : "Detoxify with Charcoal while Mango Seed Butter, Coconut + Avocado Oil moisturize"
        },
        {image:"https://www.rodanandfields.com/en-us/assets/blog/reverseMask.jpg",
         a : "REVERSE",
         p : "Fueled with Retinal to dial up skin’s radiance instantly while it evens skin tone over time"
        },
        {image:"https://www.rodanandfields.com/en-us/assets/blog/sootheMask.jpg",
         a : "SOOTHE",
         p : "Get softer, fresher-feeling skin instantly while calming sensitivity + redness over time"
        },
        {image:"https://www.rodanandfields.com/en-us/assets/blog/redefineMask.jpg",
         a : "REDEFINE",
         p : "Smooth skin with exfoliating Jojoba Beads while improving fine lines + wrinkles over time"
        },
        {image:"https://www.rodanandfields.com/en-us/assets/blog/unblemishMask.jpg",
         a : "UNBLEMISH",
         p : "Reduce oil + shine instantly & prevent breakouts over time with acne-fighting formula"
        }
    ]

function maskData(){
    let mask_container = document.querySelector(".mask_container");
    maskdata.forEach((el)=>{
        let mask_items = document.createElement("div");
        mask_items.setAttribute("class","mask_items")

        let image = document.createElement("img");
        image.src= el.image;

        let a = document.createElement("a");
        a.innerText = el.a;

        let p = document.createElement("p");
        p.innerText = el.p;

        mask_items.append(image,a,p)
        mask_container.append(mask_items)

    })
    
}
maskData()


//Blog Categories---------------->

let blogCategory = [
      {image : "https://www.rodanandfields.com/en-us/assets/blog/doctors-notes.svg",
      a: "DOCTOR'S NOTES"},
      {image : "https://www.rodanandfields.com/en-us/assets/blog/lifestyle.svg",
      a: "LIFESTYLE"},
      {image : "https://www.rodanandfields.com/en-us/assets/blog/pro-tips.svg",
      a: "PRO TIPS"},
      {image : "https://www.rodanandfields.com/en-us/assets/blog/science-of-skincare.svg",
      a: "SCIENCE OF SKINCARE"},
      {image : "https://www.rodanandfields.com/en-us/assets/blog/skincare-guides.svg",
      a: "SKINCARE GUIDES"}
]

function blogcategory(){
    let category_container = document.querySelector(".category_container");
    blogCategory.forEach((el)=>{
        let category_items = document.createElement("div");
        category_items.setAttribute("class","category_items")

        let image = document.createElement("img");
        image.src= el.image;

        let a = document.createElement("a");
        a.innerText = el.a;

        category_items.append(image,a)
        category_container.append(category_items)

    })
}
blogcategory()
