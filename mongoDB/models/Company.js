const mongoose = require('mongoose');

const company = mongoose.Schema({
    state: { type: String, required: true },
    city: { type: String, required: true },
    name: { type: String, required: true },
    mc: { type: Number, required: true },
    phone: { type: Number, required: true },
    fax: { type: Number, required: false },
    since: { type: Number, required: false },
});

// const companySchema = mongoose.model('Company', company);

// module.exports = companySchema;