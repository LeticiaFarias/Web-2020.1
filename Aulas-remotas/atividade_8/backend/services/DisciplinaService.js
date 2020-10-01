const DisciplinaModel = require("../models/DisciplinaModel");

class DisciplinaService {
  static register(request, response) {
    DisciplinaModel.create(request.body)
      .then((disciplina) => {
        response.status(201).json(disciplina);
      })
      .catch((error) => {
        response.status(500).json(error);
      });
  }

  static list(request, response) {
    DisciplinaModel.find()
      .then((disciplina) => {
        response.status(201).json(disciplina);
      })
      .catch((error) => {
        response.status(500).json(error);
      });
  }

  static update(request, response) {
    DisciplinaModel.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    })
      .then((disciplina) => {
        response.status(201).json(disciplina);
      })
      .catch((error) => {
        response.status(500).json(error);
      });
  }

  static delete(request, response) {
    DisciplinaModel.findByIdAndRemove(request.params.id)
      .then((disciplina) => {
        response.status(201).json(disciplina);
      })
      .catch((error) => {
        response.status(500).json(error);
      });
  }

  static retrieve(request, response) {
    DisciplinaModel.findById(request.params.id)
      .then((disciplina) => {
        response.status(201).json(disciplina);
      })
      .catch((error) => {
        response.status(500).json(error);
      });
  }
}

module.exports = DisciplinaService;
