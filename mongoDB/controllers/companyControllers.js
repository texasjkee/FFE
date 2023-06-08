const companyModel = require('../models/Company');

exports.getAllCompanies = async (req, res, next) => {
    try{
        const companies = await companyModel.find({});
        res.status(200).json({companies});
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getCompanyById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const company = await companyModel.findById(id);
        res.status(200).json({company});
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.updateCompany = async (req, res, next) => {
    try {
        const {id} = req.params;
        const company = await companyModel.findByIdAndUpdate(id, req.body);
        console.log(id, req.body);
        
        if (!company) {
            return res.status(404). json({message: `connot find any company with Id ${id}`})            
        };
        res.status(200).json({company});
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.createNewCompany = async (req, res, next) => {
    try {
        await companyModel.create(req.body);
        res.status(201).json({message: 'Company created'});
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.deleteCompany = async (req, res, next) => {
    try {
        const {id} = req.params;
        const company = await companyModel.findByIdAndDelete(id);

        if (!company) {
            return res.status(404). json({message: `connot find any company with Id ${id}`})            
        };

        res.status(200).json({company});
    } catch (error) {
        console.log(error);
        next(error);
    };
};