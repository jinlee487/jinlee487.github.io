---
title: "Note Taking App"
excerpt: "vanilla javascript"
layout: raw-page
---

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Note Taking App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- fontawesome cdn -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="/assets/note-taking-app-vanilla-js/style.css">
    </head>
    <body>
        <div class = "note">
        <h2 class="header">Note Taking App</h2>
        <div class = "note-input">
            <h3>Add A New Note: </h3>
            <div class = "note-wrapper">
            <input type = "text" id = "note-title" placeholder="Title of the note">
            <textarea rows = "5" placeholder="Write your note here ... " id = "note-content"></textarea>
            <button type = "button" class = "btn" id = "add-note-btn">
                <span><i class = "fas fa-plus"></i></span>
                Add Note
            </button>
            </div>
        </div>
        <div class = "note-list">
        </div>
        <button type = "button" class = "btn" id = "delete-all-btn" disabled>
            <span><i class = "fas fa-trash"></i></span>
            Delete All
        </button>
        <button type = "button" class = "btn right" id = "print-btn" disabled>
            <span><i class = "fas fa-print"></i></span>
            Print
        </button>
        </div>
        <script src="/assets/note-taking-app-vanilla-js/app.js"></script>
        <!-- note item -->
        <!-- <div class = "note-item">
        <h3>The Title Goes Here</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit omnis expedita porro adipisci, asperiores facere ea. Voluptates quos quia consequatur explicabo. Perspiciatis, repellat. Ea facere dolorum a iste maiores!</p>
        <button type = "button" class = "btn delete-note-btn">
            <span><i class = "fas fa-trash"></i></span>
            Remove
        </button>
        </div> -->
    </body>
</html>

