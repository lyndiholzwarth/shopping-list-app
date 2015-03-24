$(document).ready(function(){
	$( "form" ).on( "submit", function( event ) {
		var itemName = $('#item').val();
		var QtyName = $('#Qty').val();
		var UnitName = $('#Unit').val();
    event.preventDefault();
    	$('.no-check').show();
   		$('ul').prepend( itemName + " " + QtyName + " " + UnitName);
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
      $( 'li' ).remove( );
});

});

var itemName = "('#item').val()"