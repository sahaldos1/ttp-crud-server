var express = require("express");
var router = express.Router();
const { Student } = require("../database/models");

/* GET all students. */
// /api/students
router.get("/", async (req, res, next) => {
  // try to get students object from database
  try {
    // students will be the result of the Campus.findAll promise
    const students = await Student.findAll();
    // if students is valid, it will be sent as a json response
    console.log(students);
    res.status(200).json(students);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { campusId } = req.body;
  const updatedObj = { campusId: campusId };
  try {
    const student = await Student.findByPk(id);
    await student.set(updatedObj);
    const updatedStudent = await student.save();
    res.status(201).send(updatedStudent);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  Object.keys(req.body).forEach((key) =>
    req.body[key] === "" ? delete req.body[key] : req.body[key]
  );

  try {
    // Create a new student on the database
    const newStudent = await Student.create(req.body);

    // The database should return a student
    // Send that student as a json to the client
    res.status(201).send(newStudent);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
