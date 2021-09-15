const accordeon = () => {
  const accordeon = document.querySelector('.accordeon'),
    element = accordeon.querySelectorAll('.element'),
    title = accordeon.querySelectorAll('.title'),
    elementContent = accordeon.querySelectorAll('.element-content');

  const toggleAccordeon = (index) => {
    for (let i = 0; i < element.length; i++) {
      if (index === i) {
        element[i].classList.add('active');
        elementContent[i].classList.add('active');
      } else {
        element[i].classList.remove('active');
        elementContent[i].classList.remove('active');
      }
    }
  };

  title.forEach((elem, i) => {
    elem.addEventListener('click', () => {
      toggleAccordeon(i);
    });
  });
};

export default accordeon;
