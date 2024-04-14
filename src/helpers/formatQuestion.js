import { shuffle } from "./shuffle";


export const formatQuestion = (questionData) => {
 
    
    let question = questionData.question;

    let answers = [...questionData.incorrect_answers] 
    const correctAnswer = questionData.correct_answer 

    answers.push(correctAnswer)

    answers = shuffle(answers)

    return {
        question,
        answers, 
        correctAnswer
    }

}