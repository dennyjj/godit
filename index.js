// on scroll navbar color change

$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
});

$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
        $(".nav-link").removeClass('text-light');
      } else{
        $(".nav-link").addClass('text-dark-50');    
      }
      if (scroll < 10) {
        $(".nav-link").addClass('text-light');   
      }
    });
  });

// on scroll icons animations

const serviceIconsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__bounceIn');
        }
    });
});

const contactIconsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__tada');
        }
    });
});

let serviceIcons = document.querySelectorAll('.service-icon');
let contactIcons = document.querySelectorAll('.contact-icon');

for (let icon of serviceIcons) {
    serviceIconsObserver.observe(icon);
}

for (let icon of contactIcons) {
    contactIconsObserver.observe(icon);
}

