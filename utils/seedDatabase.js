const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
    }),
    Student.create({ firstName: "Daniel" }),
    Student.create({ firstName: "Sally", campusId: 1 }),
    Student.create({
      firstName: "Paul",
      lastName: "Peters",
      gpa: 4.0,
      campusId: 3,
    }),
    Student.create({
      firstName: "Peter",
      gpa: 3.5,
      campusId: 2,
    }),
    Student.create({
      firstName: "Jim",
      lastName: "Benson",
    }),
  ]);
};

module.exports = seedDatabase;
