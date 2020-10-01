var express = require("express");
var router = express.Router();

var DisciplinaService = require("../services/DisciplinaService");

router.get("/list", function (request, response, next) {
  DisciplinaService.list(request, response);
});

router.post("/register", function (request, response, next) {
  DisciplinaService.register(request, response);
});

router.put("/update/:id", function (request, response, next) {
  DisciplinaService.update(request, response);
});

router.delete("/delete/:id", function (request, response, next) {
  DisciplinaService.delete(request, response);
});

router.get("/retrieve/:id", function (request, response, next) {
  DisciplinaService.retrieve(request, response);
});

module.exports = router;
