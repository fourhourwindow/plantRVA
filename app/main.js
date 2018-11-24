$(document).ready(function(){

  var winTop;

  //add year to copyright
  $('.year').text((new Date()).getFullYear());
  //maxHeightForShrink = $('h1').offset().top - winTop ;
  var headerHeight;
//  var h1 = $('h1').position().top;

  var diff = 0;

  $(window).on('scroll resize',function(){
    moveLogo();
  });
  function moveLogo(){

    headerHeight = $('header').height();
    winTop = $(window).scrollTop();

    diff = headerHeight - winTop;
      console.log('diff',diff)
    if(diff < 50){
      $('body').addClass('shrinkLogo');
      // $('body .both').css({'transform': 'translate3d(0,'+(winTop * -1)+'px,0'});
      // $('body header .bg').css({'transform': 'translate3d(0,'+winTop+'px,0'});

    }

    else{
      $('body').removeClass('shrinkLogo');
      $('body .both').css({'transform': 'translate3d(0,'+(winTop * -1)+'px,0'});
      $('body header .bg').css({'transform': 'translate3d(0,'+winTop+'px,0'});

      //$('body .both').css({'transform': 'translate3d(0,0,0'});
      //$('body header .bg').css({'transform': 'translate3d(0,0,0'});
    }
  }
    moveLogo();
})
