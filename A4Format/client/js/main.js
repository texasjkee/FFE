import {UI} from './modules/UI.js';
import {changePage} from './modules/changePage.js';
import {cropPhoto} from './modules/cropPhoto.js';

const addition = () => UI.QUANTITY.value = Number(UI.QUANTITY.value) + 1;
const subtraction = () => UI.QUANTITY.value = Number(UI.QUANTITY.value) - 1;
const uploadPhoto = () => UI.HIDDEN_UPLOAD.click();

const chooseFormat = () => {
  UI.FORMATS.forEach(format  => {
    format.addEventListener('click', (e) => {
      for(format of UI.FORMATS) format.classList.remove('selectedFormat');
      e.target.classList.add('selectedFormat');
    });
  });
};

chooseFormat();

const returnDefaultValue = () => {
  // UI.FORMATS[0].checked = true;
  UI.QUANTITY.value = 1;
};

UI.MINUS_BTN.addEventListener('click', () => {
  if(UI.QUANTITY.value === '1') return;
  subtraction();
});
UI.PLUS_BTN.addEventListener('click', addition);
UI.UPLOAD_BTN.addEventListener('click', uploadPhoto);
UI.HIDDEN_UPLOAD.addEventListener('change', cropPhoto);
UI.SIDE_CONTROLS_BTNS[0].addEventListener('click', (e) => changePage(e));
UI.SIDE_CONTROLS_BTNS[1].addEventListener('click', (e) => changePage(e));