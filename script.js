const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});




// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }

    });

});





const reveals = document.querySelectorAll(".reveal");

function revealCards(){

    reveals.forEach(card => {

        const windowHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < windowHeight - 100){
            card.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealCards);
revealCards();





const items = document.querySelectorAll(
'.work-step, .works-left, .phone-container'
);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold:0.2
});

items.forEach(item=>{
    item.classList.add('hidden');
    observer.observe(item);
});



const subscriptionItems = document.querySelectorAll(
'.benefit-card, .subscription-card'
);

const subObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.2});

subscriptionItems.forEach(item=>{
    item.classList.add('hidden');
    subObserver.observe(item);
});








document.querySelectorAll('.bento-card').forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-10px) scale(1.02)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0) scale(1)';

    });

});



const storyElements = document.querySelectorAll(
'.story-photo-area, .story-details, .highlight-box'
);

const storyObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-story');
        }
    });
},{threshold:0.2});

storyElements.forEach(el=>{
    el.classList.add('hidden-story');
    storyObserver.observe(el);
});





// Pause animation when tab inactive

document.addEventListener("visibilitychange", () => {

    const track =
    document.querySelector(".review-track");

    if(document.hidden){

        track.style.animationPlayState =
        "paused";

    }else{

        track.style.animationPlayState =
        "running";
    }

});




const backTopBtn =
document.getElementById("backTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backTopBtn.classList.add("show");

    }else{

        backTopBtn.classList.remove("show");
    }

});

backTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

