const countStudentsInBlock = (students) => {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        count++;
    }

    return count;
}

const countStudentsOnCourse = (students) => {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        if (students.currentBlock !== "grad") {
            count++;
        }
    }

    return count;
}

module.exports = { countStudentsInBlock, countStudentsOnCourse  };