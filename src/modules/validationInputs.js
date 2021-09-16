/* eslint-disable */
const validationInputs = () => {
  const inputsUserName = document.querySelectorAll('[name="fio"]');
  const inputsUserPhone = document.querySelectorAll('[name="tel"]');

  inputsUserName.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^А-ЯЁ а-яё]/, '');
      item.value = item.value.replace(/\ +/g, ' ');
      item.value = item.value.replace(/\-+/g, '-');
    });
    item.addEventListener('blur', () => {
      item.value = item.value.replace(/[^А-ЯЁ а-яё-]/g, '');
      item.value = item.value.replace(/[\s\-]+$/g, '');
      item.value = item.value.replace(/^[\s\-]+/g, '');
      item.value = item.value.replace(/^[\s\ -]+/g, '');
      const string = item.value.split(/[\s,]/);
      const newString = [];
      string.forEach((elem) => {
        elem = elem.charAt(0).toUpperCase() + elem.slice(1);
        newString.push(elem);
      });
      item.value = newString.join(' ');
    });
  });

  inputsUserPhone.forEach((item) => {
    // item.setAttribute(`pattern`, `^8\\d{10}`);
    item.setAttribute(`maxlength`, `12`);
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^+0-9]/, '');
      item.value = item.value.replace(/\-+/g, '');
      item.value = item.value.replace(/\++/g, '+');
      item.value = item.value.replace(/\(+/g, '');
      item.value = item.value.replace(/\)+/g, '');
      item.value = item.value.replace(/^\-+/g, '');
      item.value = item.value.replace(/^\(+/g, '');
      item.value = item.value.replace(/^\)+/g, '');
    });
    item.addEventListener('blur', () => {
      item.value = item.value.replace(/[^+0-9]/g, '');
      item.value = item.value.replace(/\-+$/g, '');
      item.value = item.value.replace(/\(+$/g, '');
      item.value = item.value.replace(/\)+$/g, '');
    });
  });
};

export default validationInputs;
