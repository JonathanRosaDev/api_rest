import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'jonathan',
      sobrenome: 'rosa',
      email: 'jonathan@email.com',
      idade: 35,
      peso: 81,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
