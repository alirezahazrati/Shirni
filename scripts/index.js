$("header").find("a").click(function(e) {
    e.preventDefault()
    var section = $(this).attr("href")
    $("html, body").animate({
        scrollTop: $(section).offset().top,
    })
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function setRandomColor() {
    $('.cl').css('background-color', getRandomColor());
    $('.hd').css('display', 'block')
  }


