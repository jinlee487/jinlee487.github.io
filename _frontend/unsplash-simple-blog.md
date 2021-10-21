---
title: "Unsplash blog"
excerpt: "vanilla javascript"
layout: raw-page
---
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Jay.Unsplash Blog</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Font awesome icon -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
  <link rel="stylesheet" href="/assets/unsplash-simple-blog/style.css">
</head>
<body>
  <!-- header -->
  <header>
    <nav class = "navbar">
      <div class = "container">
        <a href = "https://jinlee487.github.io/frontend/unsplash-simple-blog/" class = "navbar-brand">Jay.Unsplash</a>
        <div class = "navbar-nav">
          <a href = "https://jinlee487.github.io/">home</a>
          <a href = "#about">about</a>
        </div>
      </div>
    </nav>
    <div class = "banner">
      <div class = "container">
        <h1 class = "banner-title">
          <span>Jay.</span> Unsplash Image
        </h1>
        <p>every photos & images you want to search</p>
        <form>
          <input type = "text" class = "search-input" placeholder="find your images . . .">
          <button type = "button" class = "search-btn" id = "search-btn">
            <i class = "fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </header>
  <!-- end of header -->
  <!-- design -->
  <section class = "design" id = "design">
    <div class = "container">
      <div class = "title">
        <h2>Random photos & images</h2>
        <p>Random photos & images on Unsplash</p>
      </div>
      <div class = "design-content">
        <!-- item -->
        <!-- <div class = "design-item">
          <div class = "design-img">
            <img src = "" alt = "images/art-design-1.jpg">
            <span><i class = "far fa-heart"></i> 22</span>
            <span>Unsplash</span>
          </div>
          <div class = "design-title">
            <a href = "#">make an awesome art portfolio for college or university</a>
          </div>
        </div> -->
        <!-- end of item -->
      </div>
    </div>
  </section>
  <br>
  <br>
  <div class = "design-btns">
    <button id = "design-item-add-btn"><i class = "fas fa-plus"></i></button>
  </div>
  <div class = "image-details">
    <!-- image close btn -->
    <button type = "button" class = "btn image-close-btn" id = "image-close-btn">
      <i class = "fas fa-times"></i>
    </button>
    <!-- image content -->
    <div class = "image-details-content">
    </div>
  </div>
  <!-- end of design -->
  <!-- about -->
  <section class = "about" id = "about">
    <div class = "container">
      <div class = "about-content">
        <div>
          <img src = "/assets/unsplash-simple-blog/images/about-me-bg.jpg" alt = "/assets/unsplash-simple-blog/images/about-me-bg.jpg">
        </div>
        <div class = "about-text">
          <div class = "title">
            <h2>Jay Lee</h2>
            <p>Software Development is my passion</p>
          </div>
          <p>I am a passionate software developer looking for new job opportunities! This is my personaly vanilla javascript project.</p>
          <p>The purpose of this project is to practice vanilla javascript, CSS and HTML. Unsplash has many stock photos available for developers to use. The search API allows users to search for images much easier.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- end of about -->
  <!-- footer -->
  <footer>
    <div class = "social-links">
      <!-- <a href = "#"><i class = "fab fa-facebook-f"></i></a>
      <a href = "#"><i class = "fab fa-twitter"></i></a>
      <a href = "#"><i class = "fab fa-instagram"></i></a>
      <a href = "#"><i class = "fab fa-pinterest"></i></a> -->
      <a href = "https://www.linkedin.com/in/jinwoolee487/"><i class = "fab fa-linkedin-in"></i></a>
      <a href = "https://github.com/jinlee487"><i class = "fab fa-github"></i></a>
    </div>
    <span>Jay.Unsplash Blog Page</span>
  </footer>
  <!-- end of footer -->
  <script src="/assets/unsplash-simple-blog/script.js"></script> 
</body>
</html>