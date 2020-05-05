

function setPath(questionArray, path) { 
    questionArray.path = path;
}

function resetGame(questionArray) {
    questionArray.score = 0;
    questionArray.currentQuestionIndex = 0;
    setPath(questionArray, 'start');
}


function answerQuestion(questionArray, answer) {
    var currentQuestion = questionArray.questions[questionArray.currentQuestionIndex];
    questionArray.lastAnswerCorrect = currentQuestion.answer === answer;
    if (questionArray.lastAnswerCorrect) {
        questionArray.score++;
    }
    selectFeedback(questionArray);
    setPath(questionArray, 'answer-feedback');
}

function selectFeedback(questionArray) {
    questionArray.feedbackRandom = Math.random();
}


function advance(questionArray) {
    questionArray.currentQuestionIndex++;
    if(questionArray.currentQuestionIndex === questionArray.questions.length) {
        setPath(questionArray, 'final-feedback');
    }

    else {
        setPath(questionArray, 'question');
    }
}




   
function renderQuiz(questionArray, elements) {
    Object.keys(elements).forEach(function(path) {
        elements[path].hide();
    });

    elements[questionArray.path].show();

    if (questionArray.path === 'start') {
        renderStartPage(questionArray, elements[questionArray.path]);
    }

    
    else if (questionArray.path === 'question') {
        renderQuestionPage(questionArray, elements[questionArray.path]); 
    }

    
    else if (questionArray.path === 'answer-feedback') {
        renderAnswerFeedbackPage(questionArray, elements[questionArray.path]); 
    }

    
    else if (questionArray.path === 'final-feedback') {
        renderFinalFeedbackPage(questionArray, elements[questionArray.path]); 
    }
}


function renderQuestionPage(questionArray, element) {
    renderQuestionCount(questionArray,  element.find('.question-count'));
    renderQuestionText(questionArray, element.find('.question-text'));
    renderChoices(questionArray,  element.find('.choices'));
}


function renderAnswerFeedbackPage(questionArray, element) {
    renderAnswerFeedbackHeader(questionArray, element.find('.feedback-header'));
    renderAnswerFeedbackText(questionArray, element.find('.feedback-text'));
    renderExplanation(questionArray, element.find('.explanation'));
    renderNextButtonText(questionArray, element.find('.see-next'));
    renderCurrentScore(questionArray, element.find('.current-score'));
}


function renderFinalFeedbackPage(questionArray, element) {
    renderFinalFeedbackText(questionArray, element.find('.results-text'));
}

function renderQuestionCount(questionArray, element) {
    var text = (questionArray.currentQuestionIndex + 1) + "/" + questionArray.questions.length;

    element.text(text);
}


function renderQuestionText(questionArray, element) {
    var currentQuestion = questionArray.questions[questionArray.currentQuestionIndex];
    element.text(currentQuestion.text);
}


function renderExplanation(questionArray, element) {
    var currentQuestion = questionArray.questions[questionArray.currentQuestionIndex];
    element.text(currentQuestion.explanation);
}


function renderCurrentScore(questionArray, element) {
    var score = questionArray.score;
    var currentQuestionIndex = questionArray.currentQuestionIndex;
    
    

}


function renderChoices(questionArray, element){
    var currentQuestion = questionArray.questions[questionArray.currentQuestionIndex];
    var choices = currentQuestion.choices.map(function(choice, index) {
        return (
            '<input type="radio" name="user-answer" value="' + index + '" required>' +
            '<label>' + choice + '</label><br/>' 
            );  
    });

    element.html(choices);
}

function renderAnswerFeedbackHeader(questionArray, element) {
    var html = questionArray.lastAnswerCorrect ?
    "<h4 class='user-was-correct'>Correct</h4>" :
    "<h4 class='user-was-incorrect'>Wrong!</>";

    element.html(html);
}

function renderAnswerFeedbackText(questionArray, element) {
    var choices = questionArray.lastAnswerCorrect ? questionArray.good : questionArray.bad;
    var text = choices[Math.floor(questionArray.feedbackRandom * choices.length)];

    element.text(text);
}


function renderNextButtonText(questionArray, element) {
    var text = questionArray.currentQuestionIndex < questionArray.questions.length - 1 ? 
    "Next Round": "What's the score?";

    element.text(text);
}


function renderFinalFeedbackText(questionArray,  element) {
    var text = "You got " + questionArray.score + " out of " + questionArray.questions.length + " questions right.";

    element.text(text);
}


var PAGE_ELEMENTS = {
    'start': $('.start-page'),
    'question': $('.questions-page'),
    'answer-feedback': $('.answer-feedback-page'),
    'final-feedback': $('.final-feedback-page'),
};


$(".game-start").submit(function(event) {
    event.preventDefault();
    setPath(questionArray, 'question');
    renderQuiz(questionArray, PAGE_ELEMENTS);
});


$('.restart-game').click(function(event) {
    event.preventDefault();
    resetGame(questionArray);
    renderQuiz(questionArray, PAGE_ELEMENTS);
});



$("form[name='current-question']").submit(function(event) {
    event.preventDefault();
    var answer = $("input[name='user-answer']:checked").val();
    answer = parseInt(answer, 6);
    answerQuestion(questionArray, answer);
    renderQuiz(questionArray, PAGE_ELEMENTS);
});

$('.see-next').click(function(event) {
    advance(questionArray);
    renderQuiz(questionArray, PAGE_ELEMENTS);
});


$(function() {
    renderQuiz(questionArray, PAGE_ELEMENTS);
});



