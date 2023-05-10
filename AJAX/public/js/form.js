const {form} = document.forms;
const addButton = document.getElementById('add');

const addFormData = async (e) => {
  e.preventDefault();

  const formData= new FormData(form);
  const values = Object.fromEntries(formData.entries());

  const result = await axios.post('/form?', {data: values})
  console.log(result.data.status);
  result.data.errors.forEach(err => console.log(err));
};

const clearFormInputs = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.value = '');
}

form.addEventListener('submit',addFormData);
addButton.addEventListener('click',clearFormInputs);