import {UI} from './UI.js';

export const changePage = (e) => {
  if(e.target.id === 'pageOne') {
    UI.SIDE_CONTROL_PAGE_1.style.display = 'block';
    UI.SIDE_CONTROL_PAGE_2.style.display = 'none';
  } else {
    UI.SIDE_CONTROL_PAGE_1.style.display = 'none';
    UI.SIDE_CONTROL_PAGE_2.style.display = 'block';
  };

  UI.SIDE_CONTROLS_BTNS.forEach(el => el.classList.toggle('active'));
};