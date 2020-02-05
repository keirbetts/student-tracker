const axios = require("axios");

exports.fetchAllStudents = () => {
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students")
    .then(({ data }) => {
      return data;
    });
};

exports.fetchOneStudent = student_id => {
  return axios
    .get(`https://nc-student-tracker.herokuapp.com/api/students/${student_id}`)
    .then(({ data }) => {
      return data;
    });
};
