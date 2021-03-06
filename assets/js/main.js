(function() {

  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });

  var section = document.querySelectorAll('section');
  var sections = {};
  var i = 0;
  var logo = document.querySelector('.menu-logo');
  var menuItem = document.querySelectorAll('.menu-item');
  var menuList = document.querySelector('.menu-list');
  var mobileIcon = document.querySelector('.menu-icon-mobile');
  var deeperText = document.querySelector('.deeper-text');
  var serviceBox = document.querySelectorAll('.services-box');
  var serviceImg = document.querySelectorAll('.services-box-img');
  var mobileButton = document.querySelector('.menu-button');

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (i in sections) {
      if ((sections[i]) - 100 <= scrollPosition) { 
        if (i === 'deeper') {
          logo.classList.add('--scale-down')
          menuItem.forEach((element) => {
            element.classList.add('--fade-in')
          });
          mobileIcon.classList.add('--fade-in')
          mobileButton.classList.add('--fade-in')
          deeperText.classList.add('--fade-in')
        }
        if (i === 'home') {
          logo.classList.remove('--scale-down')
          menuItem.forEach((element) => {
          menuList.classList.remove('--drop-menu')
            element.classList.remove('--fade-in')
          });
          mobileIcon.classList.remove('--fade-in')
        }
        if (i === 'services') {
          serviceBox.forEach((element) => {
            element.classList.add('--fade-in')
          });
          serviceImg.forEach((element) => {
            element.classList.add('--fade-in')
          });
        }
      }
    }
  };

  document.getElementById("menu-button").addEventListener("click", myFunction);
  document.getElementById("menu-item").addEventListener("click", myFunction2);  

  function myFunction() {
    menuList.classList.toggle('--drop-menu')
    menuItem.forEach((element) => {
      element.classList.add('--drop-item')
    });
  }

  function myFunction2() {
    menuList.classList.remove('--drop-menu')
    menuItem.forEach((element) => {
      element.classList.remove('--drop-menu')
    });
  }
})(); 