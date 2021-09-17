const common = () => {
  // Убираем якори из адресной строки
  const linksMenu = document.querySelectorAll('a');
  linksMenu.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      const blockId = elem.getAttribute('href').substr(1);
      document.getElementById(blockId).scrollIntoView();
    });
  });

  // Кнопка для скрола вверх
  const scrollUpButton = document.querySelector('.up'),
    title = document.querySelector('.service-title');

  document.addEventListener('scroll', () => {
    let offset = title.getBoundingClientRect().top;
    if (offset <= 100) {
      scrollUpButton.classList.add('active');
    } else {
      scrollUpButton.classList.remove('active');
    }
  });

  scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0
    });
  });
};

export default common;
