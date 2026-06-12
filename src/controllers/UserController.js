import User from '../models/User.js';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

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
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      res.json(users);
    } catch {
      res.json(null);
    };
  }

  //show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email} = user;
      res.json({ id, nome, email});
    } catch {
      res.json(null);
    };
  }

  //update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

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
      const user = await User.findByPk(req.userId);

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
export default new UserController();
