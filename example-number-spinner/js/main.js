$('.number-spinner').mousedown(function(e) {

  // 1. Beim Drücken der Maustaste -> Koordinaten merken
  let clickedElement = this;
  let clickX = e.clientX;
  let clickY = e.clientY;
  let actValue = parseFloat($(clickedElement).text());

  let min = parseFloat($(clickedElement).attr('data-min'));
  let max = parseFloat($(clickedElement).attr('data-max'));

  let speed = parseFloat($(clickedElement).attr('data-speed'));
  let decimals = parseFloat($(clickedElement).attr('data-decimals'));

  // 2. Ab dann ständig schauen, wo die Maus ist.
  $(window).mousemove(function(e) {
    let actX = e.clientX;
    let actY = e.clientY;

    let distX = actX - clickX;

    // normale Berechung
    let newValue = actValue + distX * speed;
    $(clickedElement).removeClass('fast slow');
    
    if (actY < clickY - 20) {
      newValue = actValue + distX * speed * 10;
      $(clickedElement).addClass('fast');

    } else if (actY > clickY + 20) {
      newValue = actValue + distX * speed / 10;
      $(clickedElement).addClass('slow');
    
    } 

    actValue = newValue;
    clickX = actX;

    actValue = Math.min(actValue, max);
    actValue = Math.max(actValue, min);

    //displayedValue = Math.round(actValue);
    displayedValue = actValue.toFixed(decimals);

    // displayedValue = Math.min(displayedValue, max);
    // displayedValue = Math.max(displayedValue, min);

    // 3. Zahl der Number Spinners entsprechend verändern.
    $(clickedElement).text( displayedValue );
  });

  // 4. Beim Loslassen der Maustaste (egal wo) -> EventListener mousemove eliminieren!
  $(window).mouseup(function(e) {
    $(window).off('mousemove');
    $(window).off('mouseup');

    $(clickedElement).removeClass('fast slow');
  });

});






























