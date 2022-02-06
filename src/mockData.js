let idCounter = 0;

export const createNewQuiz = (quizHeader) => {
    idCounter++ 

    return {...quizHeader, id: idCounter}
}