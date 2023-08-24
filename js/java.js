function toggleText() {
    var aboutText = document.querySelector('.about-text');
    var viewToggle = document.getElementById('viewToggle');

    if (aboutText.classList.contains('partial')) {
      aboutText.classList.remove('partial');
      viewToggle.textContent = 'View Less';
    } else {
      aboutText.classList.add('partial');
      viewToggle.textContent = 'View More';
    }
  }
