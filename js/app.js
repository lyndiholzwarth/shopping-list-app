$(document).ready(function(){
  $( "form" ).on( 'click', '.add-button', function( event ) {
    //get content from forma nd reset defaults
    var itemName = $('#item').val();
    var QtyName = $('#Qty').val();
    var UnitName = $('#Unit').val();
    $('#item').val("");
    $('#Qty').val("");
    $('#Unit').val("Units");
    // insert new unit of content to list
    event.preventDefault();
    // Add new row
    $('#list').prepend(
      '       <li class="list-content row">\
          <button class="check col-xs-1 col-md-1">\
            <div class="no-check">\
              <i class="fa fa-square-o"></i>\
            </div>\
            <div class="checked" style="display:none">\
              <i class="fa fa-check-square-o"></i>\
            </div>\
          </button>\
          <div class="col-xs-6 col-md-6 list-item">' + itemName +'</div>\
          <div class="col-xs-1 col-md-1 list-item">' + QtyName +' </div>\
          <div class="col-xs-2 col-md-1 list-item">' + UnitName +' </div>\
           <div class="col-xs-1 col-md-1 list-item"></div>\
          <button class="col-xs-1 col-md-1 box-right">\
            <i class="fa fa-trash-o"></i>\
          </button>\
        </li>');
    });

  $('.top-header').on ('click', '.clear-button', function(event){
      $( 'li' ).remove( );
      //clears list
  });

  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
//});
    $('ul').on('click', '.list-content', 'check', function(event){
    //toggle function
       $('.list-item',this).toggleClass('selected');
   //  console.log (event)});
        // fires when any checkboxes are clicked
      $('.no-check', this).toggle();
      $('.checked', this).toggle();
    });

    $('ul').on('click', '.fa-trash-o', function(event){
        $(this).closest('.row').remove();
    });

});
