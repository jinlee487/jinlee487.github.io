---
title: "Random Joke Generator"
excerpt: "vanilla javascript"
layout: raw-page
---

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Random Joke Generator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/assets/randomJokeGenerator/style.css">
</head>
<body>
<div class = "container">
    <div class = "joke-wrapper">
        <div class = "title">
            <h1>Hilarious Jokes</h1>
        </div>
        <div class = "joke-text">
            <h3 id = "category"></h3>
            <p id = "setup"></p>
            <p id = "delivery"></p>
        </div>
        <div>
            <button type = "button" id = "prev-joke-btn">Prev Joke</button>
            <button type = "button" id = "gen-joke-btn">New Joke</button>
        </div>
    </div>
</div>
<script src="/assets/randomJokeGenerator/script.js"></script>
</body>
</html>