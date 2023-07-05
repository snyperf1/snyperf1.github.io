// Smooth scrolling animation for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  // Add click event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

window.onload = function() {
    document.body.style.backgroundColor = '#f3f3f380'; /* Updated background color */
    setTimeout(function() {
        document.querySelector('.center').style.display = 'none'; /* Updated background color */
    }, 1400); // Delay in milliseconds (1,5 second)
};

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('li a');
  
  // Add click event listener to each nav link
  navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          
          // Remove 'active' class from all nav links
          navLinks.forEach(function(link) {
              link.classList.remove('active');
          });
          
          // Add 'active' class to the clicked nav link
          this.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('li a');
  var backgroundElement = document.createElement('span');
  backgroundElement.classList.add('background');
  document.body.appendChild(backgroundElement);

  navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          var activeLink = this;
          var activeLinkRect = activeLink.getBoundingClientRect();
          var backgroundElement = document.querySelector('.background');
          backgroundElement.style.width = activeLinkRect.width + 'px';
          backgroundElement.style.height = activeLinkRect.height + 'px';
          backgroundElement.style.transform = 'translate(' + activeLinkRect.left + 'px, ' + activeLinkRect.top + 'px)';
          setTimeout(function() {
              navLinks.forEach(function(link) {
                  link.classList.remove('active');
              });
              activeLink.classList.add('active');
          }, 300);
      });
  });
});

function toggleDescriptionBox() {
  var descriptionBox = document.getElementById("description-box");
  var button = document.querySelector("#gis-content button");
  
  if (descriptionBox.style.maxHeight) {
    // Box is open, so close it
    descriptionBox.style.maxHeight = null;
    button.textContent = "Find out more";
  } else {
    // Box is closed, so open it
    descriptionBox.style.maxHeight = descriptionBox.scrollHeight + "px";
    button.textContent = "Show less";
  }
}

// Function to add fade-in class to all section elements and the header
const addFadeInClass = () => {
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');

  sections.forEach((section) => {
    section.classList.add('fade-in');
  });

  header.classList.add('fade-in');
};

// Delay the execution of the fade-in effect
window.addEventListener('load', () => {
  setTimeout(addFadeInClass, 500); // Delay in milliseconds (1000ms = 1 seconds)
});

