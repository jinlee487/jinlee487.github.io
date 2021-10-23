---
title: "Vanilla Landing Pages"
excerpt: "vanilla javascript"
layout: raw-page
---
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/assets/vanilla-landing-pages/style.css">
    <!-- Fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">
  </head>
  <body>
    <!-- fullscreen-bg-text-change-effect -->
    <div class = "fullscreen-bg-text-change-effect">
      <!-- navbar -->
      <nav class = "navbar">
        <div class = "nav-top">
          <a href = "https://jinlee487.github.io/projects/vanilla-javascript-project/" class = "navbar-brand">
            JayLee<span>Codes</span>
          </a>
          <button type = "button" class = "navbar-toggler">
            <i class = "fas fa-bars"></i>
          </button>
        </div>
        <div class = "navbar-collapse">
          <span class = "btn-close">
            <i class = "fas fa-times"></i>
          </span>
          <ul class = "navbar-nav">
            <li class = "nav-item">
              <a href = "#" class = "nav-link">Home</a>
            </li>
            <li class = "nav-item">
              <a href = "#" class = "nav-link">About</a>
            </li>
            <li class = "nav-item">
              <a href = "#" class = "nav-link">Services</a>
            </li>
            <li class = "nav-item">
              <a href = "#" class = "nav-link">Works</a>
            </li>
            <li class = "nav-item">
              <a href = "#" class = "nav-link">Contact</a>
            </li>
          </ul>
          <p class = "nav-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore amet explicabo numquam delectus, laudantium aliquid deserunt labore molestiae! Laborum debitis fugiat ipsum animi sint?</p>
          <div class = "nav-social-icons">
            <a href = "#"><i class = "fab fa-facebook-f"></i></a>
            <a href = "#"><i class = "fab fa-twitter"></i></a>
            <a href = "#"><i class = "fab fa-instagram"></i></a>
            <a href = "#"><i class = "fab fa-pinterest"></i></a>
            <a href = "#"><i class = "fas fa-envelope"></i></a>
          </div>
        </div>
      </nav>
      <!-- end of navbar -->
      <!-- header -->
      <div class = "header">
        <!-- bg video -->
        <video autoplay muted loop id = "bg-video">
          <source src = "/assets/vanilla-landing-pages/assets/bg-video-HackerCode.mp4" type = "video/mp4">
        </video>
        <!-- end of bg video -->
        <div class = "container">
          <!-- hero section -->
          <div class = "hero-content">
            <div class = "hero-content-change">
              <div>
                <span>
                  <i class = "fas fa-tree"></i>
                </span>
                <h3>
                  <div class = "line"></div>
                  <span>Coding Projects</span>
                  <div class = "line"></div>
                </h3>
                <h1 class = "hero-lg-text">
                  do something creative everyday
                </h1>
              </div>
            </div>
            <blockquote class = "hero-quote">
              <span>
                <i class = "fas fa-quote-left"></i>
              </span>
              Creativity doesn't wait for that perfect moment. Create something I am passionate about.
              <span>
                <i class = "fas fa-quote-right"></i>
              </span>
            </blockquote>
            <button type = "button" class = "hero-btn">
              know more
            </button>
          </div>
          <!-- end of hero section -->
        </div>
      </div>
      <!-- end of header -->
    </div>
    <!-- end of fullscreen-bg-text-change-effect -->
    <!-- banner-section-with-floating-img -->
    <div class = "banner-section-with-floating-img">
      <div class = "main-wrapper">
        <div class = "showcase-container">
          <div class = "main-content">
            <div class = "content-left">
              <h1>iPhone 11 is now the new iPhone 13</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis cum delectus suscipit magni commodi enim ipsa adipisci repellendus molestiae. Dicta est dolore accusantium provident ab?</p>
              <div class = "store-icons">
                <img src = "/assets/vanilla-landing-pages/assets/app-store-icon.png" alt = "apple store">
                <img src = "/assets/vanilla-landing-pages/assets/google-play-icon.png" alt = "google play store">
              </div>
            </div>
            <div class = "content-right">
              <img src = "/assets/vanilla-landing-pages/assets/iphone_11_PNG.png" alt = "">
              <img src = "/assets/vanilla-landing-pages/assets/iphone_11_PNG2.png" alt = "">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of banner-section-with-floating-img -->
    <!-- business-landing-page -->
    <div class = "business-landing-page">
      <div class = "banner">
        <div class = "banner-left">
            <h1 class = "banner-title">Leave me your email for <span>social media marketing</span></h1>
            <p class = "banner-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla maiores tenetur omnis harum quaerat dolor dicta necessitatibus officiis non.</p>
            <form class = "header-form">
                <div class = "form-item">
                    <input type = "email" class = "form-control" placeholder="Email Address">
                    <button type = "submit" class = "submit-btn">Learn More</button>
                </div>
            </form>
            <ul class = "social-links">
                <li>
                    <a href = "#"><i class = "fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href = "#"><i class = "fab fa-facebook-f"></i></a>
                </li>
                <li>
                    <a href = "#"><i class = "fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href = "#"><i class = "fab fa-youtube"></i></a>
                </li>
                <li>
                    <a href = "#"><i class = "fab fa-whatsapp"></i></a>
                </li>
            </ul>
        </div>
        <div class = "banner-right">
            <img src = "/assets/vanilla-landing-pages/assets/banner_img.png" alt = "banner image">
        </div>
      </div>
    </div>
    <!-- end business-landing-page -->
    <!-- landing-page-bg-slider -->
    <div class = "landing-page-bg-slider"> 
      <div class = "showcase-wrapper">
        <div class = "showcase-content">
          <div class = "showcase">
            <h1>Explore your talents</h1>
            <button type = "button">explore with us</button>
          </div>
          <div class = "showcase">
            <h1>God always has purpose</h1>
            <button type = "button">learn more</button>
          </div>
          <div class = "showcase">
            <h1>Keep Calm <br>and Strive Satisfied</h1>
            <button type = "button">read more</button>
          </div>
        </div>
        <!-- dots -->
        <div class = "dotted-btns">
          <span data-id = "0">
            <i class = "fas fa-circle"></i>
          </span>
          <span data-id = "1">
            <i class = "fas fa-circle"></i>
          </span>
          <span data-id = "2">
            <i class = "fas fa-circle"></i>
          </span>
        </div>
      </div>
    </div>
    <!-- landing-page-bg-slider -->
    <script src = "/assets/vanilla-landing-pages/script.js"></script>
  </body>
</html>