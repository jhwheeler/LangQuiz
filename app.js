'use strict';

var state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    choices: ["a", "b", "c", "d"],
    score: [],
    message: ["Congratulations!", "Well done!", "Not bad", "Could be better", "You've got some work to do..."]
};

var questions = {
    "What is a phoneme?": ["A perceptually distinct set of sounds, perceived as equivalent, that distinguishes one word from another in a given language.", "A sound, of course! Is this a trick question?", "A letter in a given language that corresponds to a certain sound.", "The smallest meaning-bearing unit in a given language."],
    "What is a morpheme?": ["The smallest meaningful unit in language.", "Another name for syllable, or collection of sounds with one nucleus, usually a vowel.", "The root of a word, such as 'read-' in the word 'reader'.", "A prefix or suffix that can be added to the beginning or ending of a word to make a new word."],
    "Which sentence is in VSO word order?": ["Gather ye rosebuds while ye may.", "If music be the food of love, play on.", "Hope is a good breakfast, but it is a bad supper.", "With this ring, I thee wed."],
    "A linguist is someone who:": ["Systematically studies the structure of language as a whole and/or specific languages.", "Speaks and writes properly, according to the accepted conventions of the given language.", "Speaks many languages; technically, at least 3."]
};

var templates = {
    questionTemplate: (
        '<div class="question js-question">' +
            '<span class="question-number js-question-number"></span>' + 
            '<span class="question-text js-question-text"></span>' +
        '</div>'
    ),
    answerTemplate: (
        '<div class="answer js-answer">' +
            '<span class="js-answer-choice"></span>' +
            '<span class="js-answer-text"></span>' +
        '</div>'
    ),
    progressTemplate: (
        '<div class="progress js-progress">' +
            '<span class="js-progress-number"></span>' +
            '<span> out of 5 questions complete</span>' +
        '</div>'
    ),
    scoreTemplate: (
        '<div class="score js-score">' +
            '<span class="js-correct-score"></span>' +
            '<span> correct | </span>' +
            '<span class="js-incorrect-score"></span>' +
            '<span>incorrect</span>' +
        '</div>'
    ),
    resultsTemplate: (
        '<div class="results js-results">' +
            '<span class="js-message"></span>' +
            '<span> You got </span>' +
            '<span class="js-final-score"></span>' +
            '<span> correct out of 5.</span>' +
        '</div>'
    )
};

//state modification functions

var stateHelper = {
    getQuestion: function(questions) {
        var keys = Object.keys(questions);
        var currentQuestion = keys[keys.length * Math.random() << 0];
        console.log(currentQuestion);
        return currentQuestion;
    },
    sortAnswers: function(state, questions) {
        //sort answers at random
        var keys = Object.keys(questions)
        

        //assign them to choices array
    }
}




$(function() {
    stateHelper.getQuestion(questions);
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
// getQuestion()
// loadQuestion()
// updateProgress()
// displayCorrectAnswer()
// updateScore()
// displayResults()
//
//
