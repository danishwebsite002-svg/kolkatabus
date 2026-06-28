const fs = require('fs');

const css = `
/* ============================================= 
   New Elegant Footer Styles 
============================================= */
.new-elegant-footer {
  background-color: #111111;
  color: #a0a0a0;
  font-family: 'Inter', sans-serif;
  padding-top: 80px;
}

.footer-top-area {
  padding-bottom: 60px;
}

.footer-widget .widget-title {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-widget .widget-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: #0cb2db;
}

/* Brand Widget */
.brand-widget .footer-logo {
  font-size: 28px;
  font-weight: 900;
  color: #0cb2db;
  text-decoration: none;
  letter-spacing: 1px;
  display: inline-block;
}

.brand-widget .footer-desc {
  font-size: 15px;
  line-height: 1.8;
}

.footer-social-links a {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.3s ease;
}

.footer-social-links a:hover {
  background-color: #0cb2db;
  color: #ffffff;
  transform: translateY(-3px);
}

/* Quick Links Widget */
.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links-list li {
  margin-bottom: 15px;
}

.footer-links-list li a {
  color: #a0a0a0;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.footer-links-list li a i {
  font-size: 12px;
  margin-right: 10px;
  color: #0cb2db;
  transition: all 0.3s ease;
}

.footer-links-list li a:hover {
  color: #0cb2db;
  padding-left: 5px;
}

/* Contact Widget */
.footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact-list li {
  display: flex;
  margin-bottom: 18px;
  font-size: 15px;
  line-height: 1.6;
}

.footer-contact-list li i {
  color: #0cb2db;
  font-size: 18px;
  margin-top: 4px;
  margin-right: 15px;
  width: 20px;
  text-align: center;
}

.footer-contact-list li span a {
  color: #a0a0a0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact-list li span a:hover {
  color: #0cb2db;
}

/* Newsletter Widget */
.footer-newsletter-form .input-group {
  position: relative;
  background: rgba(255,255,255,0.05);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
}

.footer-newsletter-form .form-control {
  background: transparent;
  border: none;
  color: #fff;
  padding: 15px 25px;
  height: 55px;
  box-shadow: none;
  flex: 1;
}

.footer-newsletter-form .form-control:focus {
  outline: none;
  box-shadow: none;
}

.footer-newsletter-form .subscribe-btn {
  background-color: #0cb2db;
  color: #fff;
  border: none;
  padding: 0 25px;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.footer-newsletter-form .subscribe-btn:hover {
  background-color: #099abf;
}

/* Footer Bottom Area */
.footer-bottom-area {
  background-color: #0a0a0a;
  padding: 25px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.copyright-text {
  font-size: 14px;
  color: #888888;
}

.copyright-text strong {
  color: #ffffff;
}

.footer-bottom-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  gap: 20px;
}

.footer-bottom-links li a {
  color: #888888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-bottom-links li a:hover {
  color: #0cb2db;
}
`;

fs.appendFileSync('assets/css/style.css', css);
console.log('Footer CSS appended successfully.');
