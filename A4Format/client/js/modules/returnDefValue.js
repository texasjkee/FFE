import {UI} from './UI.js';

export const returnDefaultValueOnPage = () => {
  UI.FORMATS.forEach(el => {
    if (el.textContent !== 'Free') el.classList.remove('selectedFormat');
    if (el.textContent === 'Free') el.classList.add('selectedFormat');
  });
  UI.QUANTITY.value = 1;
};