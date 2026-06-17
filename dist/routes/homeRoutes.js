"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _HomeControllerjs = require('../controllers/HomeController.js'); var _HomeControllerjs2 = _interopRequireDefault(_HomeControllerjs);

const router = _express.Router.call(void 0, );

router.get('/', _HomeControllerjs2.default.index);

exports. default = router;
