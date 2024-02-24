const scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) { // Changez 100 à la position désirée pour afficher le bouton
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});