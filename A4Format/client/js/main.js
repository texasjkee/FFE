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

const cropPhoto = () => {
  document.querySelector('.image-workspace').innerHTML = `<img src="" alt="">`

  const imageWorspace = document.querySelector('.image-workspace img');
  const file = UI.HIDDEN_UPLOAD.files[0];
  const url = window.URL.createObjectURL(new Blob([file], { type : 'image/jpg' }));
  imageWorspace.src = url;

  UI.IMAGE_WORKSPACE_SAPN.style.display = 'none';
  UI.PREVIEW_CONTAINER_SPAN.style.display = 'none';

  const options = {
      dragMode: 'move',
      preview: '.img-preview',
      viewMode: 2,
      modal: false,
      background: false,
      ready: () => {
        UI.ROTATE[0].onclick = () => cropper.rotate(45)
        UI.ROTATE[1].onclick = () => cropper.rotate(-45)

        let flipX = -1
        let flipY = -1

        UI.FLIP[0].onclick = () => {
          cropper.scale(flipX, 1)
          flipX = -flipX
        };
        UI.FLIP[1].onclick = () => {
          cropper.scale(1, flipY)
          flipY = -flipY
        };

        UI.ASPECT_RATIO[0].onclick = () => cropper.setAspectRatio(1.7777777777777777);
        UI.ASPECT_RATIO[1].onclick = () => cropper.setAspectRatio(1.3333333333333333);
        UI.ASPECT_RATIO[2].onclick = () => cropper.setAspectRatio(1);
        UI.ASPECT_RATIO[3].onclick = () => cropper.setAspectRatio(0.6666666666666666);
        UI.ASPECT_RATIO[4].onclick = () => cropper.setAspectRatio(0);

        UI.ACTION_BUTTON[1].onclick = () => {
            UI.ACTION_BUTTON[1].innerText = '...';
            cropper.getCroppedCanvas().toBlob(blob => {
                const downloadUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = UI.HIDDEN_UPLOAD.files[0].name;
                UI.ACTION_BUTTON[1].innerText = 'Send';
            })
        };
      }
  };
  const cropper = new Cropper(imageWorspace, options);
};

const sendPhoto = async () => {
  const info = {
    format: getFormat(),
    quantity: UI.QUANTITY.value,
    created: new Date(),
  };

  const data = new FormData();
  data.append('photo', UI.HIDDEN_UPLOAD.files[0]);
  data.append('info', JSON.stringify(info));

  await axios.post('/photo', info);

  returnDefaultValue();
};

UI.MINUS_BTN.addEventListener('click', () => {
  if(UI.QUANTITY.value === '1') return;
  subtraction();
});
UI.PLUS_BTN.addEventListener('click', addition);
UI.SEND_BTN.addEventListener('click', sendPhoto);
UI.UPLOAD_BTN.addEventListener('click', uploadPhoto);
UI.HIDDEN_UPLOAD.addEventListener('change', cropPhoto);

//TODO: rewrite in one function
UI.SIDE_CONTROLS_SHIFTER[0].onclick = () => {
  UI.SIDE_CONTROL_PAGE_1.style.display = 'block'
  UI.SIDE_CONTROL_PAGE_2.style.display = 'none'
  UI.SIDE_CONTROLS_SHIFTER[0].classList.add('active')
  UI.SIDE_CONTROLS_SHIFTER[1].classList.remove('active')
};

UI.SIDE_CONTROLS_SHIFTER[1].onclick = () => {
  UI.SIDE_CONTROL_PAGE_1.style.display = 'none'
  UI.SIDE_CONTROL_PAGE_2.style.display = 'block'
  UI.SIDE_CONTROLS_SHIFTER[0].classList.remove('active')
  UI.SIDE_CONTROLS_SHIFTER[1].classList.add('active')
};