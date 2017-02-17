var show = true;

$('#showCircle').click(function(){
	$('#circle').hide();
});

$('#hideCircle').click(function(){
	$('#circle').show();
});

$('#slideUpCircle').click(function(){
	$('#circle').slideUp();
});

$('#slideDownCircle').click(function(){
	$('#circle').slideDown();
});

$('#animateLeft').click(function(){
	$('#circle').animate({
    marginLeft: "10%"
	}, 500);
});

$('#animateRight').click(function(){
	$('#circle').animate({
    marginLeft: "80%"
	}, 500);
});

$('#diagonalCircle').click(function(){
	$('#circle').animate({
    left: '+=150', top: '+=150'}, 500);
});

$('#showCharacter').click(function(){
	$('#circle').attr('src','https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png');
});

/*
$('#circle').animate({
    marginLeft: "10%"
}, 500);
*/
