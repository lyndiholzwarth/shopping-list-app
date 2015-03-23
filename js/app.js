$(document).ready(function(){
	$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
   		$("ul").prepend( $('#item').val() + $('#Qty').val() + $('#Unit').val());
    // Log the event object for inspectin'
    console.log( event );
});

//	$('ul').on('click', 'li', function(event){
//	  $("li").toggleClass( "seleted" );
//	  		console.log (event);
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
//});
	$('.top-header').on ('click', '.clear-button', function(event){
      $( 'ul' ).remove( );
});

});
