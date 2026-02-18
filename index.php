
<?php include('includes/header.php') ?>

   


    <section class="banner position-relative">
        <div class="banner-slider-init">
            <picture>
                <img src="public/images/home/banner.jpg" width="1920" height="956" alt="">
            </picture>
            <picture>
                <img src="public/images/home/banner.jpg" width="1920" height="956" alt="">
            </picture>
            <picture>
                <img src="public/images/home/banner.jpg" width="1920" height="956" alt="">
            </picture>
            <picture>
                <img src="public/images/home/banner.jpg" width="1920" height="956" alt="">
            </picture>
            <picture>
                <img src="public/images/home/banner.jpg" width="1920" height="956" alt="">
            </picture>
        </div>
        <div class="container-ctn banner-text-container">
            <div class="banner-text-slider-init">
                <div class="banner-text">
                       <h1>Best
                            <span>Never</span> Rest
                        </h1>
                </div>
                <div class="banner-text">
                       <h1>Best
                            <span>Never</span> Rest
                        </h1>
                </div>
                <div class="banner-text">
                       <h1>Best
                            <span>Never</span> Rest
                        </h1>
                </div>
                <div class="banner-text">
                       <h1>Best
                            <span>Never</span> Rest
                        </h1>
                </div>
                <div class="banner-text">
                       <h1>Best
                            <span>Never</span> Rest
                        </h1>
                </div>
            </div>
           
        </div>
        <button id="scroll" class="scroll">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="26" viewBox="0 0 18 26" fill="none">
                <path d="M1 9C1 6.87827 1.84286 4.84344 3.34315 3.34315C4.84344 1.84286 6.87827 1 9 1C11.1217 1 13.1566 1.84286 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9V17C17 19.1217 16.1571 21.1566 14.6569 22.6569C13.1566 24.1571 11.1217 25 9 25C6.87827 25 4.84344 24.1571 3.34315 22.6569C1.84286 21.1566 1 19.1217 1 17V9Z" stroke="#EF4136" stroke-width="2" stroke-linejoin="round"/>
                <path class="mouse-wheel" d="M9 6.33203V11.6654" stroke="#EF4136" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>Scroll</div>
        </button>
        <div class="container-ctn position-relative">
            <div class="banner-dots"></div>
        </div>
    </section>


    <section class="home-about commonPadding position-relative vectorOverlay">
        
        <div class="container-ctn">
            <div class="d-flex flex-wrap justify-content-between position-relative">
                <div class="video-wrapper">
                    <div class="video-container">
                        <video muted playsinline preload="metadata" poster="public/images/home/poster.jpg">
                                <source src="public/video/video.mp4" type="video/mp4">
                        </video>
                    </div>
            <button class="playButton" aria-label="Play or Pause Video">
                            <span><img src="public/images/home/play.png" width="100" height="100" alt=""></span>
                        <p>Play our video</p>
                    </button>
                    <div class="counter d-flex flex-wrap justify-content-end">
                        <strong class="timer" data-to="17" data-speed="1000">17</strong><span>+</span>
                            <div>
                                <p>Years of</p>
                                <span>Experience</span>
                            </div>
                    </div>
                </div>

                <div class="company bg-style">
                    <h2>About the company</h2>
                    <div>
                        <p>Founded in 2008, Wellbing Packaging Machinery is the exclusive agency for some of China’s highest-quality machinery manufacturers. Guided by the principle “Best Never Rest,” we are committed to continuous improvement, delivering superior machinery, innovative designs, and reliable services that meet the unique needs of every customer. Wellbing specializes in providing complete turnkey project solutions for water,</p>
                    </div>                    
                    <a href="about.php">Read more</a>
                </div>


            </div>
        </div>
    </section>

    <section class="solutions commonPadding-pt commonPadding-pb-120  position-relative">
        <div class="head">
        <div class="head-container container-ctn d-flex flex-wrap align-items-center justify-content-between">
                <h2>Our Solutions</h2>
                <div class="slick-nav slick-nav-count d-flex">
                    <div class="prev slick-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <path d="M12.046 16.1589C12.2569 15.9479 12.3754 15.6618 12.3754 15.3635C12.3754 15.0652 12.2569 14.7791 12.046 14.5681L6.47723 8.9994L12.046 3.43065C12.2509 3.21847 12.3643 2.93429 12.3617 2.63932C12.3592 2.34435 12.2409 2.06218 12.0323 1.8536C11.8237 1.64502 11.5415 1.5267 11.2466 1.52414C10.9516 1.52158 10.6674 1.63497 10.4552 1.8399L4.0911 8.20402C3.8802 8.41499 3.76172 8.70109 3.76172 8.9994C3.76172 9.29771 3.8802 9.5838 4.0911 9.79477L10.4552 16.1589C10.6662 16.3698 10.9523 16.4883 11.2506 16.4883C11.5489 16.4883 11.835 16.3698 12.046 16.1589Z" fill="#C9C9C9"/> </svg>
                    </div>
                    <div class="slick-count" id="slick-counter">01</div>
                    <div class="next slick-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <path d="M5.95402 1.8411C5.74312 2.05207 5.62464 2.33817 5.62464 2.63648C5.62464 2.93479 5.74312 3.22089 5.95402 3.43185L11.5228 9.0006L5.95402 14.5694C5.74909 14.7815 5.6357 15.0657 5.63826 15.3607C5.64083 15.6557 5.75914 15.9378 5.96773 16.1464C6.17631 16.355 6.45847 16.4733 6.75345 16.4759C7.04842 16.4784 7.33259 16.365 7.54477 16.1601L13.9089 9.79598C14.1198 9.58501 14.2383 9.29891 14.2383 9.0006C14.2383 8.70229 14.1198 8.4162 13.9089 8.20523L7.54477 1.8411C7.3338 1.6302 7.04771 1.51172 6.7494 1.51172C6.45109 1.51172 6.16499 1.6302 5.95402 1.8411Z" fill="#C9C9C9"/> </svg>
                    </div>
                </div>
            </div>
        </div>
        <section class="solutions-outer">
              <div class="container-ctn">
            <div class="solutions-slider solutions-slider-init">
                <div class="solutions-slider-item">
                    <h3>Turnkey Water Treatment System</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    <picture>
                        <img src="public/images/home/water-treatment.jpg" width="760" height="364" class="img-fluid"  alt="Turnkey Water Treatment System">
                    </picture>
                    <a href="">
                        Read more
                    </a>
                </div>
                <div class="solutions-slider-item">
                    <h3>Turnkey Beverage Processing System</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    <picture>
                        <img src="public/images/home/beverage-processing.jpg" width="760" height="364" class="img-fluid"  alt="Turnkey Water Treatment System">
                    </picture>
                    <a href="">
                        Read more
                    </a>
                </div>
                <div class="solutions-slider-item">
                    <h3>Turnkey Beverage Processing System</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    <picture>
                        <img src="public/images/home/beverage-processing.jpg" width="760" height="364" class="img-fluid"  alt="Turnkey Water Treatment System">
                    </picture>
                    <a href="">Read more</a>
                </div>
            </div>
        </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="340" viewBox="0 0 1920 340" fill="none">
        <path d="M1967.43 231.844C1932.71 310.925 1765.82 384.122 1706.55 303.81C1656.95 236.613 1666.69 61.2818 1440.3 121.734C1212.55 182.548 1004.81 71.7788 1054.87 16.4418C1104.92 -38.8942 1275.89 66.7198 1071.83 140.118C867.779 213.516 781.662 108.227 613.171 247.896C491.654 348.627 412.24 355.889 275.667 249.817C216.814 204.111 75.9736 142.583 -13.3598 233.922" stroke="#EF4136" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </section>



    <section class="product commonPadding position-relative">
        <div class="container-ctn border-bt">
            <h2>Our Products</h2>
        </div>
        <div class="container-side">
            <div class="product-slider product-slider-init">
                <div class="product-card">
                    <picture><img src="public/images/products/1.jpg" width="482" height="304" alt=""></picture>
                    <div>
                        <h3>Product Name1</h3>
                        <div class="logo"><img src="public/images/logo-grey.png" width="120" height="15" class="img-fluid" alt="WELLBING"></div>
                        <div class="product-short-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </div>
                        <a href="" class="read-more">Read more</a>
                    </div>
                </div>
                <div class="product-card">
                    <picture><img src="public/images/products/2.jpg" width="482" height="304" alt=""></picture>
                    <div>
                        <h3>Product Name2</h3>
                        <div class="logo"><img src="public/images/logo-grey.png" width="120" height="15" class="img-fluid" alt="WELLBING"></div>
                        <div class="product-short-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </div>
                        <a href="" class="read-more">Read more</a>
                    </div>
                </div>
                <div class="product-card">
                    <picture><img src="public/images/products/3.jpg" width="482" height="304" alt=""></picture>
                    <div>
                        <h3>Product Name3</h3>
                        <div class="logo"><img src="public/images/logo-grey.png" width="120" height="15" class="img-fluid" alt="WELLBING"></div>
                        <div class="product-short-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </div>
                        <a href="" class="read-more">Read more</a>
                    </div>
                </div>
                <div class="product-card">
                    <picture><img src="public/images/products/4.jpg" width="482" height="304" alt=""></picture>
                    <div>
                        <h3>Product Name4</h3>
                        <div class="logo"><img src="public/images/logo-grey.png" width="120" height="15" class="img-fluid" alt="WELLBING"></div>
                        <div class="product-short-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </div>
                        <a href="" class="read-more">Read more</a>
                    </div>
                </div>
                <div class="product-card">
                    <picture><img src="public/images/products/1.jpg" width="482" height="304" alt=""></picture>
                    <div>
                        <h3>Product Name1</h3>
                        <div class="logo"><img src="public/images/logo-grey.png" width="120" height="15" class="img-fluid" alt="WELLBING"></div>
                        <div class="product-short-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </div>
                        <a href="" class="read-more">Read more</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-ctn border-bt">
            <div class="product-dots"></div>
        </div>
    </section>


    <section class="services commonPadding">
        <div class="container-ctn">
            <div class="services-row d-flex flex-wrap ">
                <div class="services-featured position-relative">
                    <picture>
                         <img src="public/images/services/1.jpg" width="387" height="676"  alt="">
                    </picture>
                        <h2>Our
                        Services</h2>
                </div>
                <div class="services-loop d-flex flex-wrap">
                    <div class="services-card">
                            <h3>Onsite Services</h3>
                            <picture><img src="public/images/services/2.jpg" width="368" height="368" alt="Onsite Services"></picture>
                            <div class="services-short-description">
                                At Wellbing, we are committed to delivering personalized and reliable onsite service. Our dedicated...
                            </div>
                            <a href="" class="read-more">Read more</a>
                    </div>
                    <div class="services-card">
                            <h3> After-Sales Support</h3>
                            <picture><img src="public/images/services/3.jpg" width="368" height="368" alt="Onsite Services"></picture>
                            <div class="services-short-description">
                                Customer satisfaction is at the core of our service philosophy. We provide timely spare parts supply...
                            </div>
                            <a href="" class="read-more">Read more</a>
                    </div>
                    <div class="services-card">
                            <h3>Spare Parts</h3>
                            <picture><img src="public/images/services/4.jpg" width="368" height="368" alt="Onsite Services"></picture>
                            <div class="services-short-description">
                            We offer a wide range of high-quality spare parts for all Wellbing equipment. With fast supply, complete model...
                            </div>
                            <a href="" class="read-more">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="stories commonPadding-120">
        <div class="container-ctn">
            <div class="d-flex flex-wrap align-items-center justify-content-between">
                <h2>Success Stories</h2>
                <a href="success-stories.php" class="read-more">View all</a>
            </div>
            <div class="stories-container">
                <div class="stories-slider">

                    <div class="stories-card">
                        <div class="stories-details">
                            <h3>Project Name1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div class="stories-cta-logo d-flex flex-wrap align-items-end justify-content-between">
                               <a href="success-stories-detail.php" class="read-more">Read more</a>
                               <div class="icon"><img src="public/images/icon/1.png" width="112" height="80"  alt=""></div>
                        </div>
                        <picture>
                            <img src="public/images/projects/1.jpg" width="331" height="372" alt="">
                        </picture>
                    </div>
                    <div class="stories-card">
                        <div class="stories-details">
                            <h3>Project Name2</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div class="stories-cta-logo d-flex flex-wrap align-items-end justify-content-between">
                               <a href="success-stories-detail.php" class="read-more">Read more</a>
                               <div class="icon"><img src="public/images/icon/2.png" width="112" height="80"  alt=""></div>
                        </div>
                        <picture>
                            <img src="public/images/projects/2.jpg" width="331" height="372" alt="">
                        </picture>
                    </div>
                    <div class="stories-card">
                        <div class="stories-details">
                            <h3>Project Name3</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div class="stories-cta-logo d-flex flex-wrap align-items-end justify-content-between">
                               <a href="success-stories-detail.php" class="read-more">Read more</a>
                               <div class="icon"><img src="public/images/icon/3.png" width="112" height="80"  alt=""></div>
                        </div>
                        <picture>
                            <img src="public/images/projects/3.jpg" width="331" height="372" alt="">
                        </picture>
                    </div>

                    <div class="stories-card">
                        <div class="stories-details">
                            <h3>Project Name1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div class="stories-cta-logo d-flex flex-wrap align-items-end justify-content-between">
                               <a href="success-stories-detail.php" class="read-more">Read more</a>
                               <div class="icon"><img src="public/images/icon/1.png"  width="112" height="80" alt=""></div>
                        </div>
                        <picture>
                            <img src="public/images/projects/1.jpg" width="331" height="372" alt="">
                        </picture>
                    </div>

                </div>
     
                <div class="stories-dots"></div>
            </div>
        </div>
    </section>
    

    <section class="blog commonPadding">
        <h2 class="text-center">Our Blogs</h2>
        <div class="container-ctn">
            <div class="blog-slider blog-slider-init">
                <div class="blog-item">
                    <picture><img src="public/images/blog/1.jpg" width="775" height="276" alt="" class="img-fluid"></picture>
                    <div>
                        <div class="blog-short-content">
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    </div>
                    <div class="author d-flex flex-wrap justify-content-between">
                        <div class="author-info d-flex">
                            <picture><img src="public/images/blog/female.png" width="50" height="50" alt="Alex Kurian James"></picture>
                            <div>
                                <p>Leena Maria John</p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"> <path d="M12.7417 2.24805H3.74792C2.09221 2.24805 0.75 3.59026 0.75 5.24596V12.7408C0.75 14.3965 2.09221 15.7387 3.74792 15.7387H12.7417C14.3974 15.7387 15.7396 14.3965 15.7396 12.7408V5.24596C15.7396 3.59026 14.3974 2.24805 12.7417 2.24805Z" stroke="#737374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M5.24687 0.75V3.74792M11.2427 0.75V3.74792M0.75 6.74583H15.7396" stroke="#737374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                                    21, March, 2025
                                </span>
                            </div>
                        </div>
                        <a href="" class="read-more">Read more</a>
                    </div>
                    </div>
                </div>
                <div class="blog-item">
                    <picture><img src="public/images/blog/2.jpg" width="775" height="276" alt="" class="img-fluid"></picture>
                    <div>
                        <div class="blog-short-content">
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    </div>
                    <div class="author d-flex flex-wrap justify-content-between">
                        <div class="author-info d-flex">
                            <picture><img src="public/images/blog/male.png" width="50" height="50" alt="Alex Kurian James"></picture>
                            <div>
                                <p>Alex Kurian James</p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"> <path d="M12.7417 2.24805H3.74792C2.09221 2.24805 0.75 3.59026 0.75 5.24596V12.7408C0.75 14.3965 2.09221 15.7387 3.74792 15.7387H12.7417C14.3974 15.7387 15.7396 14.3965 15.7396 12.7408V5.24596C15.7396 3.59026 14.3974 2.24805 12.7417 2.24805Z" stroke="#737374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M5.24687 0.75V3.74792M11.2427 0.75V3.74792M0.75 6.74583H15.7396" stroke="#737374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                                    21, March, 2025
                                </span>
                            </div>
                        </div>
                        <a href="" class="read-more">Read more</a>
                    </div>
                    </div>
                </div>
                <div class="blog-item">
                    <picture><img src="public/images/blog/1.jpg" width="775" height="276" alt="" class="img-fluid"></picture>
                    <div>
                        <div class="blog-short-content">
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    </div>
                    <div class="author d-flex flex-wrap justify-content-between">
                        <div class="author-info d-flex">
                            <picture><img src="public/images/blog/male.png" width="50" height="50" alt="Alex Kurian James"></picture>
                            <div>
                                <p>Alex Kurian James</p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"> <path d="M12.7417 2.24805H3.74792C2.09221 2.24805 0.75 3.59026 0.75 5.24596V12.7408C0.75 14.3965 2.09221 15.7387 3.74792 15.7387H12.7417C14.3974 15.7387 15.7396 14.3965 15.7396 12.7408V5.24596C15.7396 3.59026 14.3974 2.24805 12.7417 2.24805Z" stroke="#737374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M5.24687 0.75V3.74792M11.2427 0.75V3.74792M0.75 6.74583H15.7396" stroke="#737374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                                    21, March, 2025
                                </span>
                            </div>
                        </div>
                        <a href="" class="read-more">Read more</a>
                    </div>
                    </div>
                </div>

            </div>
        </div>
                <div class="slick-nav slick-nav-count d-flex mx-auto">
                    <div class="prev slick-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <path d="M12.046 16.1589C12.2569 15.9479 12.3754 15.6618 12.3754 15.3635C12.3754 15.0652 12.2569 14.7791 12.046 14.5681L6.47723 8.9994L12.046 3.43065C12.2509 3.21847 12.3643 2.93429 12.3617 2.63932C12.3592 2.34435 12.2409 2.06218 12.0323 1.8536C11.8237 1.64502 11.5415 1.5267 11.2466 1.52414C10.9516 1.52158 10.6674 1.63497 10.4552 1.8399L4.0911 8.20402C3.8802 8.41499 3.76172 8.70109 3.76172 8.9994C3.76172 9.29771 3.8802 9.5838 4.0911 9.79477L10.4552 16.1589C10.6662 16.3698 10.9523 16.4883 11.2506 16.4883C11.5489 16.4883 11.835 16.3698 12.046 16.1589Z" fill="#C9C9C9"/> </svg>
                    </div>
                    <div class="slick-count" id="slick-counter">01</div>
                    <div class="next slick-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <path d="M5.95402 1.8411C5.74312 2.05207 5.62464 2.33817 5.62464 2.63648C5.62464 2.93479 5.74312 3.22089 5.95402 3.43185L11.5228 9.0006L5.95402 14.5694C5.74909 14.7815 5.6357 15.0657 5.63826 15.3607C5.64083 15.6557 5.75914 15.9378 5.96773 16.1464C6.17631 16.355 6.45847 16.4733 6.75345 16.4759C7.04842 16.4784 7.33259 16.365 7.54477 16.1601L13.9089 9.79598C14.1198 9.58501 14.2383 9.29891 14.2383 9.0006C14.2383 8.70229 14.1198 8.4162 13.9089 8.20523L7.54477 1.8411C7.3338 1.6302 7.04771 1.51172 6.7494 1.51172C6.45109 1.51172 6.16499 1.6302 5.95402 1.8411Z" fill="#C9C9C9"/> </svg>
                    </div>
                </div>
    </section>


    <section class="testimonial commonPadding">
        <div class="container-ctn">
            <h2 class="text-center">What our Customer are Saying</h2>
        </div>
        <div class="container-fluid p-0">
                   <div class="testimonial-slider">
                <div class="testimonial-card">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    <div class="testimonial-info position-relative">
                        <div class="author d-flex">
                            <picture>
                                <img src="public/images/blog/male.png" width="40" height="40" class="img-fluid" alt="">
                            </picture>
                            <div class="author-info">
                                <p>Annie Alex</p>
                                <span>CEO & Founder of Company</span>
                            </div>
                        </div>
                         
                    </div>
                </div>
                <div class="testimonial-card">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    <div class="testimonial-info position-relative">
                        <div class="author d-flex">
                            <picture>
                                <img src="public/images/blog/b.png" width="40" height="40" class="img-fluid" alt="">
                            </picture>
                            <div class="author-info">
                                <p>Annie Alex</p>
                                <span>CEO & Founder of Company</span>
                            </div>
                        </div>
                         
                    </div>
                </div>
                <div class="testimonial-card">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    <div class="testimonial-info position-relative">
                        <div class="author d-flex">
                            <picture>
                                <img src="public/images/blog/c.png" width="40" height="40" class="img-fluid" alt="">
                            </picture>
                            <div class="author-info">
                                <p>Annie Alex</p>
                                <span>CEO & Founder of Company</span>
                            </div>
                        </div>
                         
                    </div>
                </div>
                <div class="testimonial-card">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    <div class="testimonial-info position-relative">
                        <div class="author d-flex">
                            <picture>
                                <img src="public/images/blog/a.png" width="40" height="40" class="img-fluid" alt="">
                            </picture>
                            <div class="author-info">
                                <p>Annie Alex</p>
                                <span>CEO & Founder of Company</span>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
                <div class="slick-nav slick-nav-count d-flex mx-auto">
                    <div class="prev slick-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <path d="M12.046 16.1589C12.2569 15.9479 12.3754 15.6618 12.3754 15.3635C12.3754 15.0652 12.2569 14.7791 12.046 14.5681L6.47723 8.9994L12.046 3.43065C12.2509 3.21847 12.3643 2.93429 12.3617 2.63932C12.3592 2.34435 12.2409 2.06218 12.0323 1.8536C11.8237 1.64502 11.5415 1.5267 11.2466 1.52414C10.9516 1.52158 10.6674 1.63497 10.4552 1.8399L4.0911 8.20402C3.8802 8.41499 3.76172 8.70109 3.76172 8.9994C3.76172 9.29771 3.8802 9.5838 4.0911 9.79477L10.4552 16.1589C10.6662 16.3698 10.9523 16.4883 11.2506 16.4883C11.5489 16.4883 11.835 16.3698 12.046 16.1589Z" fill="#C9C9C9"/> </svg>
                    </div>
                    <div class="slick-count" id="slick-counter">01</div>
                    <div class="next slick-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <path d="M5.95402 1.8411C5.74312 2.05207 5.62464 2.33817 5.62464 2.63648C5.62464 2.93479 5.74312 3.22089 5.95402 3.43185L11.5228 9.0006L5.95402 14.5694C5.74909 14.7815 5.6357 15.0657 5.63826 15.3607C5.64083 15.6557 5.75914 15.9378 5.96773 16.1464C6.17631 16.355 6.45847 16.4733 6.75345 16.4759C7.04842 16.4784 7.33259 16.365 7.54477 16.1601L13.9089 9.79598C14.1198 9.58501 14.2383 9.29891 14.2383 9.0006C14.2383 8.70229 14.1198 8.4162 13.9089 8.20523L7.54477 1.8411C7.3338 1.6302 7.04771 1.51172 6.7494 1.51172C6.45109 1.51172 6.16499 1.6302 5.95402 1.8411Z" fill="#C9C9C9"/> </svg>
                    </div>
                </div>
    </section>


    <section class="map">
        <iframe role="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.139588906691!2d55.48945261128093!3d25.265889328821274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ff2f2979641%3A0xc9a5bced79870b53!2sWellbing%20Machinery!5e0!3m2!1sen!2sin!4v1767782584978!5m2!1sen!2sin" width="1900" height="575" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    <!-- menu mobile -->



<?php include('includes/footer.php') ?>