const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    root: null, 
    threshold: 0.8 
});

const elementsLeft = document.querySelectorAll(".animate-left");
const elementsRight = document.querySelectorAll(".animate-right");
const elementsUp = document.querySelectorAll(".animate-up");

elementsLeft.forEach(el => observer.observe(el));
elementsRight.forEach(el => observer.observe(el));
elementsUp.forEach(el => observer.observe(el));
