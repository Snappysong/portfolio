
// my script file for header shrink
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("header").style.fontSize = "30px";
//     } else {
//             document.getElementById("header").style.fontSize = "90px";
//     }
// }

$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});