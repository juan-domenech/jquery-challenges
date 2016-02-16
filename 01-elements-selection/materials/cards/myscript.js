
$(document).ready(function() {

	$("p").click(function(){
		$("p").css("color","red");
	});

$( "h2" ).hover(
  function() {
    $( this ).css("background-color","lightblue");
  }, function() {
    $( this ).removeAttr( 'style' );
  }
);

$( "h2:first" ).hover(
  function() {
    $( this ).css("font-size","40px");
  }, function() {
    $( this ).removeAttr( 'style' );
  }
);

$( ".bottom_button" ).hover(
  function() {
    $( 'body' ).css("background-color","black");
  }, function() {
    $( 'body' ).css("background-color","grey");
  }
);


});

