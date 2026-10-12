const averageGrade = 70;
switch (true) {
    case (averageGrade < 0 || averageGrade > 100):
        console.log('Incorrect grade');
        break;
    case (averageGrade < 60):
        console.log('Unsatisfactorily');
        break;
    case (averageGrade <= 70):
        console.log('Satisfactorily');
        break;
    case (averageGrade <= 80):
        console.log('Good');
        break;
    case (averageGrade <= 90):
        console.log('Very Good');
        break;
    case (averageGrade <= 100):
        console.log('Perfectly');
        break;

    default:
        console.log('Choose your grade');
        break;
}