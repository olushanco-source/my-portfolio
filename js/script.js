const text = "I'M A FULL STACK DEVELOPER";
const typingElement = document.querySelector(".typing");

let index = 0;
let isDeleting = false;

function typeEffect(){
    if(!isDeleting && index < text.length){
        typingElement.textContent = text.substring(0, index);
        index++;
    }else if (isDeleting && index >= 0){
        typingElement.textContent = text.substring(0, index);
        index--;
    }

    if (index === text.length) {
        typingElement.textContent = text;
        isDeleting = true;
        setTimeout(typeEffect, 1500)
        return;
    } else if (index === 0 && isDeleting){
        isDeleting = false;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);

    
}
typeEffect();


const menuBar = document.querySelector(".menu-bar");
const navBar = document.querySelector(".nav-list");

menuBar.addEventListener("click", () => {
    const currentDisplay = window.getComputedStyle(navBar).display;

    if (currentDisplay === "none"){
        navBar.style.display = "block";
    } else {
        navBar.style.display = "none";
    }
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  Swal.fire({
    title: "Message Sent!",
    text: "Your message has been sent successfully.",
    icon: "success",
    confirmButtonText: "OK"
  });

  form.reset(); 
});




// Animation on scroll
    // AOS.init({
    //     duration: 2000
    // });