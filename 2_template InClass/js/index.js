    var products    = ['Kids_Magazine', 'Moms_Magazine', 'Dads_Magazine', 'Career_Magazine', 'Life-Achievement_Magazine', 'Money_Magazine'];
    var details     = [
        'Learn about how to educate your kids today',
        'Learn about parenting tips and guides for Moms',
        'Learn how to provide leadership for your family',
        'Learn how to improve your career',
        'Learn how to make money'
    ];
    var images      =['kids3.jpg','mom.jpg','dad.jpg','career.jpg','life.jpg','money.png'];
    var prices      = [5.25, 6, 5.50, 8.75, 6.50, 12.00];
    var inventories = [100, 100, 100, 100, 100, 100];
    var cart        = [];
    var total       = 0;

$(function(){

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";

        string += '<div class="col-xs-4">';
        string += ' <div class="product">';
        var image = images[i] || 'default.jpg';
        string += '     <img class="img-thumbnail" src="./images/'+ image +'"/>';

        string += '     <div class="title">' + products[i] + '</div>';
        string += '<div class="price">' + currencyFormat(prices[i]) + '</div>';
        string += '     <div class="details">' + details[i] + '</div>'
        string += '     <div class="quantity">Quantity';
        string +=           buildSelect(i);
        string += '     </div>';
        string += '     <button class="btn btn-success" value=' + i + '>Add to Cart</button>';
        string += ' </div>';
        string += '</div>';  

        $('#products').append(string);

        //Set the cart counter to 0 for that this index
        cart.push(0);
    }

    //Add product event
    $('#products').on('click', '.btn', function(button){
        var i = $(this).val();
        var quantity = parseInt($('#' + products[i] + 'Select').val());
        var price = prices[i];

        //add quantity to cart
        cart[i] = cart[i] + quantity;

        //add (quantity * price) to total
        total = total + (quantity * price);

        console.log(total, cart);
    });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cart[i];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '<span class="badge badge-pill badge-primary">' + total + '</span>';

                string += '</li>';

                $('#cartContents').append(string);
            }
        }
    });

    //Checkout
    $('#checkout').on('click', function(){
        console.log("Checking out");
        $('#checkoutModal').modal();
    });

    $('.nav a').on('click', function(){
        var _opened = $(".navbar-collapse").hasClass("collapse in");
        if (_opened === true) {
            $('.navbar-toggle').click();
        }
    });

});

function buildSelect(i)
{
    var product = products[i];
    var inventory = inventories[i];
    var string = '';

        string += '         <select id="' + product + 'Select">';
        var max = inventory || 0;
        for(var j = 1; j <= max; j++)
        {
            string += '<option value=' + j + '>' + j + '</option>';
        }
        
        string += '         </select>';   

    return string;
}

function currencyFormat(number)
{ 
    currency = "$" + number.toFixed(2);
    return currency;
}


var questions = ["Hi There! What's Your Name?", "Which Topic Are Your Interested In? (Kids, Mom, Dad, etc)", "Great! Let Me Make A Recommendation For You, Reply OK", "Here Is What We Recommend: Kids Magazine - Education Edition"];
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

