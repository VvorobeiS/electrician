const toggleModal = () => {
  const modalOverlay = document.querySelector('.modal-overlay'),
    modalCallback = document.querySelector('.modal-callback'),
    btnModal = document.querySelectorAll('[data-href=modal-callback]'),
    btnUp = document.querySelector('.up'),
    body = document.querySelector('body');

  btnModal.forEach((elem) => {
    elem.addEventListener('click', () => {
      let op = 0;
      modalOverlay.style.display = 'block';
      modalCallback.style.opacity = '0';
      modalCallback.style.display = 'block';
      btnUp.style.display = 'none';
      body.style.overflow = 'hidden';
      function startAnimation() {
        if (op !== 29) {
          requestAnimationFrame(startAnimation);
        }
        op++;
        modalCallback.style.opacity = `${op / 30}`;
      }
      startAnimation();
    });
  });

  modalOverlay.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('modal-close__img')) {
      modalOverlay.style.display = 'none';
      modalCallback.style.opacity = '0';
      modalCallback.style.display = 'none';
      btnUp.style.display = 'initial';
      body.style.overflow = 'initial';
    } else {
      target = target.closest('.modal-callback');
      if (!target) {
        modalOverlay.style.display = 'none';
        modalCallback.style.opacity = '0';
        modalCallback.style.display = 'none';
        btnUp.style.display = 'initial';
        body.style.overflow = 'initial';
      }
    }
  });
};

export default toggleModal;
