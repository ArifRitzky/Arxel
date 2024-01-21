// script.js

function onNoClick() {
    var noButton = document.getElementById('noButton');
    var maxX = window.innerWidth - noButton.clientWidth;
    var maxY = window.innerHeight - noButton.clientHeight;
  
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
  
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
  }
  
  function onYesClick() {
    var message = document.getElementById('message');
    var buttons = document.getElementById('buttons');
    var thanks = document.getElementById('thanks');
  
    message.style.display = 'none';
    buttons.style.display = 'none';
    thanks.style.display = 'block';
  }
  