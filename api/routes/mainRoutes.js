"use strict";

// create App function
module.exports = function (app) {
  var userHandler = require("../controllers/userController");
  var authHandler = require("../controllers/authController");
  var todoList = require("../controllers/todoController");

  // --- userHandler Routes ---
  // get and post request for /users endpoints
  app
    .route("/users")
    .get(userHandler.listAllUsers)
    .post(userHandler.createNewUser);

  // put and delete request for /members endpoints
  app
    .route("/user/:id")
    .put(userHandler.updateUser)
    .delete(userHandler.deleteUser);

  // get and post request for /todos endpoints
  app
    .route("/todos")
    .get(todoList.listAllTodos)
    .post(authHandler.loginRequired, todoList.createNewTodo); // update with login handler

  // put and delete request for /todos endpoints
  app
    .route("/todo/:id")
    .put(authHandler.loginRequired, todoList.updateTodo) // update with login handler
    .delete(authHandler.loginRequired, todoList.deleteTodo); // update with login handler

  // --- authHandler Routes ---
  // post request for user registration
  app.route("/auth/register").post(authHandler.register);

  // post request for user log in
  app.route("/auth/sign_in").post(authHandler.signIn);
};
