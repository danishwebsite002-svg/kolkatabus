const fs = require('fs');
const css = `
/* Special Packages */
.package-one {
    padding: 100px 0;
}
.package-one_more {
    color: var(--primary-color);
    font-weight: 600;
    text-transform: uppercase;
}
.package-block_one-inner, .package-block_two-inner {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
}
.package-block_one-image img, .package-block_two-image img {
    width: 100%;
    object-fit: cover;
}
.package-block_one-image img {
    height: 400px;
}
.package-block_two-image img {
    height: 300px;
}
.package-block_one-number, .package-block_two-number {
    position: absolute;
    top: 20px;
    right: 20px;
    font-family: var(--font-heading);
    font-size: 40px;
    color: rgba(255,255,255,0.8);
    font-weight: 700;
}
.package-block_one-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 30px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}
.package-block_one-title a {
    color: var(--white);
    font-size: 24px;
}
.package-block_two-content {
    background: var(--white);
    padding: 40px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    transform: translateY(-20px);
    margin: 0 20px;
    position: relative;
    z-index: 2;
}
.package-block_two-title a {
    font-size: 36px;
    line-height: 1.2;
}
.package-block_two-box {
    max-width: 400px;
}

/* Counter One */
.counter-one {
    padding: 100px 0;
}
.counter-image {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}
.counter-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
.counter-image::before {
    content: '';
    position: absolute;
    top:0; left:0; width:100%; height:100%;
    background: rgba(0,0,0,0.6);
}
.counter-one_content {
    position: absolute;
    top: 50px;
    left: 50px;
    color: var(--white);
    max-width: 500px;
}
.counter-one_title {
    color: var(--white);
    font-size: 36px;
    margin-bottom: 20px;
}
.counter-one_lower-content {
    position: absolute;
    bottom: 50px;
    left: 50px;
    right: 50px;
    color: var(--white);
}
.counter-text_two {
    font-size: 18px;
    margin-bottom: 30px;
}
.counter-one_counter {
    font-family: var(--font-heading);
    font-size: 48px;
    font-weight: 700;
    color: var(--primary-color);
}
.counter-one_counter-text {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Testimonial One */
.testimonial-one {
    padding: 100px 0;
    background: #f8f9fa;
}
.testimonial-block_one-inner {
    background: var(--white);
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}
.testimonial-block_one-text {
    font-size: 16px;
    font-style: italic;
    margin-bottom: 30px;
}
.testimonial-block_one-author {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: var(--heading-color);
}
.testimonial-block_one-author_image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
}
.testimonial-block_one-author_image img {
    width: 100%;
}
.testimonial-block_one-author span {
    display: block;
    font-size: 12px;
    color: var(--text-color);
    font-weight: 400;
}

/* Video One */
.video-one_box {
    position: relative;
    height: 600px;
}
.video-one_box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.video-one_box .play {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 80px; height: 80px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 30px;
}

/* Achivements One */
.achivements-one {
    padding: 100px 0;
}
.achivement-block_one-inner {
    text-align: center;
    padding: 40px;
    background: var(--primary-color);
    color: var(--white);
    border-radius: 10px;
}
.achivement-block_one-icon {
    font-size: 50px;
    margin-bottom: 20px;
}
.achivement-block_one-title {
    color: var(--white);
    margin-bottom: 15px;
}

/* Faq One */
.faq-one {
    padding: 100px 0;
    background-size: cover;
    background-position: center;
    position: relative;
}
.faq-one::before {
    content: '';
    position: absolute;
    top:0; left:0; width:100%; height:100%;
    background: rgba(255,255,255,0.9);
}
.faq-one .auto-container {
    position: relative;
    z-index: 2;
}
.accordion-box {
    list-style: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
}
.accordion-box .block {
    margin-bottom: 15px;
    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.accordion-box .acc-btn {
    padding: 20px;
    cursor: pointer;
    font-weight: 600;
    color: var(--heading-color);
    display: flex;
    align-items: center;
}
.accordion-box .acc-btn .icon-outer {
    margin-right: 15px;
    color: var(--primary-color);
}
.accordion-box .acc-content {
    display: none;
    padding: 0 20px 20px 50px;
}
.accordion-box .acc-content.current {
    display: block;
}

/* News One */
.news-one {
    padding: 100px 0;
}
.news-block_one-inner {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 30px;
}
.news-block_one-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}
.column.col-lg-7 .news-block_one-image img {
    height: 400px;
}
.news-block_one-content {
    padding: 25px 0;
}
.news-block_one-title {
    color: var(--primary-color);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
}
.news-block_one-heading a {
    color: var(--heading-color);
    font-size: 24px;
}
.news-block_one-author {
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--heading-color);
}
.news-block_one-author_image {
    width: 40px; height: 40px;
    border-radius: 50%; overflow: hidden;
    margin-right: 15px;
}
.news-block_one-author_image img {
    width: 100%; height: 100%;
}
.news-block_one-author span {
    color: var(--text-color);
    font-weight: 400;
    margin-left: auto;
}

/* CTA One */
.cta-one {
    padding: 150px 0;
    text-align: center;
    color: var(--white);
    background-size: cover;
    background-position: center;
    position: relative;
}
.cta-one::before {
    content: '';
    position: absolute;
    top:0; left:0; width:100%; height:100%;
    background: rgba(0,0,0,0.5);
}
.cta-one_title-box {
    position: relative;
    z-index: 2;
    max-width: 700px;
    margin: 0 auto;
}
.cta-one_heading {
    font-size: 48px;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 20px;
}
.subscribe-box {
    margin-top: 40px;
}
.subscribe-box .form-group {
    display: flex;
    background: var(--white);
    padding: 10px;
    border-radius: 5px;
}
.subscribe-box input {
    flex: 1;
    border: none;
    padding: 0 20px;
    outline: none;
}
.subscribe-box .submit-btn {
    padding: 15px 40px;
}

/* Footer */
.main-footer {
    background: #111;
    color: #999;
    padding: 80px 0 30px;
}
.main-footer .upper-box {
    border-bottom: 1px solid #333;
    padding-bottom: 40px;
    margin-bottom: 40px;
}
.footer-nav {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 30px;
    margin: 0;
}
.footer-nav a {
    color: var(--white);
    text-transform: uppercase;
    font-size: 14px;
}
.footer-social_box a {
    color: var(--white);
    font-size: 20px;
    margin-left: 15px;
}
.footer-bottom_nav {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
    margin: 0;
}
`;
fs.appendFileSync('css/style.css', css);
console.log('CSS appended successfully');
