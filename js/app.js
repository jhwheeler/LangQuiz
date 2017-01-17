'use strict';

var state = {
    currentQuestionNumber: 0,
    currentQuestion: questions[currentQuestionNumber].question,
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
        questionNumber: 0,
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
        questionNumber: 1,
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
        return element.find('.js-question-text').text(questions[state.currentQuestionNumber].question);
    },
    renderChoices: function(state, questions, element) {
        var c = state.currentQuestion.choices;
        c.sort(function() { 
            return .5 - Math.random(); 
        });
        for (var i = 0; i < questions.length; i++) {
            (questions[i].question);
            console.log(questions[i].choices);
        }
    },
    renderCorrectAnswer(state, questions) {
        var currentCorrectAnswer = questions[state.currentQuestionNumber].correctAnswer;
        return questions[state.currentQuestionNumber].choices[currentCorrectAnswer];
    }
}

var eventActions = {
    nextButtonHandler: function(state) {
        nextButton.submit(function(event) {
            if (state.currentQuestionNumber < questions.length - 1) {
                state.currentQuestionNumber++;
                return true;
            } else {
                return false;
            }
            renderActions.renderQuestion(state, questions);
            renderActions.renderChoices(state, questions, element);
        });
    },
    startButtonHandler: function() {
        $('.startButton').submit(function(event) {
            event.preventDefault();
            startButton.addClass('.hidden');
            quizContainer.removeClass('.hidden');
        });
    }
}

$(function() {
    var nextButton = $('.js-nextButton');
    var quizAnswers = $('.js-answers');
    var startButton = $('.startButton');
    var quizContainer = $('.quizContainer');
    eventActions.startButtonHandler();
    renderActions.renderQuestion(state, questions, quizContainer);
    renderActions.renderChoices(state, questions, quizAnswers);
    eventActions.nextButtonHandler(state);
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
// updateProgress()
// renderCorrectAnswer()
// updateScore()
// renderResults()
//
//To-Do:
//1. Just question-answer part (w/o showing correct answer or score)
//2. Add scores
//3. Add where they are
//4. Add showing the correct answer
//5. Add the final results
