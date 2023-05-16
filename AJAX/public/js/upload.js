const { form } = document.forms;

const addFormData = async (e) => {
  e.preventDefault();

  const inputFiles = document.getElementById('myFile').files;

  const formData = new FormData();
  
  formData.append('file', inputFiles[0]);
  
  //TO_DO: Don't need it.
  // const contentType = { 
  //   headers: {
  //     'content-type': 'multipart/form-data'
  //   }
  // }
  
  const result = await axios.post('/file?', formData);
};

form.addEventListener('submit',addFormData);