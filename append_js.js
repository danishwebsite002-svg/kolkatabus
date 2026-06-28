const fs = require('fs');

const jsCode = `
    // Custom Testimonial Swiper Initialization
    if($('.testimonial-swiper').length) {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonial-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        });
    }
`;

fs.appendFileSync('assets/js/main.js', jsCode);
console.log('JS Appended');
