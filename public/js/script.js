


document.addEventListener("DOMContentLoaded", () => {


 
  /* ------------------------------
    0. Banner
  ------------------------------ */
$(document).ready(function () {
  $(".banner-text-slider").slick({
slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".banner-image",
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds per slide
    pauseOnHover: false, // Recommended for background banners
    fade: true,
    cssEase: "linear",
    speed: 800,
    draggable: true,
    dots: true,
    appendDots: $(".banner-dots"),
        lazyLoad: 'progressive',

    
  });

  $(".banner-image").slick({

    asNavFor: ".banner-text-slider",
    dots: false,
    draggable: true,
    arrows: false,
    fade: true,
    cssEase: "linear",

    speed: 800
  });
});



  /* ------------------------------
     1. Sticky Header
  ------------------------------ */
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY >= 30);
    });
  }




  /* ------------------------------
     Smooth Scroll for Nav Links
  ------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.getElementById('header')?.offsetHeight || 80;
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

//scroll button banner

const scrollBtn = document.getElementById('scroll');

if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}



//video section
const videoContainer = document.querySelector('.video-container');

if (videoContainer) {
    const video = videoContainer.querySelector('video');
    const playButton = document.querySelector('.playButton');
    const playButtonText = playButton?.querySelector('p');
    const playImg = playButton?.querySelector('img');

    if (!video || !playButton || !playButtonText || !playImg) return;

    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playImg.src = "public/images/home/pause.png";
            playButton.classList.add('is-playing');
            playButtonText.innerHTML = "Pause our video";
        } else {
            video.pause();
            playImg.src = "public/images/home/play.png";
            playButton.classList.remove('is-playing');
            playButtonText.innerHTML = "Play our video";
        }
    });

    video.addEventListener('ended', () => {
        playImg.src = "public/images/home/play.png";
        playButton.classList.remove('is-playing');
        playButtonText.innerHTML = "Play our video";
    });
}


  /* ============================================================
     2. Slick Sliders
  ============================================================ */
$(document).ready(function () {

    function initSlider(sliderSelector, counterSelector, options) {
        var $slider = $(sliderSelector);
        var $counter = $(counterSelector);

        if (!$slider.length) return;

        function formatNumber(num) {
            return (num < 10 ? '0' : '') + num;
        }

        $slider.on('init', function (event, slick) {
            $counter.text(formatNumber(1));
        });

        $slider.slick(options);

        $slider.on('afterChange', function (event, slick, currentSlide) {
            $counter.text(formatNumber(currentSlide + 1));
        });
    }

    // Solutions slider
    initSlider('.solutions-slider-init', '.solutions .slick-count', {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        dots: false,
                arrows:true,

        prevArrow: $('.solutions .prev'),
        nextArrow: $('.solutions .next'),
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // Services slider
    if ($('.services-slider').length) {
        $('.services-slider').slick({
            slidesToShow: 3,
            slidesToScroll:2,
            autoplay: true,
            infinite: true,
            dots: true,
            variableWidth: true,
            appendDots: $('.services-dots'),
            arrows: true,
            prevArrow: $('.services-prev'),
            nextArrow: $('.services-next'),
            responsive: [
                { breakpoint: 992, settings: { slidesToShow: 2,  slidesToScroll:2, } },
                { breakpoint: 576, settings: { slidesToShow: 1,  slidesToScroll:1, } }
            ]
        });
    }

    // Our Works slider
    if ($('.works-slider').length) {
        $('.works-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            infinite: true,
            dots: true,
            appendDots: $('.works-dots'),
            arrows: true,
            prevArrow: $('.works-prev'),
            nextArrow: $('.works-next'),
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3 } },
                { breakpoint: 992, settings: { slidesToShow: 2 } },
                { breakpoint: 576, settings: { slidesToShow: 1 } }
            ]
        });
    }





});









  /* ============================================================
     4. Equal Height Utility
  ============================================================ */

  const setEqualHeightFor = (selector) => {
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    let max = 0;
    items.forEach((el) => {
      el.style.height = "auto";
      if (el.offsetHeight > max) max = el.offsetHeight;
    });
    items.forEach((el) => {
      el.style.height = `${max}px`;
    });
  };

  const equalHeightTargets = [
    ".product-card .product-info",
    // ".review-card",
    ".service-card"
  ];

  window.addEventListener("load", () => {
    setTimeout(() => {
      equalHeightTargets.forEach(setEqualHeightFor);
    }, 300);
  });

  window.addEventListener("resize", () => {
    equalHeightTargets.forEach(setEqualHeightFor);
  });



  /* ============================================================
     5. Lazy Loading for Images
  ============================================================ */

  const lazyImages = document.querySelectorAll("img[data-src][loading='lazy']");
  if (lazyImages.length) {
    const lazyObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const img = entry.target;
        img.src = img.dataset.src;
        if (img.dataset.alt) img.alt = img.dataset.alt;
        img.removeAttribute("data-src");
        img.removeAttribute("loading");
        obs.unobserve(img);
      });
    });

    lazyImages.forEach((img) => lazyObserver.observe(img));
  }






  });

 













// ==========================contry dorp down=============================

function initializePhoneInput(selector) {	
  const shippingFormWrapper = document.querySelector(selector + ' .phone_number');	
  if (shippingFormWrapper !== null && typeof window.intlTelInput === 'function') {	
      const phoneInput = window.intlTelInput(shippingFormWrapper, {	
          preferredCountries: ["ae", "sa", "kw", "bh", "qa","om"],	
          excludeCountries: ["ru", "cu", "sy", "ir", "sd", "ss", "kp", "ye", "KR", "UA"],	
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",	
      });	
      $(selector + ' .phone_number').on('blur', function () {	
          contactPhone(selector, phoneInput);	
      });	
  }	
}	

function contactPhone(selector, phoneInput) {	
  let phoneNumber = phoneInput.getNumber(); // Get full international number
  
  if (phoneNumber.startsWith('+')) {
      let countryCode = phoneInput.getSelectedCountryData().dialCode; // Get country code only
      let localNumber = phoneNumber.replace('+' + countryCode, ''); // Remove country code from full number
      phoneNumber = `+${countryCode}-${localNumber}`; // Add separator
  }

  $(selector + ' .phone_number').val(phoneNumber);	
}

	
initializePhoneInput("#siteEnquiryForm");	
initializePhoneInput("#contactForm");	
initializePhoneInput("#contactPageForm");	
initializePhoneInput("#careerForm");	
initializePhoneInput("#productEnquiryForm");	



//Product Detail Image sldier

$(document).ready(function () {
  $(".product-image-slider-init").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".product-image-nav",
    autoplay: true,
    autoplaySpeed: 5000, 
    pauseOnHover: false, 
    fade: true,
    cssEase: "linear",
    speed: 800,
    draggable: true,
    dots: false,
    lazyLoad: 'progressive',
  });

  $(".product-image-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
       focusOnSelect: true,
    asNavFor: ".product-image-slider-init",
    dots: false,
    draggable: true,
    arrows: false,
     vertical: true,
  verticalSwiping: true,
    // fade: true,
    // cssEase: "linear",
    speed: 800,
              responsive: [
      {
        breakpoint: 991,
        settings: {
               vertical: false,
  verticalSwiping: false,
        },
      }
     ]
  });

 $('.other-products-slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
        appendDots: $(".other-products-dots"),
     responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
});


});



document.addEventListener("DOMContentLoaded", function () {


  /* ------------------------------
     Counter Animation on Scroll
  ------------------------------ */
  const counterSection = document.querySelector('.statistics-counter');
  const counterItems = document.querySelectorAll('.counter-value');

  if (counterSection && counterItems.length) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counterItems.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // Animation duration in ms
            const frameRate = 1000 / 60; // target 60fps
            const totalFrames = Math.round(duration / frameRate);
            let count = 0;
            
            const animate = (startTime) => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const current = Math.floor(progress * target);
                
                counter.innerText = current.toLocaleString(); // Add commas for big numbers
                
                if (progress < 1) {
                    requestAnimationFrame(() => animate(startTime));
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            animate(Date.now());
          });
          observer.unobserve(counterSection);
        }
      });
    }, { threshold: 0.2 });

    counterObserver.observe(counterSection);
  }

  /* ------------------------------
     FAQ Accordion
  ------------------------------ */
  $('.faq-trigger').on('click', function() {
    const item = $(this).closest('.faq-item');
    const isOpen = item.hasClass('active');
    
    // Close all other items
    $('.faq-item').not(item).removeClass('active')
        .find('.faq-trigger').attr('aria-expanded', 'false')
        .find('polyline').attr('points', '6 9 12 15 18 9');
    
    // Toggle current item
    if (isOpen) {
        item.removeClass('active');
        $(this).attr('aria-expanded', 'false');
        $(this).find('polyline').attr('points', '6 9 12 15 18 9');
    } else {
        item.addClass('active');
        $(this).attr('aria-expanded', 'true');
        $(this).find('polyline').attr('points', '18 15 12 9 6 15');
    }
  });

});