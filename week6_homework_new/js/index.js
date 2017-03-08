$(function(){
    //Declare and assign global variables
    var total = 0;
    var arrProducts = ['apple', 'oranges', 'bananas'];
    var arrPrices = ['1.25', '2.15', '.75'];

    //Functions to call
    addProducts(arrProducts);

    //Event Handler
    $("#products").submit(function(submitEvent){

        //Prevent the form from submitting
        submitEvent.preventDefault();

        //Declare and assign local variables
        var product = "";
        var price = 0;
        var formattedCost = "";
        var formattedTotal = "";
        var selectedIndex = $('#selectProduct').val(); //Use this variable to store the value of the selected product

        //Show what is selected
        console.log("The value of the selected product:" + $('#selectProduct').val());

        //Assign new values
        product = arrProducts[selectedIndex]; //You might wanna try arrProducts[selectedIndex]... but only after you assign selectedIndex to the right value
        console.log("Current Product: " + product);

        price = getPrice(selectedIndex, arrPrices);
        formattedCost = currencyFormat(price);
        total = total + price;
        formattedTotal = currencyFormat(total);

        //Update the DOM
        $('#cart').append('<div class="col-xs-12">' + product + '</div>');
        $("#itemRow").append('<div class="col-xs-6">' + product + "</div>");
        $("#itemRow").append('<div class="col-xs-6">' + formattedCost + "</div>");
        $("#entry").val("");
        $("#total").html(formattedTotal);
    });


});

function currencyFormat(number){ 
    currency = "$" + number.toFixed(2);
    return currency;
}

function getPrice(index, arrPrices)
{
    var itemCost = arrPrices[index];

    return parseFloat(itemCost);
}

function addProducts(arrProducts)
{
    
    $('#selectProduct').html('');
    $.each(arrProducts,function(index, value){
        $('#selectProduct').append('<option value=' + index + '>' + value + '</option>')
        //This won't add them to the DOM, but at least it will show you the values
        console.log(index, value);
    });
}



