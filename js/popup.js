const popupLinks = document.querySelectorAll('.popup-link');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('#close-btn');

popupLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    popup.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

