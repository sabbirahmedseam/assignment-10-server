const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const courses = require("./data/courses.json");

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/", (req, res) => {
  res.send("Everything is prepared");
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectCourse = courses.find((course) => course.id === id);
  res.send(selectCourse);
});

app.listen(port, () => {
  console.log("server side running", port);
});
seam///