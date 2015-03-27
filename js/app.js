$(document).ready(function(){
  $( "form" ).on( 'click', '.add-button', function( event ) {
    //get content from forma nd reset defaults
    var itemName = $('#item').val();
    var QtyName = $('#Qty').val();
    var UnitName = $('#Unit').val();
    $('#item').val("");
    $('#Qty').val("");
    $('#Unit').val("");
    // insert new unit of content to list
    event.preventDefault();
    // Add new row
    $('#list').prepend(
      '<li class="list-content row">\
        <div class="col-xs-1 col-md-1">\
          <button class="col-xs-1 col-md-1">\
            <div class="no-check">\
              <i class="fa fa-square-o"></i>\
            </div>\
            <div class="checked" style="display:none">\
              <i class="fa fa-check-square-o"></i>\
            </div>\
          </button>\
        </div>\
        <div class="col-xs-6 col-md-6 list-item">' + itemName +'</div>\
        <div class="col-xs-1 col-md-1 list-item">' + QtyName +' </div>\
        <div class="col-xs-2 col-md-1 list-item">' + UnitName +' </div>\
          <div class="col-xs-1 col-md-1 list-item"></div>\
          <button class="col-xs-1 col-md-1 list-item box-right">\
            <i class="fa fa-pencil"></i>\
          </button>\
          <button class="col-xs-1 col-md-1 list-item box-right">\
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
    $('ul').on('click', '.list-content', function(event){
  //toggle function
   $(this).toggleClass('selected');
//    $('#item_list').on('click', '.left_icon > i', function() {
  //  $(this).toggleClass("flaticon-pencil122");
  //  $(this).toggleClass("flaticon-eraser2");
  //  $(this).parent().parent().toggleClass("checked");
  //    $('li').closest('.no-check').css("backgColor", "red")
   //     $(this).toggleClass('fa-square-o');
     //   $(this).toggleClass('fa-check-square-o');
   //   $('list-content').parent('.checked').toggle();
    console.log (event)
  });

  $('ul').on('click', '.fa-trash-o', function(event){
      $(this).closest('.row').remove();
  });

    $('ul').on('click', '.fa-pencil', function(event){

 });



});
