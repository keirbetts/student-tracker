const axios = require("axios");

exports.fetchAllStudents = (gradIsVisible) => {
  return axios
    .get(`https://nc-student-tracker.herokuapp.com/api/students?graduated=${gradIsVisible}`)
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

exports.fetchAllBlocks = () => {
  return axios.get('https://nc-student-tracker.herokuapp.com/api/blocks')
  .then(({data}) => {
    return data;
  })
}

exports.fetchStudentsForBlock = (block_slug) => {
  return axios.get(`https://nc-student-tracker.herokuapp.com/api/students?block=${block_slug}`)
  .then(({data}) => {
    console.log(data);
    
    return data;
  })
}

exports.postStudent = (student) => {
  return axios.post('https://nc-student-tracker.herokuapp.com/api/students', student)
  .then(({data}) => {
    console.log(data, "data after post");
    
    return data;
  })
}

