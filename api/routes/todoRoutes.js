"use strict";

// create App function
module.exports = function (app) {
  var todoList = require("../controllers/todoController");
  var userHandler = require("../controllers/authController");

  // todoList Routes

  // get and post request for /todos endpoints
  app.route("/todos").get(todoList.listAllTodos).post(todoList.createNewTodo);

  // put and delete request for /todos endpoints
  app.route("/todo/:id").put(todoList.updateTodo).delete(todoList.deleteTodo);

  // post request for user registration app

  app.route("/auth/register").post(userHandler.register);

  // post request for user log in app

  app.route("/auth/sign_in").post(userHandler.signIn);
};
