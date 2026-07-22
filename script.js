// Popup animation on clicking links

const links=document.querySelectorAll(".popup-link");

links.forEach(link=>{

link.addEventListener("click",function(){

this.classList.add("popup");

setTimeout(()=>{

this.classList.remove("popup");

},250);

});

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {

    dropdown.classList.toggle("show");

});

// Close menu when clicking outside

window.addEventListener("click", function(e){

    if(!menuBtn.contains(e.target) && !dropdown.contains(e.target)){

        dropdown.classList.remove("show");

    }

});