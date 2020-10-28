

$('.number-spinner').mousedown(function(e) {

  // 1. Beim Drücken der Maustaste -> Koordinaten merken
  let clickedElement = this;
  let clickX = e.clientX;
  let clickY = e.clientY;
  let clickValue = parseFloat($(clickedElement).text());

  // 2. Ab dann ständig schauen, wo die Maus ist.
  $(window).mousemove(function(e) {
    let actX = e.clientX;
    let distX = actX - clickX;
    let value = parseFloat($(clickedElement).text());
    
    let newValue = clickValue + distX;
    
    // 3. Zahl der Number Spinners entsprechend verändern.
    $(clickedElement).text(newValue);
  });

  // 4. Beim Loslassen der Maustaste (egal wo) -> EventListener mousemove eliminieren!
  $(window).mouseup(function(e) {
    $(window).off('mousemove');
  });

});





