import {UI} from './UI.js';

export const returnDefaultValueOnPage = () => {
  const previewContainer = document.querySelector('.img-preview');
  const cropperImg = document.querySelector('.cropper-hidden');
  const cropperContainer = document.querySelector('.cropper-container');
  const IW = document.querySelector('.image-workspace');

  UI.IMAGE_WORKSPACE_SAPN.style.display = 'block';
  UI.PREVIEW_CONTAINER_SPAN.style.display = 'block';
  previewContainer.firstChild.style.display = 'none';
  cropperImg.style.display = 'none';
  cropperContainer.remove();

  const span = document.createElement('span');
  span.textContent = 'Image Work Space';
  IW.append(span);

  UI.FORMATS.forEach(el => {
    if (el.textContent !== 'Free') el.classList.remove('selectedFormat');
    if (el.textContent === 'Free') el.classList.add('selectedFormat');
  });
  UI.QUANTITY.value = 1;
};