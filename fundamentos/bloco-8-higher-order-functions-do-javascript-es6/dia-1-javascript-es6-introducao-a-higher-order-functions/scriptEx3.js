const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkingAnswers = (rigthAnswers, studentAnswers) => {
    let conter = 0;
    for (let i in rigthAnswers) {
        if (studentAnswers[i] === 'N.A') {
            conter += 0;
        } else if(rigthAnswers[i] === studentAnswers[i]){
            conter += 1;
        }
        else if(rigthAnswers[i] !== studentAnswers[i]){
            conter -= 0.5;
        }
    }
    return conter;
};

const finalScore = (rigthAnswers, studentAnswers, checkingAnswers) => `A nota final é: ${checkingAnswers(rigthAnswers, studentAnswers)}`
console.log(finalScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkingAnswers));
