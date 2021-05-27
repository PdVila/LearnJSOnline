/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    // TODO: return the number of grades
    return grades.length
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
    // TODO: return the sum of all the grades
    let sum = 0;
    grades.forEach(function(grade){
        sum = grade + sum;
    })
    return sum;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    let sum2 = 0;
    grades.forEach(function(grade){
        sum2 = grade + sum2;
        return sum2;
    })
    return sum2 / grades.length
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    // TODO: return all passing grades (10 and above)
    let passingGrades = grades.filter(function(grade){
        return grade >= 10;
    })
    return passingGrades;
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    // TODO: return all failing grades (9 and below)
    let failingGrades = grades.filter(function(grade){
        return grade <= 9;
    })
    return failingGrades
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    // TODO: return all the grades raised by 1 (no grade should exceed 20)
    let raiseGrade = grades.map(function(grade){
        if (grade >= 20) {
            return 20;
        } else {
            return grade + 1;
        }
    });
    return raiseGrade;
}
