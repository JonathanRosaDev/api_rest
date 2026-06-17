"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

var _PhotoControllerjs = require('../controllers/PhotoController.js'); var _PhotoControllerjs2 = _interopRequireDefault(_PhotoControllerjs);

const router = _express.Router.call(void 0, );

router.post('/',_loginRequiredjs2.default, _PhotoControllerjs2.default.store);

exports. default = router;
