$(function(){
  'use strict';
  var $image = $('.image');

  $image.on('click', function(){
    var $parent = $(this).parent();
    $parent.toggleClass('show-text');
    $parent.find('.text').toggleClass('hide');
  });
});
