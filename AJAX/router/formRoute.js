const express = require('express');
const route = express.Router();

const Ajv = require('ajv');

const ajv = new Ajv({allErrors: true});

const schema = {
  type: 'object',
    properties: {
      name: {type:'string'},
      surname: {type:'string'},
      age: {type:'integer'},
      address: {
        type: 'object',
        properties: {
          street: {type: 'number'},
          // ap: {type: 'string', pattern: /^[0-9]{5}$/},
        },
          required: ['street'],
          additionalProperties: false,
      },
    },
    required: ['name', 'surname','age'],
    additionalProperties: false,
};

// const schema = {
//   type: 'object',
//     properties: {
//       name: {type: 'string'},
//       surname: {type: 'string'},
//       cardNumber: {type: 'number'}
//     },
//     required: ['name', 'surname', 'cardNumber', 'cvv', 'cardCode'];
// }


const data = {
  name: 'asd',
  surname: 'as',
  age: 123,
  address: {
    street: 'sadasd',
    ap: 12313
  }
};

const validate = ajv.compile(schema)
const valid = validate(data)

if (!valid) console.log(validate.errors)

route.post('/form', (req, res) => {
// if(!valid) {
//   res.json({status: 'validate error', errors: validate.errors})
//   return;
// }
  res.json({message: req.body.data});
})

module.exports = route;

//ve & ca" Vim;