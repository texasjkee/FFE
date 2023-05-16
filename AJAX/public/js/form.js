const { form } = document.forms;
const addButton = document.getElementById('add');

const clearFormInputs = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.value = '');
}

const addFormData = async (e) => {
  e.preventDefault();

  const formData= new FormData(form);
  const values = Object.fromEntries(formData.entries());

  const result = await axios.post('/form?', {data: values})
  const status = result.data.status;

  console.log('Server status:', status);
  
  if (status === 200) {
    console.log('No errors');
  } else {
    result.data.errors.forEach(err => console.log(err.message));
  }
  
  clearFormInputs();
};

form.addEventListener('submit',addFormData);