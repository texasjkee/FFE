const { form } = document.forms;

const addFormData = async (e) => {
  e.preventDefault();

  console.log(e.target);

  const formData = new FormData(e.target);
  const result = await axios.post('/file?',{forms: formData});
};

form.addEventListener('submit',addFormData);