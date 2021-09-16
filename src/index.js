'use strict';

import common from './modules/common';
import toggleModal from './modules/toggleModal';
import slider from './modules/slider';
import carousel from './modules/carousel';
import accordeon from './modules/accordeon';
import validationInputs from './modules/validationInputs';
import sendForm from './modules/sendForm';

// Общие функции
common();

// Модальное окно
toggleModal();

// Слайдер
slider();

// Карусель
carousel();

// Аккордеон
accordeon();

// Валидация
validationInputs();

// Отправка формы
sendForm();
