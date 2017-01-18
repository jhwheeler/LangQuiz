'use strict';

var state = {
    score: 0,
    message: ["Congratulations!", "Well done!", "Not bad", "Could be better", "You've got some work to do..."],
    questions: [
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
    ],
    currentQuestionNumber: 0
};

    state.currentQuestion = state.questions[state.currentQuestionNumber].question

var renderActions = {
    renderQuestion: function(state, element) {
        element.find('.js-question-text').text(state.questions[state.currentQuestionNumber].question);
    },
    renderChoices: function(state, element) {
        var c = state.questions[state.currentQuestionNumber].choices;
        c.sort(function() { 
            return .5 - Math.random(); 
        });
        for (var i = 0; i < c.length; i++) {
            element.find('#js-answer-' + i).text(c[i]);
        }
    },
    renderCorrectAnswer: function(state, questions) {
        var currentCorrectAnswer = state.questions[state.currentQuestionNumber].correctAnswer;
        return state.questions[state.currentQuestionNumber].choices[currentCorrectAnswer];
    },
    renderProgress: function(state, element) {
        element.find('.js-progress-number').text((state.currentQuestionNumber) + 1);

    },
    renderScore: function(state, element) {
        //log chosenAnswer
        var currentChosenAnswer = state.questions[state.currentQuestionNumber].chosenAnswer;
        $('input[type="radio"]:checked').each(function() {
            currentChosenAnswer = $('label[for=' + $(this).attr("id") + ']').text();
        });
        //compare chosenAnswer to correctAnswer
        if (currentChosenAnswer == state.questions[state.currentQuestionNumber].choices[state.questions[state.currentQuestionNumber].correctAnswer]) {
            state.score++;
        } else {
               return state.score; 
        }
        //change text of .js-correct-score and .js-incorrect-score
        element.find('.js-correct-score').text(state.score);
    }
}

var eventActions = {
    nextButtonHandler: function() {
        event.preventDefault();
        renderActions.renderScore(state, $('.js-score'));
        state.currentQuestionNumber++;
        renderActions.renderQuestion(state, $('.quizContainer'));
        renderActions.renderChoices(state, $('.js-answers'));
        renderActions.renderProgress(state, $('.js-progress'));
        $('.startButton').addClass('hidden');
        $('.description').addClass('hidden');
        $('.quizContainer').removeClass('hidden');
    },
    startButtonHandler: function() {
        event.preventDefault();
        $('.startButton').addClass('hidden');
        $('.description').addClass('hidden');
        $('.quizContainer').removeClass('hidden');
        renderActions.renderQuestion(state, $('.quizContainer'));
        renderActions.renderChoices(state, $('.js-answers'));
        renderActions.renderProgress(state, $('.js-progress'));
    }
}

$(function() {
    $('.startButton').on('click', eventActions.startButtonHandler); 
    $('.js-answers').on('submit', eventActions.nextButtonHandler);
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
