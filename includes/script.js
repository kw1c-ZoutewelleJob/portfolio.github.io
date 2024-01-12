let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('check');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('nav ul li a');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      mobileMenu.style.display = 'flex';
    } else {
      mobileMenu.style.display = 'none';
    }
  });

  // Close mobile navigation when a navigation link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.style.display = 'none';
      checkbox.checked = false; // Uncheck the checkbox
    });
  });
});
