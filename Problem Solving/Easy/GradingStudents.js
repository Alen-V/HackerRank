function gradingStudents(grades, fiveMultiple=0) {
    return grades.map(grade => {
        if (grade < 38) 
            return grade
        else if (grade < 100) {
            const splitGrade = grade.toString().split("")
            const [tenthGrade, onesGrade] = [+splitGrade[0] * 10, +splitGrade[1]]
                if (onesGrade >= 8) 
                    fiveMultiple = tenthGrade + 10
                else if (onesGrade > 2 && onesGrade < 5)
                    fiveMultiple = tenthGrade + 5
                else
                    fiveMultiple = tenthGrade + onesGrade

            if (fiveMultiple - grade < 3) 
                return fiveMultiple
        } else 
            return grade
    })
}