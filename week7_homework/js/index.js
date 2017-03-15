var questions = ["What is your name?", "How's your day?", "What can I help you with today?", "OK. Give me a second to look into that."];
var answers = [];
var intCurrentQuestion = 0;

// Step 1 - Write a jQuery on page load anonymous function
$(function(){

    askQuestion(intCurrentQuestion);

    $('#conversationForm').submit(function(submitEvent){
        submitEvent.preventDefault();
        var answer = $('#answer').val();
        sendAnswer(answer);
    });

    // Step 2 - Call the askQuestion function below and pass it the global intCurrentQuestion variable

    // Step 3 - Select #conversationForm, use the submit event to capture submitEvent with an anonymous function and then .preventDefault()
        
        // Declare a variable "answer" and select #answer get the input value
        
        // Call sendAnswer() and pass it the local answer variable 
});

function askQuestion(questionNumber)
{
    console.log("Inside askQuestion:", questionNumber);
    // Declare a variable called "question" and use the global questions array and the local questionNumber to assign the value
    var question = questions[intCurrentQuestion];
    if(question)
    {
        $('#conversation').append('<li class="list-group-item ai">' + questions[questionNumber] + '</li>');
        intCurrentQuestion = questionNumber
    }
    // Write an if(question) statement
        
        // Select #conversation and append the following string:
        // '<li class="list-group-item ai">' + questions[questionNumber] + '</li>'

        // Re-assign the global variable intCurrentQuestion to equal the local questionNumber variable
}

function sendAnswer(answer)
{
    console.log("Inside sendAnswer", answer);
    // Write an if(answer) statement
    if(answer)
    {
        $('#answer').val('');
        $('#conversation').append('<li class="list-group-item human">' + answer + '</li>');
        answers.push(answer);
        askQuestion(intCurrentQuestion + 1);
    }    
        // Select #answer and set the value to ''
     
        // Select #conversation and append the following string:
        // '<li class="list-group-item human">' + answer + '</li>'

        //  use answers.push() to add the local variable answer to the answers array

        //  call askQuestion() and pass: intCurrentQuestion + 1
}

