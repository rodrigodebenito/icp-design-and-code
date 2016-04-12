// Save reference to sections
var sections = document.documentElement.querySelectorAll('section');

// Add scroll event to activate or disactivate sections on view
var onScroll = function(e) {
  for(var i=0; i<sections.length; i++){
    var s = sections[i],
        r = s.getBoundingClientRect();
        h = document.documentElement.clientHeight;
    if(r.top < h && r.bottom > 0 ){
      if(s.className.indexOf(' active') < 0) s.className += ' active';
      var imgs = s.querySelectorAll('img');
      for(var j=0; j<imgs.length; j++){
        var m = imgs[j];
        if(!m.getAttribute('srcset')) m.setAttribute('srcset', m.getAttribute('data-srcset'));
      }
    }else{
      s.className.replace(' active', '');
    }
  }
};
window.addEventListener('scroll', onScroll);
onScroll();
