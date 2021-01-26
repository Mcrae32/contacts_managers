$( function() {
        $(".balls").tooltip({
          position: {
            my: "right+650 top+100",
            at: "right bottom",
            using: function( position, feedback ) {
              $( this ).css( position );
              $( "<div>" )
              .addClass( "arrow" )
              .addClass( feedback.vertical )
              .addClass( feedback.horizontal )
              .appendTo( this );
            }
          }
        });
      });

var depField = $("#dep");
var ballsContainer = $("#ballsActivcont");

$(".balls").mouseenter(function(event){ 
  var target = $(event.target);
  var str = target.html();
  depField.html(str);
});

$('.ball').mouseleave(function(){
  depField.html(" ");
});




/*

$(".balls").mouseenter(function(event){ 
  var target = $(event.target).find('span');
  var str = target.html();
  depField.html(str);
});

$('.ball').mouseleave(function(){
  depField.html(" ");
});

*/