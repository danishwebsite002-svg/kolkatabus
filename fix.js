const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const imageMap = {
  'images/main-slider/1.jpg': 'bannerimage.jpg',
  'images/resource/destination-1.jpg': 'destinations1.jpg',
  'images/resource/destination-2.jpg': 'destination2.jpg',
  'images/resource/destination-3.jpg': 'destination3.jpg',
  'images/background/19.jpg': 'secondbgimage.jpg',
  'images/resource/package-1.jpg': 'packageoneimage.jpg',
  'images/resource/package-2.jpg': 'packagetwoimage.jpg',
  'images/resource/counter.jpg': 'fourthbg.jpg',
  'images/background/1.jpg': 'videosectionbg.jpg',
  'images/resource/news-1.jpg': 'newimage1.jpg',
  'images/resource/news-2.jpg': 'guideimage2.jpg',
  'images/resource/news-3.jpg': 'guideimage3.jpg',
  'images/background/2.jpg': 'ctasectionbg.jpg',
  'images/resource/author-1.jpg': 'https://i.pravatar.cc/100?img=1',
  'images/resource/author-2.jpg': 'https://i.pravatar.cc/100?img=2',
  'images/logo.svg': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
  'images/sticky-logo.svg': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png'
};

for (const [oldPath, newPath] of Object.entries(imageMap)) {
  html = html.split(oldPath).join(newPath);
}

// Add CDNs to head
const cdns = `
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    
    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    
    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet">
`;

html = html.replace(/<!-- Stylesheet  -->\s*<link href="css\/style\.css" rel="stylesheet">/g, cdns);

// Update scripts at the bottom
const scripts = `
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>
    // Initialize Owl Carousel
    $(document).ready(function(){
        $('.sponsors-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:false,
            responsive:{
                0:{items:2},
                600:{items:3},
                1000:{items:5}
            }
        });
        $('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            items:1
        });
        $('.achivement-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots:false,
            responsive:{
                0:{items:1},
                600:{items:2},
                1000:{items:3}
            }
        });

        // Simple accordion logic
        $('.accordion-box .acc-btn').on('click', function() {
            if($(this).hasClass('active')!==true){
                $('.accordion-box .acc-btn').removeClass('active');
            }
            if ($(this).next('.acc-content').is(':visible')){
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            }else{
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);
            }
        });
    });
</script>
`;

html = html.replace(/<script src="js\/jquery\.js"><\/script>[\s\S]*?<script src="js\/script\.js"><\/script>/, scripts);

fs.writeFileSync('index.html', html);
console.log('HTML updated successfully');
