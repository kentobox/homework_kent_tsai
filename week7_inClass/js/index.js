$(function(){
    var products    = ['Kids Magazine', 'Mom Magazine', 'Family Magazine', 'Dad Magazine', 'Career Magazine', 'School-Achievement Magazine'];
    var prices      = ['5','6','7','8','9','10'];
    var cartCounter = [];

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";

        string += '<li class="list-group-item clearfix">';
            string += '<img class="img-thumbnail" src="./images/kids.png">';
            string += products[i];
            string += '<button class="btn btn-danger btn-xs pull-right btn-product-remove" value=' + i + '>Remove</button>';
            string += '<button class="btn btn-success btn-xs pull-right btn-product-add" value=' + i + '>Add to Cart</button>';
        string += '</li>';

        $('#products').append(string);

        //Set the cart counter to 0 for that this index
        cartCounter.push(0);
    }

    //Add product to cartCounter when a button is clicked 
    $('#products').on('click', '.btn-product-add', function(){
        var index = $(this).val();
        cartCounter[index]++;
    });

    $('#products').on('click', '.btn-product-remove', function(){
        var index = $(this).val();
        cartCounter[index]--;
    });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cartCounter[i];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }
    });

    function currencyFormat(number){
        var currency = "$" + number.toFixed(2);
        return currency;
    }
});


var questions = ["Hi There! What's Your Name?", "Which Topic Are Your Interested In? (Kids, Mom, Dad, etc)", "Great! Let Me Make A Recommendation For You!", "Here Is What We Recommend: Kids Magazine - Education Edition"];
var answers = [];
var intCurrentQuestion = 0;

$(function(){

    askQuestion(intCurrentQuestion);

    $('#conversationForm').submit(function(submitEvent){
        submitEvent.preventDefault();
        var answer = $('#answer').val();
        sendAnswer(answer);
    });

});

function askQuestion(questionNumber)
{
    var question = questions[questionNumber];
    if(question)
    {
        $('#conversation').append('<li class="list-group-item ai">' + questions[questionNumber] + '</li>');
        intCurrentQuestion = questionNumber;
    }
}

function sendAnswer(answer)
{
    if(answer)
    {
        $('#answer').val('');
        $('#conversation').append('<li class="list-group-item human">' + answer + '</li>');
        answers.push(answer);
        askQuestion(intCurrentQuestion + 1);
    }
}
