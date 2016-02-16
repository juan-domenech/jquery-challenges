
$(document).ready(function() {

	$("p").click(function(){
		$("p").css("color","red");
	});

$( "h2" ).hover(
  function() {
    $( this ).css("background-color","lightblue");
  }, function() {
    $( this ).css("background-color","white");
  }
);

$( "h2:first" ).hover(
  function() {
    $( this ).css("font-size","40px");
  }, function() {
    $( this ).css("font-size","20px");
  }
);

$( ".bottom_button" ).hover(
  function() {
    $( 'body' ).css("background-color","black");
  }, function() {
    $( 'body' ).css("background-color","white");
  }
);


});

