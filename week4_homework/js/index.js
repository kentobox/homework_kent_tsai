$(function(){
    console.log("page loaded");
    
    $('#heading1').click(function(){
        console.log("heading1 clicked");
    });
});
console.log("file loaded");


$('.moreText1').hide();
$('.showLess1').hide();

$('.showMore1').click(function(){
	$('.moreText1').show();
	$('.showMore1').hide();
	$('.showLess1').show();
});

$('.showLess1').click(function(){
	$('.moreText1').hide();
	$('.showMore1').show();
	$('.showLess1').hide();
});

$('.moreText2').hide();
$('.showLess2').hide();

$('.showMore2').click(function(){
	$('.moreText2').show();
	$('.showMore2').hide();
	$('.showLess2').show();
});

$('.showLess2').click(function(){
	$('.moreText2').hide();
	$('.showMore2').show();
	$('.showLess2').hide();
});


$('.moreText3').hide();
$('.showLess3').hide();

$('.showMore3').click(function(){
	$('.moreText3').show();
	$('.showMore3').hide();
	$('.showLess3').show();
});

$('.showLess3').click(function(){
	$('.moreText3').hide();
	$('.showMore3').show();
	$('.showLess3').hide();
});

