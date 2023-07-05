const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 4000;

const authRouter = require('./routers/authRouter');

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/JWT')
      .then(()=> console.log('Connected to mongoDB'));

    app.listen(PORT, () => console.log(`Server running on ${PORT}`)); 
  } catch (error) {
   console.log(error); 
  };
};

start();