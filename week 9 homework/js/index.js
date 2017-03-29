$('btn-day').hide();

$(function () {

  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });


    $('.btn-night').click(function(){
        $('body').css('background-color','black');
        $('body').css('color','#a3a3a3');
        $('.btn-night').hide();
        $('.btn-day').show();
    });

    $('.btn-day').click(function(){
        $('body').css('background-color','white');
        $('body').css('color','black');
        $('.btn-day').hide();
        $('.btn-night').show();
    });
});

/*
$(function(){
    var products    = ['apples', 'oranges', 'bananas', 'kiwi', 'carrots'];
    var cart        = [];
    var cartCounter = [];

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";

        string += '<li class="list-group-item clearfix">';
        //string += '<img class="img-thumbnail" src="./images/apples.png">';
        string += products[i];
        string += '<button class="btn btn-success btn-xs pull-right" value=' + i + '>Add to Cart</button>';
        string += '</li>';

        $('#products').append(string);

        //Set the cart counter to 0 for that this index
        cartCounter.push(0);
    }

    //Add product event
    $('#products').on('click', '.btn', function(button){
        var index = $(this).val();
        cartCounter[index]++;
        console.log(cartCounter);
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


});

*/