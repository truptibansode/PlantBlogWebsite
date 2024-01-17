  // Get the current page URL
  var currentUrl = window.location.pathname;

  // Find the corresponding menu item and add the 'active' class
  document.addEventListener('DOMContentLoaded', function () {
      var menuItems = document.querySelectorAll('.right-menu ul li a');

      menuItems.forEach(function (item) {
          var itemUrl = item.getAttribute('href');

          if (currentUrl === itemUrl) {
              item.parentElement.classList.add('active');
          }
      });
  });


//   ONCLICK FUNCTIONS

function instagram() {
    window.location.href = "https://www.instagram.com/tobesotrupti/?igsh=dHRmeTR0aHRkcjhh"
}

function Facebook(){
    window.location.href = 'https://www.facebook.com/people/Trupti-Bansode/pfbid0cRkVssVp8KQ7YMWNdpSXiPNTpPa7N3Q4TMdT9nheYcC8UYWM9qKBZXvpAQf4KRizl/?mibextid=9R9pXO'
}

function Snapchat(){
    window.location.href = 'https://www.snapchat.com/add/trupti1910?share_id=llgu2TA3AoQ&locale=en-US'
}

function Twitter(){
    window.location.href = 'https://twitter.com/'
}

function linkedin(){
    window.location.href = 'https://www.linkedin.com/in/truptibansode/'
}

function github(){
    window.location.href = 'https://github.com/truptibansode'
}