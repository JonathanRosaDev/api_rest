"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _Userjs2.default.create(req.body);

      const { id, nome, email } = novoUser;
      res.json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  //index
  async index(req, res) {
    try {
      const users = await _Userjs2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      res.json(users);
    } catch (e2) {
      res.json(null);
    };
  }

  //show
  async show(req, res) {
    try {
      const user = await _Userjs2.default.findByPk(req.params.id);

      const { id, nome, email} = user;
      res.json({ id, nome, email});
    } catch (e3) {
      res.json(null);
    };
  }

  //update
  async update(req, res) {
    try {
      const user = await _Userjs2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      res.json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  //delete
  async delete(req, res) {
    try {
      const user = await _Userjs2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      await user.destroy(req.body);
      res.json(null);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}
exports. default = new UserController();
