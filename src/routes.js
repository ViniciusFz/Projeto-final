const express = require("express");

const UserController = require("./app/controllers/UserController");
const StudentController = require("./app/controllers/StudentController");
const OcurrencyController = require("./app/controllers/OcurrencyController");

const routes = express.Router();

routes.post("/user", UserController.store);
routes.get("/users", UserController.index);
routes.get("/users/:email", UserController.show);
routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.delete);

routes.post("/student", StudentController.store);

routes.post("/ocurrency", OcurrencyController.store);

module.exports = routes;
