(function(){
  'use strict';

  $(document).ready(function(){
    $('#controls > button').click(addBoxes);
    $('#boxes').on('mouseenter', '.box', paintBackground);
  });

  function addBoxes(){
    var count = $('input[name=count]').val() * 1;
    for(var i = 0; i < count; i++){
      var $box = $('<div>');
      $('#box').prepend($box);
      $box.addClass('box');
      $box.css('background-color', randomColor());
      $('#boxes').prepend($box);
    }
  }

  function paintBackground(){
    var color = $(this).css('background-color');
    $('body').css('background-color',color);
    console.log(color);
  }

  function randomColor(){
    var red = Math.floor(Math.random()*256),
        grn = Math.floor(Math.random()*256),
        blu = Math.floor(Math.random()*256),
        alp = Math.random(),
        str = 'rgba('+red+','+grn+','+blu+','+alp+')';
    return str;
  }
})();