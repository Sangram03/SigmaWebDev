// https://www.npmjs.com/package/mongodb

// https://www.mongodb.com/docs/drivers/node/current/

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 3000;

app.get("/a", (req, res) => {
  const todo = new Todo({
    title: "Hey first todo",
    desc: "Description of this todo",
    isDone: false,
    days: Math.floor(Math.random() * 45 + 5 * Math.random()),
  });
  todo.save();

  res.send("Hello World!");
});

app.get("/", async (req, res) => {
  let todo = await Todo.findOne({});
  res.json({ title: todo.title, decs: todo.docs });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
