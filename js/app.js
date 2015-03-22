$(document).ready(function(){
	$( "form" ).on( "submit", function( event ) {
//		alert("Value: " + $('#item').val());
    // Prevent the form's default submission.
    event.preventDefault();
   		$("li").prepend( $('#item').val() + $('#Qty').val() + $('Unit').val());
    // Log the event object for inspectin'
    console.log( event );
});

});
