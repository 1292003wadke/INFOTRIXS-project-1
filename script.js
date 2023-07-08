// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav ul li a');
  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

// Toggle active class on navigation links based on scroll position
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  for (const section of sections) {
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute('id');
    const navigationLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
      navigationLink.classList.add('active');
    } else {
      navigationLink.classList.remove('active');
    }
  }
});
