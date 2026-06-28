const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const newFooterHtml = `
    <!--==================================================-->
    <!-- Start New Elegant Footer Section -->
    <!--==================================================-->
    <footer class="new-elegant-footer">
      <div class="footer-top-area">
        <div class="container">
          <div class="row">
            
            <!-- Column 1: Brand & Social -->
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 wow fadeInUp" data-wow-delay="0.1s">
              <div class="footer-widget brand-widget">
                <a href="index.html" class="footer-logo">GITANJALI TRAVEL</a>
                <p class="footer-desc mt-4">
                  Experience the ultimate comfort and reliability with our extensive fleet of modern buses. Your perfect journey starts with us.
                </p>
                <div class="footer-social-links mt-4">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            <!-- Column 2: Quick Links -->
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 wow fadeInUp" data-wow-delay="0.2s">
              <div class="footer-widget links-widget">
                <h4 class="widget-title">Quick Links</h4>
                <ul class="footer-links-list mt-4">
                  <li><a href="about.html"><i class="fas fa-chevron-right"></i> About Us</a></li>
                  <li><a href="fleet.html"><i class="fas fa-chevron-right"></i> Our Fleet</a></li>
                  <li><a href="service.html"><i class="fas fa-chevron-right"></i> Services</a></li>
                  <li><a href="blog.html"><i class="fas fa-chevron-right"></i> Latest News</a></li>
                  <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Contact Us</a></li>
                </ul>
              </div>
            </div>

            <!-- Column 3: Contact Info -->
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0 wow fadeInUp" data-wow-delay="0.3s">
              <div class="footer-widget contact-widget">
                <h4 class="widget-title">Contact Us</h4>
                <ul class="footer-contact-list mt-4">
                  <li>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Mumbai 400001, Maharashtra, India</span>
                  </li>
                  <li>
                    <i class="fas fa-phone-alt"></i>
                    <span><a href="tel:+916291142203">+91 62911 42203</a></span>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <span><a href="mailto:Gitanjalitravels2@gmail.com">Gitanjalitravels2@gmail.com</a></span>
                  </li>
                  <li>
                    <i class="far fa-clock"></i>
                    <span>Mon - Sat: 09:00 - 18:00</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Column 4: Newsletter -->
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div class="footer-widget newsletter-widget">
                <h4 class="widget-title">Newsletter</h4>
                <p class="mt-4 mb-4">
                  Subscribe to our newsletter for the latest updates and seasonal offers.
                </p>
                <form action="#" class="footer-newsletter-form">
                  <div class="input-group">
                    <input type="email" class="form-control" placeholder="Email Address" required>
                    <button class="btn subscribe-btn" type="submit"><i class="fas fa-paper-plane"></i></button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <!-- Footer Bottom Copyright -->
      <div class="footer-bottom-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p class="copyright-text mb-0">
                &copy; 2026 <strong>Gitanjali Travel</strong>. All Rights Reserved.
              </p>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <ul class="footer-bottom-links mb-0">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--==================================================-->
    <!-- End New Elegant Footer Section -->
    <!--==================================================-->`;

// We need to replace from '<footer class="main-footer-one">' to the end of the footer block.
// The end of the block is '</footer>\n    <!--==================================================-->\n    <!-- End Kolkata Footer Area-->\n    <!--==================================================-->'
// wait, the footer tag ends at '</footer>'
const startIndex = html.indexOf('<footer class="main-footer-one">');
const endIndexStr = '</footer>';
let endIndex = html.indexOf(endIndexStr, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    // Also include the footer tags below it
    const afterFooterComments = html.indexOf('<!--==================================================-->', endIndex + endIndexStr.length + 50);
    // actually, let's just replace exactly up to </footer> and then I'll write a small regex to clean up the old comments
    
    // It's safer to just slice out the footer tag
    const oldFooterHtml = html.substring(startIndex, endIndex + endIndexStr.length);
    html = html.replace(oldFooterHtml, newFooterHtml);
    
    // Clean up old comments if they exist
    html = html.replace(/<!--==================================================-->\s*<!-- End Kolkata Footer Area-->\s*<!--==================================================-->/gi, '');
    
    fs.writeFileSync('index.html', html);
    console.log('Footer replaced successfully.');
} else {
    console.log('Failed to find footer boundaries.');
}
