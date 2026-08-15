(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var total = 8;
  var current = 0;
  var speed = reduce ? 900 : 220;

  function tick(){
    document.querySelectorAll('.step').forEach(function(s){ s.classList.remove('active'); });
    document.querySelectorAll('.step[data-col="' + current + '"]').forEach(function(s){
      if(!s.classList.contains('rest')) s.classList.add('active');
    });
    current = (current + 1) % total;
  }

  tick();
  setInterval(tick, speed);
})();
