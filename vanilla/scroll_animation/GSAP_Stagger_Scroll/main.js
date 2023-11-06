const boxes = document.querySelectorAll('.box');

const config = {
    threshold: 0.5,
};

const t1 = gsap.timeline();

let observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let overlap = '-=0.3';

            if (!t1.isActive()) {
                overlap = '+=0';
            }

            t1.to(entry.target, { duration: 0.5, opacity: 1 }, overlap);
            self.unobserve(entry.target);
        }
    });
}, config);

boxes.forEach(box => {
    observer.observe(box);
});
