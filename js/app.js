'use strict';

var state = {
    currentQuestion: 0,
    score: 0,
    message: ["Congratulations!", "Well done!", "Not bad", "Could be better", "You've got some work to do..."]
};

var questions = [
    {
        question: "1. What is a phoneme?",
        choices: [
            "A perceptually distinct set of sounds, perceived as equivalent, that distinguishes one word from another in a given language.", 
            "A sound, of course! Is this a trick question?",
            "A letter in a given language that corresponds to a certain sound.",
            "The smallest meaning-bearing unit in a given language."
        ],
        correctAnswer: 0,
        chosenAnswer: null
    },
    {
        question: "2. What is a morpheme?",
        choices: [
            "The smallest meaningful unit in language.", 
            "Another name for syllable, or collection of sounds with one nucleus, usually a vowel.", 
            "The root of a word, such as 'read-' in the word 'reader'.", 
            "A prefix or suffix that can be added to the beginning or ending of a word to make a new word."
        ],
        correctAnswer: 0,
        chosenAnswer: null
    },
    {
        question: "3. Which sentence is in VSO word order?",
        choices: [
            "Gather ye rosebuds while ye may.", 
            "If music be the food of love, play on.", 
            "Hope is a good breakfast, but it is a bad supper.", 
            "With this ring, I thee wed."
        ],
        questionNumber: 2,
        correctAnswer: 0,
        chosenAnswer: null
    },
    {
        question: "4. A linguist is someone who...",
        choices: [
            "Systematically studies the structure of language as a whole and/or specific languages.", 
            "Speaks and writes properly, according to the accepted conventions of the given language.", 
            "Speaks many languages; technically, at least 3.",
            "Dictates how language should be spoken by the general public."
        ],
        questionNumber: 3,
        correctAnswer: 0,
        chosenAnswer: null
    }
];


var renderActions = {
    renderQuestion: function(state, questions, element) {
        var q = state.currentQuestion;
        return element.find('.js-question-text').text(q.question);
    },
    renderChoices: function(state) {
        c = state.currentQuestion.choices;
        c.sort(function() { return .5 - Math.random(); });
        for (var i = 0; i < questions.length; i++) {
            console.log(questions[i].question);
            console.log(questions[i].choices);
        }
    }
}

var eventActions = {
    nextButtonHandler: function(state) {
        nextButton.submit(function(event) {
            return state.currentQuestion++;
        }
    }
}

//in state, keep track of current question
//when click next, call renderQuestion()
//nextButtonHandler() > +1 to the currentQuestion in state


/*show correct answer
 * renderCorrectAnswer(state, questions) {
 *   return questions[0].choices[questions[0].correctAnswer];
 * }
*/


$(function() {
    var nextButton = '.js-nextButton';
    var quizAnswers = '.js-answers';
    renderActions.renderQuestion(state, questions, quizAnswers));
    renderActions.renderChoices(state);
});










// Write functions to:
// 1. Get and load question
// 2. Update progressTemplate
// 3. On choice of answer, addClass `.correct-answer` to the correct answer
// 4. If the correct answer was chosen, display the correct answer and a "Well done!" message
// 5. If an incorrect answer was chosen, display the correct answer and a "Sorry" message
// 6. Update scoreTemplate 
// 7. Trigger (1.) again
// 8. Once all questions are answered, display resultsTemplate
//
//
// renderQuestion()
// renderChoices()
// updateProgress()
// displayCorrectAnswer()
// updateScore()
// displayResults()
//
//
//1. Just question-answer part (w/o showing correct answer or score)
//2. Add scores
//3. Add where they are
//4. Add showing the correct answer
//5. Add the final results











/*
var stateHelper = {
    getQuestion: function(questions) {
        var keys = Object.keys(questions);
        var currentQuestion = keys[keys.length * Math.random() << 0];
        return currentQuestion;
    },
    sortAnswers: function(state, questions) {
        //sort answers at random
        var keys = Object.keys(questions)
        

        //assign them to choices array
    }
}
*/
