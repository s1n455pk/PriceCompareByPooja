// ==========================
// Navbar Shadow Effect
// ==========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 30) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
    }

});

// ==========================
// Search Button Demo
// ==========================

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {

    const value = searchInput.value.toLowerCase().trim();

    if (value === "") {
        showToast("⚠ Please enter a product name.","error");
        return;
    }

    if (value.includes("iphone")) {
        iphoneBtn.click();
    }

    else if (value.includes("s24") || value.includes("samsung")) {
        s24Btn.click();
    }

    else if (value.includes("macbook")) {
        macbookBtn.click();
    }

    else {
        showToast("❌ Product Not Found","error");
    }

});

searchInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        searchBtn.click();

    }

});

// ==========================
// Elements
// ==========================

const iphoneBtn = document.getElementById("iphoneBtn");
const s24Btn = document.getElementById("s24Btn");
const macbookBtn = document.getElementById("macbookBtn");

const productTitle = document.getElementById("productTitle");
const productDesc = document.getElementById("productDesc");
const productImage = document.getElementById("productImage");

const amazonPrice = document.getElementById("amazonPrice");
const flipkartPrice = document.getElementById("flipkartPrice");
const cromaPrice = document.getElementById("cromaPrice");
const reliancePrice = document.getElementById("reliancePrice");

const amazonBtn = document.getElementById("amazonBtn");
const flipkartBtn = document.getElementById("flipkartBtn");
const cromaBtn = document.getElementById("cromaBtn");
const relianceBtn = document.getElementById("relianceBtn");

// ==========================
// iPhone
// ==========================

iphoneBtn.addEventListener("click", function () {
showToast("✅ Apple iPhone 15 Loaded","success");
    document.getElementById("comparison").scrollIntoView({
        behavior: "smooth"
    });

    productTitle.innerText = "Apple iPhone 15 (128GB)";
    productDesc.innerText = "Latest Apple smartphone with A16 Bionic Chip.";
    productImage.src = "assets/images/iphone15.png";

    amazonPrice.innerText = "₹69,999";
    flipkartPrice.innerText = "₹70,499";
    cromaPrice.innerText = "₹71,200";
    reliancePrice.innerText = "₹71,499";

    amazonBtn.onclick = function () {
        window.open("https://www.amazon.in/s?k=iphone+15","_blank");
    };

    flipkartBtn.onclick = function () {
        window.open("https://www.flipkart.com/search?q=iphone+15","_blank");
    };

    cromaBtn.onclick = function () {
        window.open("https://www.croma.com/searchB?q=iphone%2015","_blank");
    };

    relianceBtn.onclick = function () {
        window.open("https://www.reliancedigital.in/search?q=iphone%2015","_blank");
    };

});

// ==========================
// Samsung
// ==========================

s24Btn.addEventListener("click", function () {
showToast("✅ Samsung S24 Loaded","success");
    document.getElementById("comparison").scrollIntoView({
        behavior: "smooth"
    });

    productTitle.innerText = "Samsung Galaxy S24";
    productDesc.innerText = "Samsung flagship smartphone with Galaxy AI.";
    productImage.src = "assets/images/s24.png";

    amazonPrice.innerText = "₹62,999";
    flipkartPrice.innerText = "₹61,999";
    cromaPrice.innerText = "₹63,500";
    reliancePrice.innerText = "₹63,999";

    amazonBtn.onclick = function () {
        window.open("https://www.amazon.in/s?k=samsung+s24","_blank");
    };

    flipkartBtn.onclick = function () {
        window.open("https://www.flipkart.com/search?q=samsung+s24","_blank");
    };

    cromaBtn.onclick = function () {
        window.open("https://www.croma.com/searchB?q=samsung%20s24","_blank");
    };

    relianceBtn.onclick = function () {
        window.open("https://www.reliancedigital.in/search?q=samsung%20s24","_blank");
    };

});

// ==========================
// MacBook
// ==========================

macbookBtn.addEventListener("click", function () {
showToast("✅ MacBook Air M3 Loaded","success");
    document.getElementById("comparison").scrollIntoView({
        behavior: "smooth"
    });

    productTitle.innerText = "MacBook Air M3";
    productDesc.innerText = "Apple MacBook Air with powerful M3 Chip.";
    productImage.src = "assets/images/macbook.png";

    amazonPrice.innerText = "₹1,09,900";
    flipkartPrice.innerText = "₹1,10,499";
    cromaPrice.innerText = "₹1,11,900";
    reliancePrice.innerText = "₹1,10,999";

    amazonBtn.onclick = function () {
        window.open("https://www.amazon.in/s?k=macbook+air+m3","_blank");
    };

    flipkartBtn.onclick = function () {
        window.open("https://www.flipkart.com/search?q=macbook+air+m3","_blank");
    };

    cromaBtn.onclick = function () {
        window.open("https://www.croma.com/searchB?q=macbook%20air%20m3","_blank");
    };

    relianceBtn.onclick = function () {
        window.open("https://www.reliancedigital.in/search?q=macbook%20air%20m3","_blank");
    };

});

// ==========================
// Scroll To Top
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme")=="dark"){

    document.body.classList.add("dark-mode");

}
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

    }

    else{

        localStorage.setItem("theme","light");

    }

});

// ==========================
// Active Navbar on Scroll
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    },1000);

});

// ==========================
// Scroll Progress Bar
// ==========================

window.addEventListener("scroll", function () {

    const winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        scrolled + "%";

});

// ==========================
// Animated Counters
// ==========================

function animateCounter(id, target, suffix){

    let count = 0;

    const counter = document.getElementById(id);

    const interval = setInterval(function(){

        count++;

        counter.innerText = count + suffix;

        if(count >= target){

            clearInterval(interval);

            counter.innerText = target + suffix;

        }

    },50);

}

window.addEventListener("load", function(){

    animateCounter("productsCount",10,"K+");
    animateCounter("storesCount",25,"+");
    animateCounter("usersCount",50,"K+");

});

console.log("Counter Loaded");

// ==========================
// Toast Notification
// ==========================

function showToast(message,type){

    const toast = document.getElementById("toast");

    toast.innerText = message;

    toast.className = "";

    toast.classList.add("show");

    toast.classList.add(type);

    setTimeout(function(){

        toast.classList.remove("show");

    },3000);

}

// ==========================
// Search Suggestions
// ==========================

const suggestions = document.getElementById("suggestions");

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    suggestions.innerHTML = "";

    if (value === "") {
        suggestions.style.display = "none";
        return;
    }

    const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
);

    filtered.forEach(product => {

        const item = document.createElement("div");

        item.className = "suggestion-item";

        item.innerText = product.name;

        item.onclick = function () {
            searchInput.value = product.name;
            suggestions.style.display = "none";

            searchBtn.click();
        };

        suggestions.appendChild(item);

    });

    suggestions.style.display = filtered.length ? "block" : "none";

});

document.addEventListener("click", function (e) {

    if (!e.target.closest(".hero-search")) {
        suggestions.style.display = "none";
    }

});

const words = [
    "Amazon",
    "Flipkart",
    "Croma",
    "Reliance Digital"
];

const changingText = document.getElementById("changingText");

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        changingText.textContent =
        currentWord.substring(0, letterIndex);

        letterIndex++;

        if(letterIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        changingText.textContent =
        currentWord.substring(0, letterIndex);

        letterIndex--;

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

            letterIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 90 : 180);

}

typeEffect();

// ================= Hero Image Slider =================

const heroImages = [
    "assets/images/iphone15.png",
    "assets/images/s24.png",
    "assets/images/macbook.png"
];

const heroImage = document.getElementById("heroImage");

let heroIndex = 0;

setInterval(() => {

    heroImage.classList.add("change");

    setTimeout(() => {

        heroIndex++;

        if (heroIndex >= heroImages.length) {
            heroIndex = 0;
        }

        heroImage.src = heroImages[heroIndex];

        heroImage.classList.remove("change");

    }, 400);

}, 3000);

// ==========================
// Navbar Search Button
// ==========================

const navSearchBtn = document.getElementById("navSearchBtn");

navSearchBtn.addEventListener("click", () => {

    // Smooth Scroll
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {

        // Auto Focus
        document.getElementById("searchInput").focus();

        // Glow Effect
        document.querySelector(".hero-search").classList.add("active");

        // Remove Glow
        setTimeout(() => {
            document.querySelector(".hero-search").classList.remove("active");
        },2000);

        // Toast
        showToast("🔍 Start searching products...", "success");

    },600);

});