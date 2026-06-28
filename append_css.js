const fs = require('fs');

const css = `
/* ============================================= 
   NEW Testimonial Section Styles 
============================================= */
.testimonial-section-new {
  background-color: #f8f9fa;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.section-title-new {
  font-size: 44px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
}

.section-title-new .subtitle {
  color: var(--primary-color);
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 10px;
}

.testimonial-swiper {
  padding-bottom: 50px;
  margin-top: 50px;
}

.testimonial-card-new {
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin: 15px;
}

.testimonial-card-new:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.testimonial-card-new .quote-icon {
  color: var(--primary-color);
  font-size: 50px;
  opacity: 0.1;
  position: absolute;
  top: 30px;
  right: 30px;
}

.testi-ratting-new ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.testi-ratting-new ul li {
  display: inline-block;
  color: #FFD700;
  font-size: 14px;
  margin-right: 2px;
}

.testi-title-new {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1a1a1a;
  margin-top: 15px;
}

.testi-desc-new {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 30px;
}

.testi-author-new {
  display: flex;
  align-items: center;
  gap: 15px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.testi-author-new img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.testi-author-new h4 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
}

.testi-author-new span {
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 500;
}

.testimonial-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: var(--primary-color);
  opacity: 0.5;
}

.testimonial-pagination .swiper-pagination-bullet-active {
  opacity: 1;
  width: 24px;
  border-radius: 6px;
}
`;

fs.appendFileSync('assets/css/style.css', css);
console.log('CSS appended');
