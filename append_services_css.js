const fs = require('fs');

const css = `
/* ============================================= 
   Premium Services Grid Styles 
============================================= */
.premium-services-row {
  margin-top: 50px;
}

.premium-service-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 480px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: #000;
  cursor: pointer;
}

.premium-service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 45px rgba(0,0,0,0.2);
}

.service-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.premium-service-card:hover .service-bg {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 100%);
  transition: opacity 0.4s ease;
  z-index: 1;
}

.premium-service-card:hover .service-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.95) 100%);
}

.service-content {
  position: relative;
  z-index: 2;
  padding: 35px 25px;
  width: 100%;
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.premium-service-card:hover .service-content {
  transform: translateY(0);
}

.service-category {
  color: var(--primary-color, #0CB2DB);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.service-title {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.3;
}

.service-price {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}

.service-price span {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.8;
}

.service-meta {
  border-top: 1px solid rgba(255,255,255,0.2);
  padding-top: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-meta span {
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.9;
}

.service-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.service-btn i {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.service-btn:hover {
  color: var(--primary-color, #0CB2DB);
}

.service-btn:hover i {
  transform: translateX(5px);
}
`;

fs.appendFileSync('assets/css/style.css', css);
console.log('CSS appended');
