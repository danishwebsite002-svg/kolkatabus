const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startMarker = '<div class="row">\n          <div class="swiper popular__slider__active">';
const endMarker = '    <!-- End  Popular Section -->';

const startIndex = html.indexOf('<div class="row">', html.indexOf('types of events we cover'));
const endIndex = html.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const newHtml = `
        <div class="row premium-services-row">
            <div class="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="premium-service-card">
                    <img src="corporate_bus.png" alt="Corporate" class="service-bg">
                    <div class="service-overlay"></div>
                    <div class="service-content">
                        <div class="service-category">Corporate</div>
                        <h2 class="service-title">Corporate Retreats</h2>
                        <div class="service-price">Custom Quotes <span>/ Daily</span></div>
                        <div class="service-meta">
                            <span><i class="bi bi-clock"></i> 05 Days</span>
                            <span><i class="bi bi-shield-check"></i> Premium Vehicles</span>
                        </div>
                        <a href="fleet.html" class="service-btn">Explore More <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.3s">
                <div class="premium-service-card">
                    <img src="wedding_bus.png" alt="Weddings" class="service-bg">
                    <div class="service-overlay"></div>
                    <div class="service-content">
                        <div class="service-category">Weddings</div>
                        <h2 class="service-title">Wedding Transportation</h2>
                        <div class="service-price">Custom Quotes <span>/ Daily</span></div>
                        <div class="service-meta">
                            <span><i class="bi bi-clock"></i> 05 Days</span>
                            <span><i class="bi bi-shield-check"></i> Premium Vehicles</span>
                        </div>
                        <a href="fleet.html" class="service-btn">Explore More <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.5s">
                <div class="premium-service-card">
                    <img src="school_bus.png" alt="Schools" class="service-bg">
                    <div class="service-overlay"></div>
                    <div class="service-content">
                        <div class="service-category">Schools</div>
                        <h2 class="service-title">School & College Tours</h2>
                        <div class="service-price">Discounted Rates <span>/ Per Trip</span></div>
                        <div class="service-meta">
                            <span><i class="bi bi-clock"></i> 05 Days</span>
                            <span><i class="bi bi-shield-check"></i> Premium Vehicles</span>
                        </div>
                        <a href="fleet.html" class="service-btn">Explore More <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.7s">
                <div class="premium-service-card">
                    <img src="airport_bus.png" alt="Transfers" class="service-bg">
                    <div class="service-overlay"></div>
                    <div class="service-content">
                        <div class="service-category">Transfers</div>
                        <h2 class="service-title">Airport Shuttles</h2>
                        <div class="service-price">Starting at $150 <span>/ Transfer</span></div>
                        <div class="service-meta">
                            <span><i class="bi bi-clock"></i> 05 Days</span>
                            <span><i class="bi bi-shield-check"></i> Premium Vehicles</span>
                        </div>
                        <a href="fleet.html" class="service-btn">Explore More <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <!--==================================================-->
    <!-- End  Popular Section -->`;
    
    // Find exact <div class="row"> start 
    const finalHtml = html.substring(0, startIndex) + newHtml + html.substring(endIndex + endMarker.length);
    fs.writeFileSync('index.html', finalHtml);
    console.log('Services section replaced successfully.');
} else {
    console.log('Could not find the markers for the services section.');
}
