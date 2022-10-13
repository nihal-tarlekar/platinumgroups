// about 1
$(document).ready(function(){
    $('#plus-1').click(function(e) {
    $('#sign_up').lightbox_me({
    centered: true, 
    onLoad: function() { 
    $('#sign_up').find('input:first').focus()
    }
    });
    e.preventDefault();
    });

    $ele.lightbox_me();
    $ele.trigger('close');
})
// 2
$(document).ready(function(){
    $('#plus-2').click(function(e) {
    $('#sign_up-1').lightbox_me({
    centered: true, 
    onLoad: function() { 
    $('#sign_up-1').find('input:first').focus()
    }
    });
    e.preventDefault();
    });

    $ele.lightbox_me();
    $ele.trigger('close');
})
// 3
$("#btn-arrow").click(function() {

  // Set the effect type
  var effect = 'slide';

  // Set the options for the effect type chosen
  var options = {
    direction: $('.mySelect').val('right')
  };

  // Set the duration (default: 400 milliseconds)
  var duration = 700;

  $('#mySidecontact').toggle(effect, options, duration);
});
$("#closebtn").click(function() {

  // Set the effect type
  var effect = 'slide';

  // Set the options for the effect type chosen
  var options = {
    direction: $('.mySelect').val('left')
  };

  // Set the duration (default: 400 milliseconds)
  var duration = 700;

  $('#mySidecontact').toggle(effect, options, duration);
});
// document.getElementById('closebtn').addEventListener('click', function(e) {
//   e.preventDefault();
//   this.parentNode.style.display = 'none';
// }, false);
// 4
$("#btn-arrow-1").click(function() {

  // Set the effect type
  var effect = 'slide';

  // Set the options for the effect type chosen
  var options = {
    direction: $('.mySelect').val('right')
  };

  // Set the duration (default: 400 milliseconds)
  var duration = 700;

  $('#mySidecontact').toggle(effect, options, duration);
});
// 5
$("#btn-arrow-2").click(function() {

  // Set the effect type
  var effect = 'slide';

  // Set the options for the effect type chosen
  var options = {
    direction: $('.mySelect').val('right')
  };

  // Set the duration (default: 400 milliseconds)
  var duration = 700;

  $('#mySidecontact').toggle(effect, options, duration);
});
// 6
$(document).ready(function(){

  $(window).scroll(function(){
      var pos = $(this).scrollTop();
      
      if(pos > 400){
          $('#scrollToTop').fadeIn();
      }else{
          $('#scrollToTop').fadeOut();
      }
  });

  $('#scrollToTop').click(function(){

      $('html,body').animate({scrollTop: 0});

  });

});
// 7
/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
