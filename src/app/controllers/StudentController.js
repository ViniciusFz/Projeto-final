const Student = require("../models/Student");

module.exports = {
  async store(req, res) {
    const { matricula, nome, email } = req.body;
    const studentExists = await Student.findOne({
      where: { email }
    });
    if (studentExists) {
      return res.status(400).json({ error: "Estudante existente" });
    }
    const student = await Student.create({ matricula, nome, email });

    return res.json(student);
  },
  async index(req, res) {
    const students = await Student.findAll();

    return res.json(students);
  },
  async show(req, res) {
    const { email } = req.params;
    const student = await Student.findOne({ where: { email } });
    if (!student) {
      return res.status(400).json({ erro: "Estudante inexistente" });
    }
    return res.json(student);
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

    const student = await Student.findOne({ where: { id } });
    if (!student) {
      return res.status(400).json({ erro: "Estudante inexistente" });
    }

    await Student.destroy({ where: { id } });

    res.json({ ok: "Estudante excluído com sucesso" });
  }
};
