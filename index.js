
var questionArray = {
    questions: [

    {
        text: 'Who was the first UFC Heavyweight Champion?',
        choices: ['Hulk Hogan', 'Ryu', 'Maximus', 'Mark Coleman'],
        answer: 3,
        explanation: 'ANSWER: Mark Coleman was the first UFC HeavyWeight Champion. He won the title on Feb 7 1997.'
    },

    {
        text: 'Who is the current UFC Heavyweight Champion?',
        choices: ['Stipe Miocic', 'Joe Rogan', 'Nate Diaz', 'The Rock'],
        answer: 0,
        explanation: 'ANSWER: Stipe Miocic is the current UFC Heavyweight Champion.'
    },

    {
        text: 'Which fighter holds the record for most wins in UFC history?',
        choices: ['Jon Jones', 'Chuck Lidell', 'Donald Cerrone', 'Seth Rogan'],
        answer: 2,
        explanation: 'ANSWER: Donald Cerrone holds the record for most wins in UFC history.'
    },

    {
        text: 'Who is Dana White?',
        choices: ['A fighter', 'A manager', 'UFC President', 'A retired referee'],
        answer: 2,
        explanation: 'ANSWER: Dana White is the President of the UFC.'
    },

    {
        text: 'Who owns the UFC?',
        choices: ['WWE', 'Fox', 'NBC', 'ENDEAVOR'],
        answer: 3,
        explanation: 'ANSWER: ENDEAVOR is the current owner of the UFC!'
    },

    {
        text: 'How many sides does the Octagon have?',
        choices: ['4', '6', '8', '10'],
        answer: 3,
        explanation: 'ANSWER: The UFC Octagon has 8 sides.'
    }
    ],

    good: [
    "Your a legend, you belong in the Octagon!"],

    bad: [
    "Are you suffering from a concussion?"],

    
    score: 0,
    
    currentQuestionIndex: 0,
    
    path: 'start',
    
    lastAnswerCorrect: false,
    
    feedbackRandom: 0,

};
