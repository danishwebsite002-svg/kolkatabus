const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startMarker = '<div class="testimonial-sectoin tp-panel-pin-area">';
const endMarker = '<!-- End Testimonial Section -->';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const newHtml = `
    <div class="testimonial-section-new">
      <div class="auto-container">
        <div class="row">
          <div class="col-lg-12 text-center wow fadeInUp" data-wow-delay="0.3s">
            <h1 class="section-title-new">
              <span class="subtitle">Testimonials</span> <br /> Real Stories From Our Clients
            </h1>
          </div>
        </div>
        
        <div class="swiper-container testimonial-swiper wow fadeInUp" data-wow-delay="0.5s">
          <div class="swiper-wrapper">
            <!-- Slide 1 -->
            <div class="swiper-slide">
              <div class="testimonial-card-new">
                <div class="quote-icon">
                  <i class="fas fa-quote-left"></i>
                </div>
                <div class="testi-ratting-new">
                  <ul>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                  </ul>
                </div>
                <h3 class="testi-title-new">Smart guide with security!</h3>
                <p class="testi-desc-new">
                  "Globally architect client-centered systems through diverse products. Proactively formulate cross-platform schemas with focused collaboration idea-sharing. Collaboratively pursue cross-media leadership travel"
                </p>
                <div class="testi-author-new">
                  <img src="https://html.ditsolution.net/travelik/assets/images/main-home/testi-author1.png" alt="author" />
                  <div>
                    <h4>Rajesh Kumar</h4>
                    <span>Traveller</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="swiper-slide">
              <div class="testimonial-card-new">
                <div class="quote-icon">
                  <i class="fas fa-quote-left"></i>
                </div>
                <div class="testi-ratting-new">
                  <ul>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                  </ul>
                </div>
                <h3 class="testi-title-new">Impressive Supports!</h3>
                <p class="testi-desc-new">
                  "Globally architect client-centered systems through diverse products. Proactively formulate cross-platform schemas with focused collaboration idea-sharing. Collaboratively pursue cross-media leadership travel"
                </p>
                <div class="testi-author-new">
                  <img src="https://html.ditsolution.net/travelik/assets/images/main-home/testi-author2.png" alt="author" />
                  <div>
                    <h4>Rajesh Kumar</h4>
                    <span>Traveller</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="swiper-slide">
              <div class="testimonial-card-new">
                <div class="quote-icon">
                  <i class="fas fa-quote-left"></i>
                </div>
                <div class="testi-ratting-new">
                  <ul>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                  </ul>
                </div>
                <h3 class="testi-title-new">Smooth & Secure Travel</h3>
                <p class="testi-desc-new">
                  "Globally architect client-centered systems through diverse products. Proactively formulate cross-platform schemas with focused collaboration idea-sharing. Collaboratively pursue cross-media leadership travel"
                </p>
                <div class="testi-author-new">
                  <img src="https://html.ditsolution.net/travelik/assets/images/main-home/testi-author1.png" alt="author" />
                  <div>
                    <h4>Rajesh Kumar</h4>
                    <span>Traveller</span>
                  </div>
                </div>
              </div>
            </div>
            
             <!-- Slide 4 -->
            <div class="swiper-slide">
              <div class="testimonial-card-new">
                <div class="quote-icon">
                  <i class="fas fa-quote-left"></i>
                </div>
                <div class="testi-ratting-new">
                  <ul>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                  </ul>
                </div>
                <h3 class="testi-title-new">Best Travel Agency</h3>
                <p class="testi-desc-new">
                  "Globally architect client-centered systems through diverse products. Proactively formulate cross-platform schemas with focused collaboration idea-sharing. Collaboratively pursue cross-media leadership travel"
                </p>
                <div class="testi-author-new">
                  <img src="https://html.ditsolution.net/travelik/assets/images/main-home/testi-author2.png" alt="author" />
                  <div>
                    <h4>Rajesh Kumar</h4>
                    <span>Traveller</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination testimonial-pagination"></div>
        </div>
      </div>
    </div>
    `;

    const finalHtml = html.substring(0, startIndex) + newHtml + html.substring(endIndex);
    fs.writeFileSync('index.html', finalHtml);
    console.log('Testimonial section replaced successfully.');
} else {
    console.log('Could not find the markers.');
}
