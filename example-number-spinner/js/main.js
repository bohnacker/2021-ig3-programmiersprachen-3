
// 1. Bei Klick -> Koordinaten merken
// 2. Ab dann ständig schauen, wo die Maus ist.
// 3. Zahl der Number Spinners entsprechend verändern.
// 4. Beim Loslassen der Maustaste (egal wo) -> EventListener mousemove eliminieren!


$('.number-spinner').mousedown(function(e) {
  let clickedElement = this;
  let clickX = e.clientX;
  let clickY = e.clientY;
  let clickValue = parseFloat($(clickedElement).text());

  $(window).mousemove(function(e) {
    let actX = e.clientX;
    let distX = actX - clickX;
    let value = parseFloat($(clickedElement).text());
    
    let newValue = clickValue + distX;
    
    $(clickedElement).text(newValue);
  });

  $(window).mouseup(function(e) {
    $(window).off('mousemove');
  });

});





