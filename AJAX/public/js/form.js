//Get UI
const form = document.querySelector('#form');

const data = {
  name: 'John',
  surname: 'Smit',
  cardNumber: 1234567890123456,
  cvv: 122,
  cardCode: 231
}

//Controller
const addFormData = async (e) => {
  e.preventDefault();

  const result = await axios.post('/form', { data });
  console.log(result.data.message);
};

//Runner
form.addEventListener('submit',addFormData);