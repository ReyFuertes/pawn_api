var express = require('express');
var router = express.Router();
var cors = require('cors');

/**
 * accounts 
 */
var accounts = require('./accounts_routes.js');
router.get('/account', accounts.getOne);
router.get('/accounts/search', accounts.search);
router.get('/account/edit', accounts.edit);
router.get('/accounts/list', accounts.list);
router.post('/account/new', accounts.new);
router.patch('/accounts/update/:id', accounts.update);
router.delete('/account/delete/:id', accounts.delete);

/**
 * pawns 
 */
var pawns = require('./pawns_routes.js');
router.get('/pawn/search', pawns.search);
router.get('/pawn/edit', pawns.edit);
router.get('/pawn/list', pawns.list);
router.post('/pawn/new', pawns.new);
router.patch('/pawn/update/:id', pawns.update);
router.delete('/pawn/delete/:id', pawns.delete);

/**
 * items 
 */
var items = require('./items_routes.js'); 
router.get('/item', items.getOne);
router.get('/item/getTypes', items.getTypes);
router.get('/item/search', items.search);
router.get('/item/edit', items.edit);
router.get('/items/list', items.list);
router.post('/item/new', items.new);
router.patch('/item/update/:id', items.update);
router.delete('/item/delete/:id', items.delete);

/**
 * renewals 
 */
var renewals = require('./renewals_routes.js');
router.get('/renewal/list', renewals.list);
router.post('/renewal/new', renewals.new);
router.get('/renewal/edit', renewals.edit);
router.patch('/renewal/update/:id', renewals.update);
router.delete('/renewal/delete/:id', renewals.delete);

/**
 * redemptions 
 */
var redemptions = require('./redemptions_routes.js');
router.get('/redemptions/list', redemptions.list);
router.post('/redemptions/new', redemptions.new);
router.patch('/redemptions/update/:id', redemptions.update);
router.delete('/redemptions/delete/:id', redemptions.delete);

/**
 * user auth 
 */
var user = require('./user_routes.js');
router.post('/auth/login', user.login);

router.get('/', function (req, res, next) {
   res.send('<div><h1>Welcome to Pawn API.</h1><p>Author: John Hitler!</p></div>');
});


module.exports = router;
