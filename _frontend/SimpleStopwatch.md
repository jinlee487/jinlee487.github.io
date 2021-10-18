---
title: "Simple Stopwatch"
excerpt: "vanilla javascript"
layout: raw-page
---

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Stopwatch</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous">
    <link rel="stylesheet" href="/assets/SimpleStopwatch/style.css">
</head>
<body>
    <div class = "stopwatch-wrapper">
        <div class = "content">
            <div class = "stopwatch-time">
                <span id = "hour"></span>
                <span>:</span>
                <span id = "minute"></span>
                <span>:</span>
                <span id = "second"></span>
                <span>.</span>
                <span id = "millisecond"></span>
            </div>
            <div class = "btns">
                <button type = "button" id = "start-btn">Start</button>
                <button type = "button" id = "reset-btn">Reset</button>
            </div>
        </div>
    </div>
    <!-- <div class = "button-wrapper">
        <button id="go-back">
            <i class="fas fa-home"></i>
        </button>
    </div> -->
    <script src="/assets/SimpleStopwatch/script.js"></script>
</body>
</html>
