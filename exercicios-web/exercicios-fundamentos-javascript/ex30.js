const getBestStudent = students => {
    const studentsNormalized = []

    for (student in students) {
        subjects = students[student].length 
        studentsNormalized.push({
            name: student,
            mean: students[student].reduce((acc, actGrade) => acc += actGrade) / subjects
        })
    }

    const bestStudent = studentsNormalized.reduce((prevStudent, actStudent) => prevStudent.mean < actStudent.mean ? prevStudent = actStudent : prevStudent)

    return bestStudent    
}

const students = {
    Joao: [8, 7.6, 8.9, 6],
    Maria: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}

console.log(getBestStudent(students))