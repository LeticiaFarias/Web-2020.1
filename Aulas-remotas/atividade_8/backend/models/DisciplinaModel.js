const mongoose = require("mongoose");

const DisciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true, max: 150 },
  curso: { type: String, required: true, max: 100 },
  capacidade: { type: Number, required: true, max: 200 },
});

const DisciplinaModel = mongoose.model("Disciplinas", DisciplinaSchema);

module.exports = DisciplinaModel;
required: true;
