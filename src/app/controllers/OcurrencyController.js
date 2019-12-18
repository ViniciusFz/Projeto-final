const Ocurrency = require("../models/Ocurrency");

module.exports = {
  async store(req, res) {
    const { user_id, student_id, data, descricao } = req.body;

    const ocurrency = await Ocurrency.create({
      user_id,
      student_id,
      data,
      descricao
    });

    res.json(ocurrency);
  }
};
