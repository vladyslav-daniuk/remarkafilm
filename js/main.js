// скрыть меню

$(document).ready(function(){
    $('.content_toggle').click(function(){
      $('.slide-block-info').slideToggle(300, function(){
        if ($(this).is(':hidden')) {
          
        } else {
          
        }							
      });
      return false;
    });
  });

  // блок подробнее открыть

  $(document).ready(function(){
	$('.content_toggle1').click(function(){
		$('.content_block').toggleClass('hide');	
		if ($('.content_block').hasClass('hide')) {
			
		} else {
			
		}		
		return false;
	});				
});

// анимация цифр от 0

$(document).ready(function () {

    $('.klademug').each(function () {
      $(this).prop('Counter',0).animate({
      Counter: $(this).text()
      }, {
      duration: 1500,
      easing: 'swing',
      step: function (now) {
      $(this).text(Math.ceil(now));
      }
      });
    });
    
    });
