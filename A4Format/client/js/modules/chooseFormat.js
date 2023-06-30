import {UI} from './UI.js';

export const chooseFormat = () => {
  UI.FORMATS.forEach(format  => {
    format.addEventListener('click', (e) => {
      for(format of UI.FORMATS) format.classList.remove('selectedFormat');
      e.target.classList.add('selectedFormat');
    });
  });
};