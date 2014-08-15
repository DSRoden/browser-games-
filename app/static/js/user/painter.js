(function(){
  'use strict';

  $(document).ready(function(){
    $('#controls > button').click(addBox);
    $('#colors').on('click', '.color', pallete);
    $('#canvas').on('mouseenter', '.pixel', paintPixel);
    makeCanvas();
  });

  function paintPixel(){
    var color = $('#selected').css('background-color');
    $(this).css('background-color', color);
  }

  function makeCanvas(){
    alert('make canvas');
    for(var i = 0; i < 5000; i++){
      var $pixel = $('<div>');
      $pixel.addClass('pixel');
      $('#canvas').append($pixel);
    }
  }

  function addBox(){
    var color = $('#controls > input').val(),
      $color = $('<div>');

    $color.addClass('color');
    $color.css('background-color', color);
    $('#colors').append($color);
  }

  function pallete(){
    var chosenColor = $(this).css('background-color');
    $('#selected').css('background-color', chosenColor);
  }

})();
