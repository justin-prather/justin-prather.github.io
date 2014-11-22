$(function(){
  'use strict';
  var $company = $('.company');

  $company.on('click', function(){
    var $company = $(this);
    $company.toggleClass('show-text');
    $company.find('.text').toggleClass('hide');
  });
});
