const { Router } = require('express');
const companyControllers = require('../controller/companyController');
const router = Router();

router.route('/company').post(companyControllers.createNewCompany);
router.route('/companies').get(companyControllers.getAllCompanies)
router.route('/companies/:id').get(companyControllers.getCompanyById);
router.route('/companies/:id').put(companyControllers.updateCompany);
router.route('/companies/:id').delete(companyControllers.deleteCompany);

module.exports = router;