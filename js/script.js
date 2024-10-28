// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// 初始化粒子背景
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
        "color": { "value": "#ffffff" },
        "opacity": { "value": 0.5, "anim": { "enable": false }},
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" }}},
    "retina_detect": true
});

// 滚动事件监听器
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-animate');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        // 检查元素是否进入视口
        if (elementTop < windowHeight - 100) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
});