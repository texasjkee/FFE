const express = require('express');
const mongoose = require('mongoose');
const server = express();

const PORT = 3000;

const companyRoute = require('./router/companyRoute');

//Middleware.
server.use(express.json());

//Router.
server.use(companyRoute);

//Global Error Handler. IMPORTANT  function params MUST start with err.
server.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    
    res.status(500).json({
      message: 'Something went really wrong'
    });
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

mongoose.connect('mongodb://127.0.0.1:27017/Truks').then(()=> {
     console.log('Connected to mongoDB');
}).catch((error) => {
    console.log(error);
});