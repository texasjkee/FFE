import {UI} from './modules/UI.js';

const addition = () => UI.QUANTITY.value = Number(UI.QUANTITY.value) + 1;
const subtraction = () => UI.QUANTITY.value = Number(UI.QUANTITY.value) - 1;

const uploadPhoto = () => UI.HIDDEN_UPLOAD.click();

const getFormat = () => {
  for(let format of UI.FORMATS) {
    if(format.checked) return format.value;
  };
};

const returnDefaultValue = () => {
  UI.FORMATS[0].checked = true;
  UI.QUANTITY.value = 1;
};

const sendPhoto = async () => {
  const info = {
    format: getFormat(),
    quantity: UI.QUANTITY.value,
    created: new Date(),
  };

  const data = new FormData();
  // console.log(data);
  data.append('photo', UI.HIDDEN_UPLOAD.files[0]);
  data.append('info', JSON.stringify(info));

  await axios.post('/photo', data);

  returnDefaultValue();
};


UI.MINUS_BTN.addEventListener('click', () => {
  if(UI.QUANTITY.value === '1') return;
  subtraction();
});
UI.PLUS_BTN.addEventListener('click', addition);
UI.SEND_BTN.addEventListener('click', sendPhoto);
UI.UPLOAD_BTN.addEventListener('click', uploadPhoto);