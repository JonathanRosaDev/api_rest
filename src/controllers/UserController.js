import User from '../models/User.js';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  //index
  async index(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch {
      res.json(null);
    };
  }

  //show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      res.json(user);
    } catch {
      res.json(null);
    };
  }

  //update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      const novosDados = await user.update(req.body);
      res.json(novosDados);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  //delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      await user.destroy(req.body);
      res.json(user);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}
export default new UserController();
