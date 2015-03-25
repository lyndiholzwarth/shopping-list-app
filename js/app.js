$(document).ready(function(){
  $( "form" ).on( "submit", function( event ) {
  // AddRow();
  var itemName = $('#item').val();
  var QtyName = $('#Qty').val();
  var UnitName = $('#Unit').val();
    $('#Unit').val("");

    // insert new unit of content to list
    event.preventDefault();
    //  $('.no-check').show();
    $('#list').prepend(
      '<li class="list-content row">\
        <div class="col-xs-1 col-md-1">\
          <div class="no-check">\
            <i class="fa fa-square-o"></i>\
          </div>\
          <div class="checked" style="display:none">\
            <i class="fa fa-check-square-o"></i>\
          </div>\
        </div>\
        <div class="col-xs-6 col-md-6 list-item">' + itemName +'</div>\
        <div class="col-xs-1 col-md-1 list-item">' + QtyName +' </div>\
        <div class="col-xs-2 col-md-1 list-item">' + UnitName +' </div>\
      </li>');
  });
//  $('ul').on('click', 'li', function(event){
//    $("li").toggleClass( "seleted" );
//      console.log (event);
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
//});
  $('.top-header').on ('click', '.clear-button', function(event){
      $( 'li' ).remove( );
  });
});

//function AddRow(){
     //  $('.list-content').prepend( '<div class="col-xs-6 col-md-6 list-item">' + itemName + " </div>');
//};

//example: $('#theOrder').append('<tr><td class="newLine">'+puddingName+'</td><td><input type="text" class="form-control" value="1"></td></tr>');