const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { nome, email } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: "Usuário existente" });
    }
    const user = await User.create({ nome, email });

    return res.json(user);
  },
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  async show(req, res) {
    const { email } = req.params;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ erro: "Usuário inexistente" });
    }
    return res.json(user);
  },
  async update(req, res) {
    const { nome, email } = req.body;
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    if (user.email !== email) {
      if (await User.findOne({ where: { email } })) {
        return res.status(400).json({ erro: "Este email já está em uso" });
      }
    }
    await User.update({ nome, email }, { where: { id } });
    return res.json({ ok: "Atualização realizada com sucesso" });
  },
  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(400).json({ erro: "Usuário inexistente" });
    }

    await User.destroy({ where: { id } });

    res.json({ ok: "Usuário excluído com sucesso" });
  }
};
