// SMOOTH SCROLL

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const targetId = this.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    window.scrollTo({

      top: targetSection.offsetTop - 70,

      behavior: 'smooth'

    });

  });

});


// HEADER SHADOW

window.addEventListener('scroll', () => {

  const header = document.querySelector('header');

  if(window.scrollY > 50){

    header.style.boxShadow =
      '0 4px 20px rgba(0,0,0,0.3)';

  }

  else{

    header.style.boxShadow = 'none';

  }

});