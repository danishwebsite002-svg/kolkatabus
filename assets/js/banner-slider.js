(function($) {
    "use strict";
    
    $(document).ready(function() {
        if ($('.custom-hero-swiper').length > 0) {
            
            // Initialize Swiper
            var heroSwiper = new Swiper('.custom-hero-swiper', {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.custom-hero-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        stretch: 0
                    },
                    768: {
                        slidesPerView: 2,
                        stretch: 80
                    }
                }
            });

            var activeBgIndex = 1;

            // Handle Slide Change Event
            heroSwiper.on('slideChange', function () {
                var activeSlide = heroSwiper.slides[heroSwiper.activeIndex];
                var $activeSlide = $(activeSlide);
                
                var newBg = $activeSlide.attr('data-bg');
                var newTitle = $activeSlide.attr('data-title');
                var newDesc = $activeSlide.attr('data-desc');
                
                // Update Background Image via crossfade
                if (newBg) {
                    var nextBgIndex = activeBgIndex === 1 ? 2 : 1;
                    $('.custom-hero-bg-' + nextBgIndex).css('background-image', 'url(' + newBg + ')');
                    $('.custom-hero-bg-' + nextBgIndex).css('opacity', 1);
                    $('.custom-hero-bg-' + activeBgIndex).css('opacity', 0);
                    activeBgIndex = nextBgIndex;
                }
                
                // Update Text Content with subtle fade and translate effect
                var $titleEl = $('.hero-dynamic-title');
                var $descEl = $('.hero-dynamic-desc');
                
                $titleEl.css({'opacity': 0, 'transform': 'translateY(20px)'});
                $descEl.css({'opacity': 0, 'transform': 'translateY(20px)'});
                
                setTimeout(function() {
                    if (newTitle) $titleEl.text(newTitle);
                    if (newDesc) $descEl.text(newDesc);
                    
                    $titleEl.css({'opacity': 1, 'transform': 'translateY(0)', 'transition': 'all 0.6s ease'});
                    $descEl.css({'opacity': 1, 'transform': 'translateY(0)', 'transition': 'all 0.6s ease 0.1s'});
                }, 400); // Wait for opacity to reach 0 before changing text
            });

            // Trigger once on load just to be sure
            setTimeout(function() {
                var activeSlide = heroSwiper.slides[heroSwiper.activeIndex];
                if(activeSlide) {
                    var newBg = $(activeSlide).attr('data-bg');
                    if (newBg) {
                         $('.custom-hero-bg-1').css('background-image', 'url(' + newBg + ')').css('opacity', 1);
                         $('.custom-hero-bg-2').css('opacity', 0);
                         
                         var $titleEl = $('.hero-dynamic-title');
                         var $descEl = $('.hero-dynamic-desc');
                         $titleEl.css({'opacity': 1, 'transform': 'translateY(0)', 'transition': 'all 0.6s ease'});
                         $descEl.css({'opacity': 1, 'transform': 'translateY(0)', 'transition': 'all 0.6s ease 0.1s'});
                    }
                }
            }, 100);
        }
    });

})(jQuery);
