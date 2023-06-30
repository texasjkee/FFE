import {UI} from './modules/UI.js';
import {changePage} from './modules/changePage.js';
import {cropPhoto} from './modules/cropPhoto.js';
import {chooseFormat} from './modules/chooseFormat.js';

const addition = () => UI.QUANTITY.value = Number(UI.QUANTITY.value) + 1;
const subtraction = () => UI.QUANTITY.value = Number(UI.QUANTITY.value) - 1;
const uploadPhoto = () => UI.HIDDEN_UPLOAD.click();

//Runner
chooseFormat();

UI.MINUS_BTN.addEventListener('click', () => {
  if(UI.QUANTITY.value === '1') return;
  subtraction();
});
UI.PLUS_BTN.addEventListener('click', addition);
UI.UPLOAD_BTN.addEventListener('click', uploadPhoto);
UI.HIDDEN_UPLOAD.addEventListener('change', cropPhoto);
UI.SIDE_CONTROLS_BTNS[0].addEventListener('click', (e) => changePage(e));
UI.SIDE_CONTROLS_BTNS[1].addEventListener('click', (e) => changePage(e));