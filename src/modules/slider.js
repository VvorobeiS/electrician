const slider = () => {
  const slider = document.querySelector('.top-slider'),
    slide = slider.querySelectorAll('.item'),
    slideTable = slider.querySelectorAll('.table'),
    slickDots = slider.querySelector('.slick-dots');

  slide.forEach(() => {
    const li = document.createElement('li');
    slickDots.append(li);
  });

  const dot = slickDots.querySelectorAll('li');
  dot[0].classList.add('slick-active');

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    if (!elem[index].classList.contains(strClass)) {
      elem[index].style.opacity = '0';
    }
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
    if (!elem[index].classList.contains('slick-active')) {
      let op = 0;
      function startAnimation() {
        if (op !== 39) {
          requestAnimationFrame(startAnimation);
        }
        op++;
        elem[index].style.opacity = `${op / 40}`;
      }
      startAnimation();
    }
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'active');
    prevSlide(slideTable, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'active');
    nextSlide(slideTable, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');
  };

  const startSlide = (time = 4000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    if (!target.matches('li')) return;

    prevSlide(slide, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');

    if (target.matches('li')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');
  });

  slider.addEventListener('mouseover', (event) => {
    if (event.target.matches('li')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (event) => {
    if (event.target.matches('li')) {
      startSlide();
    }
  });

  startSlide();
};

export default slider;
