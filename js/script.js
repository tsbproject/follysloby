





//shrinking navbar. logo and Navlinks while scrolling up
$(document).ready(function () {
  var previousScroll = 0;
  var $navbar = $('.navbar');
  var $logo = $('.logo');
  var $navbarNav = $('.navbar-nav');

  $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();

      if (currentScroll > previousScroll) {
          // Scrolling down
          $navbar.css('height', '60px');
          $navbar.css('padding', '10px 0');
          $logo.css('max-height', '40px');
          $navbarNav.addClass('shrink');
      } else {
          // Scrolling up
          $navbar.css('height', '110px');
          $navbar.css('padding', '20px 0');
          $logo.css('max-height', '100px');
          $navbarNav.removeClass('shrink');
      }

      previousScroll = currentScroll;
  });
});

























// DROPDOWN MENU ANMATION

// Get all the dropdown menus on the page
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through each dropdown menu
dropdowns.forEach((dropdown) => {
  // Get the dropdown menu and the dropdown toggle button
  const menu = dropdown.querySelector(".dropdown");
  const toggle = dropdown.querySelector(".dropdown-toggle");

  // Add an event listener to the toggle button to trigger the animation
  toggle.addEventListener("click", () => {
    menu.classList.add("show", "animated");
  });

  // Add an event listener to the dropdown menu to remove the animation classes when it is hidden
  menu.addEventListener("animation", () => {
    menu.classList.remove("show", "animated");
  });
});



































