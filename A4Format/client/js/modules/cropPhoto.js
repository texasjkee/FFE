import {UI} from './UI.js';

export const cropPhoto = () => {
  document.querySelector('.image-workspace').innerHTML = `<img src="" alt="">`

  const imageWorkspace = document.querySelector('.image-workspace img');
  const file = UI.HIDDEN_UPLOAD.files[0];
  const url = window.URL.createObjectURL(new Blob([file], { type : 'image/jpg' }));
  imageWorkspace.src = url;

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

      UI.ACTION_BUTTON[1].onclick = async () => {
          UI.ACTION_BUTTON[1].innerText = '...';

          const transForms = Array.from(UI.FORMATS);
          const format = transForms.find(el => el.classList[1] === 'selectedFormat').textContent;

          const info = {
            originalName: UI.HIDDEN_UPLOAD.files[0].name,
            quantity: UI.QUANTITY.value,
            created: new Date(),
            format,
          };

          cropper.getCroppedCanvas().toBlob(async blob => {
            const data = new FormData();
            data.append('photo', blob);
            data.append('info', JSON.stringify(info));

            await  axios.post('/addPhoto', data);

            UI.ACTION_BUTTON[1].innerText = 'Send';
            
            //TODO: clear imageWorkspace
            // imageWorkspace.src = '';
          });
      };
    }
  };
  const cropper = new Cropper(imageWorkspace, options);
};
