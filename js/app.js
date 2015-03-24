$(document).ready(function(){
	$( "form" ).on( "submit", function( event ) {
		var itemName = $('#item').val();
		var QtyName = $('#Qty').val();
		var UnitName = $('#Unit').val();
    event.preventDefault();
    	$('.no-check').show();
   		$('li').prepend( itemName + " " + QtyName + " " + UnitName);
			$('li').addClass('.list-item');
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
