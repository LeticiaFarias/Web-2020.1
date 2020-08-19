let DisciplinaModel = require("../models/DisciplinaModel");

let disciplinas = [
  {
    idDisciplina: 0,
    nome: "CSGBD",
    curso: "SI",
    capacidade: 40,
  },
  {
    idDisciplina: 1,
    nome: "Redes",
    curso: "SI",
    capacidade: 50,
  },
  {
    idDisciplina: 2,
    nome: "WEB",
    curso: "SI",
    capacidade: 30,
  },
];
let idDisciplina = 0;

class DisciplinaService {
  static register(data) {
    let disciplina = new DisciplinaModel(
      idDisciplina++,
      data.nome,
      data.curso,
      data.capacidade
    );
    disciplinas.push(disciplina);
    return disciplina;
  }
  static list() {
    return disciplinas;
  }
  static update(idDisciplina, data) {
    for (let e of disciplinas) {
      if (e.idDisciplina == idDisciplina) {
        e.nome = data.nome;
        e.curso = data.curso;
        e.capacidade = data.capacidade;
        return e;
      }
    }
    return null;
  }
  static delete(idDisciplina) {
    for (let i = 0; i < disciplinas.length; i++) {
      if (disciplinas[i].idDisciplina == idDisciplina) {
        disciplinas.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  static retrieve(idDisciplina) {
    for (let i = 0; i < disciplinas.length; i++) {
      if (disciplinas[i].idDisciplina == idDisciplina) {
        return disciplinas[i];
      }
    }
    return {};
  }
}

module.exports = DisciplinaService;
