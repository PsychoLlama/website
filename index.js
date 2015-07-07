window.addEventListener('load', function() {
  // Dropdown animations
  (function() {
    var button, deg, list, height;
  
    button = document.getElementById('dropdown-button');
    list = document.getElementById('dropdown-list');
  
    deg = 0;
    height = 130;
    
    button.addEventListener('click', function() {
      TweenLite.to(button, 0.5, {
        transform: 'rotateX(' + (deg += 180) + 'deg)',
        ease: Bounce.easeOut
      });
      TweenLite.to(list, 0.5, {
        height: height,
        ease: Circ.easeOut
      });
      if (height) height = 0;
      else height = 130;
    });
  })();
  
  // Blink animation
  (function() {
    var blink, opaque, i;
    
    blink = document.querySelectorAll('.blink');
    opaque = true;
    
    for (i = 0; i < blink.length; i++) {
      currentBlink = blink[i]; 
      setInterval(function() {
        TweenLite.to(currentBlink, 1, {
          opacity: (opaque = !opaque),
          ease: Circ.easeOut
        });
      }, 1500);
    }
  })();
});