


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

    // Blog slider
    initSlider('.blog-slider-init', '.blog .slick-count', {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        variableWidth: true,
        infinite: true,
        dots: false,
        arrows:true,
        prevArrow: $('.blog .prev'),
        nextArrow: $('.blog .next'),
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

    initSlider('.testimonial-slider', '.testimonial .slick-count', {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: true,
        infinite: true,
        dots: false,
        arrows:true,
        prevArrow: $('.testimonial .prev'),
        nextArrow: $('.testimonial .next'),
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // Related Blog slider
 



});





 $('.clients-slider').slick({
    slidesToShow:6,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 0,
    // speed: 6000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
        appendDots: $(".clients-dots"),
     responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
                
            
      
                
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 3,
                    },
                },
    ],
});

 $('.product-slider-init').slick({
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth:true,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
        appendDots: $(".product-dots"),

});
 $('.related-blogs-slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
     responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },    {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

});

$(document).ready(function() {
    function initServicesSlider() {
        var $slider = $('.services-loop');
        var breakpoint = 767;
        var windowWidth = $(window).width();

        if (windowWidth <= breakpoint) {
            if (!$slider.hasClass('slick-initialized')) {
                $slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    infinite: true
                });
            }
        } else {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        }
    }

    // Run on load
    initServicesSlider();

    // Run on resize
    $(window).resize(function() {
        initServicesSlider();
    });
});


 $('.stories-slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 0,
    // speed: 6000,
    variableWidth:true,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
        appendDots: $(".stories-dots"),
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

 


  
  /* ------------------------------
     2. Star Rating
  ------------------------------ */

  $(document).ready(function () {
    $(".my-rating-readonly").starRating({
      starSize: 18,
      initialRating: 5,
      useFullStars: true,
      readOnly: true,
    });
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

jQuery(function ($) {

    const $main = $('.our-stories-slider');
    const $nav = $('.our-stories-nav');
    const $counter = $('.our-stories .slick-count');

    if (!$main.length || !$nav.length || !$counter.length) return;

    function updateCounter(slick, index) {
        let current = (index ?? slick.currentSlide) + 1;
        $counter.text(current < 10 ? '0' + current : current);
    }

    // MAIN slider counter
    $main.on('init afterChange', function (e, slick, currentSlide) {
        updateCounter(slick, currentSlide);
    });

    // INIT NAV FIRST
    if (!$nav.hasClass('slick-initialized')) {
        $nav.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            speed: 800,
            infinite: true,                 // MUST MATCH
            asNavFor: '.our-stories-slider',
               responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      }
    ],
        });
    }

    // INIT MAIN SECOND
    if (!$main.hasClass('slick-initialized')) {

        $main.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            prevArrow: $('.our-stories .prev'),
            nextArrow: $('.our-stories .next'),
            asNavFor: '.our-stories-nav'
        });
    }

});

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

  const fileInput = document.getElementById("fileUpload");
  const uploadArea = document.querySelector(".upload-area");
  const fileList = document.querySelector(".uploaded-files");

  if (fileInput && uploadArea && fileList) {

  // open file dialog on click
uploadArea.addEventListener("click", (e) => {
  // If click came from label or input, let browser handle it
  if (e.target.closest("label") || e.target.closest("input")) {
    return;
  }

  e.preventDefault();
  fileInput.click();
});


  // handle file select
  fileInput.addEventListener("change", handleFiles);

  // drag & drop
  uploadArea.addEventListener("dragover", e => {
    e.preventDefault();
    uploadArea.classList.add("drag");
  });

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("drag");
  });

  uploadArea.addEventListener("drop", e => {
    e.preventDefault();
    uploadArea.classList.remove("drag");
    handleFiles({ target: { files: e.dataTransfer.files } });
  });

  function handleFiles(e) {
    [...e.target.files].forEach(file => {
      renderFile(file);
    });
    fileInput.value = ""; // reset input
  }
  function trimFileName(name, maxLength = 10) {
  const dotIndex = name.lastIndexOf(".");
  if (dotIndex === -1) {
    return name.length > maxLength
      ? name.slice(0, maxLength) + "…"
      : name;
  }

  const ext = name.slice(dotIndex);
  const base = name.slice(0, dotIndex);

  return base.length > maxLength
    ? base.slice(0, maxLength) + "…" + ext
    : name;
}


  function renderFile(file) {
    const fileItem = document.createElement("div");
    fileItem.className = "file-item";

    fileItem.innerHTML = `
      <div class="file-info">
        <span class="file-icon"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"> <path d="M14.1524 2.08203C14.6415 2.08215 15.115 2.25436 15.4899 2.56849L15.6253 2.69245L20.2232 7.29036C20.5691 7.63622 20.7822 8.09274 20.8253 8.57995L20.8337 8.76328V20.832C20.8338 21.3576 20.6353 21.8639 20.2779 22.2493C19.9205 22.6347 19.4307 22.8707 18.9066 22.9102L18.7503 22.9154H6.25033C5.72473 22.9155 5.21849 22.717 4.83309 22.3596C4.44769 22.0023 4.21162 21.5124 4.1722 20.9883L4.16699 20.832V4.16536C4.16683 3.63976 4.36533 3.13352 4.72272 2.74813C5.0801 2.36273 5.56996 2.12666 6.09408 2.08724L6.25033 2.08203H14.1524ZM12.5003 4.16536H6.25033V20.832H18.7503V10.4154H14.0628C13.6484 10.4154 13.251 10.2507 12.958 9.95772C12.6649 9.66469 12.5003 9.26727 12.5003 8.85286V4.16536ZM14.5837 4.59661V8.33203H18.3191L14.5837 4.59661Z" fill="black"/> </svg></span>
        <div>
          <p title="${file.name}">${trimFileName(file.name, 10)}</p>

                <span class="file-size">${(file.size / 1024 / 1024).toFixed(1)}MB</span>

          <span class="progress"><i></i></span> 
        </div>
      </div>
      <button type="button" class="remove-file"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M12 12L7 7M12 12L17 17M12 12L17 7M12 12L7 17" stroke="#4B535D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg></button>
    `;

    fileList.appendChild(fileItem);

    // fake progress animation
    const bar = fileItem.querySelector(".progress i");
    let percent = 0;
    const timer = setInterval(() => {
      percent += 10;
      bar.style.width = percent + "%";
      if (percent >= 100) clearInterval(timer);
    }, 150);

    fileItem.querySelector(".remove-file").onclick = () => {
      fileItem.remove();
    };
  }
  } // End uploadArea check

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