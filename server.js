// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.use(express.json());

// const loggingMiddleware = (req, res, next) => {
//   console.log(`${req.method} - ${req.url} - ${new Date()}`);
//   next();
// };

// app.use(loggingMiddleware);

// const users = [
//   { id: 1, name: "hasan", age: 17 },
//   { id: 2, name: "sara", age: 15 },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello World!");
//   console.log("Home Page");
// });

// app.get("/users", (req, res) => {
//   res.send(users);
// });

// app.get("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const findUser = users.find((user) => user.id === Number(id));
//   if (!findUser) {
//     res.send("User not found!");
//   }
//   res.send(findUser);
// });

// app.post("/add/user", (req, res) => {
//   const { name, age } = req.body;

//   const user = {
//     id: users.length + 1,
//     name,
//     age,
//   };

//   users.push(user);
//   res.status(201).send("User successfully created and added to Users!");
// });

// app.patch("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, age } = req.body;
//   const user = {
//     id: id,
//     name: name || user.name,
//     age: age || user.age,
//   };

//   const index = users.findIndex((user) => user.id === Number(id));

//   users.splice(index, 1, user);

//   res.status(201).send("User successfully updated!");
// });

// app.listen(3000);
