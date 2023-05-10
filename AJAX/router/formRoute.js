const express = require('express');
const route = express.Router();

const Ajv = require('ajv');
const ajv = new Ajv({allErrors: true});

const schema = {
  type: 'object',
    properties: {
      name: {type: 'string'},
      surname: {type: 'string'},
      cardNumber: {type: 'string', pattern: '^[0-9]{16}$'},
      cvv: {type: 'string', pattern: '^[0-9]{3}$'},
      cardCode: {type: 'string', pattern: '^[0-9]{3}$'},
    },
    required: ['name', 'surname', 'cardNumber', 'cvv', 'cardCode'],
    additionalProperties: false,
}

route.post('/form', (req, res) => {
  const validate = ajv.compile(schema);
  const valid = validate(req.body.data);

  if (!valid) {
    return res.json({status: 500, errors: validate.errors})
  } else {
    return res.json({status: 200, errors: ['Everything is fine']});
  };
})

module.exports = route;