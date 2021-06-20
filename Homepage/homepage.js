const navSlide = () => {
  const menubtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('ul');
  const navLinks = document.querySelectorAll('ul li');

  menubtn.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link,index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
    });

    menubtn.classList.toggle('toggle');
  });
}

navSlide();
