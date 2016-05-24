/* Add scroll event to activate or disactivate sections on view
   and assign srcset attribute of images (to load data only when they are on view) */
var onScroll = function(event) {
  // Save reference to sections
  var sections = document.documentElement.querySelectorAll('section');
  // Loop through each section
  for(var i=0; i<sections.length; i++){
    // Get section, bounding box (dimensions and position in the document) and viewport height
    var section = sections[i];
    var rect = section.getBoundingClientRect();
    var vheight = window.innerHeight;
    // Check whether section is in viewport. Bounding rect is relative to viewport.
    // If the top is less than the height (bottom of viewport)
    // and the bottom more than 0 (top of viewport), then the section is on view
    if(rect.top < vheight && rect.bottom > 0 ){
      // Add active class only if it's not there (to avoid repetition).
      // ClassName is a string property so we can add active as section.className = section.className + ' active';
      if(section.className.indexOf(' active') < 0){
        section.className += ' active';
      }
      // Get all images in the section to assign the srcset
      var imgs = section.querySelectorAll('img');
      // Loop through again
      for(var j=0; j<imgs.length; j++){
        // Grab each image and update srcset attribute from data-srcset.
        // Check whether image has already srcset property or not and copy it from data-srcset if it doesn't.
        var img = imgs[j];
        if(!img.getAttribute('srcset')){
          img.setAttribute('srcset', img.getAttribute('data-srcset'));
        }
      }
    }else{
      /* Deactivate (remove active class) if section is not on view */
      section.className = section.className.replace('active', '');
    }
  }
};

/* Load external data and render sections once the data is received */
var onDataLoaded = function(event){
  // Obtain original request and parse data
  var request = event.currentTarget;
  console.log(event, request);
  var data = JSON.parse(request.response);

  // Obtain template string
  var template = document.getElementById('section-tpl').innerHTML;

  // Render sections from data
  var html = '';
  var mysections = document.getElementById('sections');
  mysections.innerHTML = "";
  for(var i=0; i<data.length; i++){
    var object = data[i];
    // Increment html string with markup returned by Mustache after parsing the template using each object.
    // html += string is the same as html = html + string.
   mysections.innerHTML = mysections.innerHTML + Mustache.render(template, object);
  }
  // Inject composed html string in sections element
  //document.getElementById('sections').innerHTML = html;

  // Add scroll event listener and run once to have the first view ready
  window.addEventListener('scroll', onScroll);
  onScroll();
}

/* Create request to load external data
   Running the index file directly on the browser might return a security error.
   To test locally open the public folder in Terminal and run:
   python -m SimpleHTTPServer
   This will spin off a basic server that you can access through the url:
   http://localhost:8000/ in your browser */
var request = new XMLHttpRequest();
request.addEventListener("load", onDataLoaded);
request.open("GET", "./data/kids.json");
request.send();
