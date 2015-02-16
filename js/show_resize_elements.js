$(function() {
  "use strict";

  if (window.screen.width < 500) {

    $('#logo').parent().css('width', '1%');
    $('.text-picture, .text-picture--left').css('width', '40%');
    $('.equipment').css('width', '50%');
  }

  $('#call_back').fancybox();
  $('#call_back').css('display', 'inline');

  $('#SkypeButton_Call_green-holl_1').css('display', 'block');

  $('.letters_fancybox').fancybox();

  $('.equipment').fancybox();

  $('#map1').html(
    '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ' +
    'src="https://maps.google.ru/maps?f=q&amp;source=s_q&amp;hl=ru&amp;geocode=&amp;q=2-%D0%B9+%D0%BA%D0%BE%D0%B6%D1%83%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4+12+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+2&amp;aq=&amp;sll=55.821513,37.590054&amp;sspn=0.00182,0.005284&amp;ie=UTF8&amp;hq=&amp;hnear=2-%D0%B9+%D0%9A%D0%BE%D0%B6%D1%83%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80.,+12+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+2,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&amp;ll=55.699811,37.654367&amp;spn=0.003676,0.010568&amp;t=m&amp;z=14&amp;output=embed">' +
    '</iframe>'
  );
  $('#map2').html(
    '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ' +
    'src="https://maps.google.ru/maps?f=q&amp;source=s_q&amp;hl=ru&amp;geocode=&amp;q=%D0%BC%D0%B8%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0+2&amp;aq=&amp;sll=55.749792,37.632495&amp;sspn=0.933662,2.705383&amp;ie=UTF8&amp;hq=&amp;hnear=%D1%83%D0%BB.+%D0%9C%D0%B8%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0,+2,+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&amp;ll=55.821512,37.590056&amp;spn=0.00182,0.005284&amp;t=m&amp;z=14&amp;output=embed">' +
    '</iframe>'
  );

});
