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
        alert("Please enter a product name.");
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
        alert("❌ Product Not Found");
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

    document.getElementById("comparison").scrollIntoView({
        behavior: "smooth"
    });

    productTitle.innerText = "Apple iPhone 15 (128GB)";
    productDesc.innerText = "Latest Apple smartphone with A16 Bionic Chip.";
    productImage.src = "assets/images/iphone15.jpg";

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

    document.getElementById("comparison").scrollIntoView({
        behavior: "smooth"
    });

    productTitle.innerText = "Samsung Galaxy S24";
    productDesc.innerText = "Samsung flagship smartphone with Galaxy AI.";
    productImage.src = "assets/images/s24.jpg";

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

    document.getElementById("comparison").scrollIntoView({
        behavior: "smooth"
    });

    productTitle.innerText = "MacBook Air M3";
    productDesc.innerText = "Apple MacBook Air with powerful M3 Chip.";
    productImage.src = "assets/images/macbook.jpg";

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

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    },1000);

});