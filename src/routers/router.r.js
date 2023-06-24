const express = require('express');
const router = express.Router();
const bookshopManager = require('../controllers/bookshop_manager.c');
const { check } = require('express-validator');
const accountManager = require('../controllers/account_manager.c');
const passport = require('passport');



router.get('/login', accountManager.getLogin)

router.post('/login', accountManager.postLogin);

router.get('/register', accountManager.getRegister)

router.post('/register', accountManager.postRegister)

router.get('/logout', accountManager.getLogout);

router.get('/account/setting', accountManager.getAccountSetting);

router.post('/account/setting', accountManager.postAccountSetting);

router.get('/account/password', accountManager.getPasswordChanging);

router.post('/account/password', accountManager.postPasswordChanging);

// ----------------------------------------------
router.get('/', bookshopManager.getHome);

// ---------------------------------------------
router.get('/search', bookshopManager.getSearch);
router.post('/search', bookshopManager.postSearch);

// ---------------------------------------------
router.get('/import', bookshopManager.getImports);

router.get('/import/create', bookshopManager.getImportCreate);

router.post('/import/create', bookshopManager.postImportCreate);

router.post('/import/create/add-book', bookshopManager.postImportAddBook);

router.get('/import/update', bookshopManager.getImportUpdate);

router.post('/import/update', bookshopManager.postImportUpdate);

// ---------------------------------------------
router.get('/invoice', bookshopManager.getInvoices);

router.get('/invoice/create', bookshopManager.getInvoiceCreate);

router.post('/invoice/create', bookshopManager.postInvoiceCreate);

router.get('/invoice/update', bookshopManager.getInvoiceUpdate);

router.post('/invoice/update', bookshopManager.postInvoiceUpdate);

router.get('/invoice/add-book-to-invoice', bookshopManager.getAddBookToInvoice);

router.post('/invoice/add-book-to-invoice', bookshopManager.postAddBookToInvoice);
// ---------------------------------------------
router.get('/receipt', bookshopManager.getReceipts);

router.post('/receipt/create', bookshopManager.postReceiptCreate);
// ---------------------------------------------
router.get('/report', bookshopManager.getReports);

// ---------------------------------------------
router.get('/regulation', bookshopManager.getRegulations);

router.get('/regulation/update', bookshopManager.getRegulationUpdate);

router.post('/regulation/update', bookshopManager.postRegulationUpdate);


module.exports = router;