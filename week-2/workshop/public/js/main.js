/* Declare data */

var data = [{
  "name" : "Aricia",
  "title" : "Aricia Domenica Ferreira, 4 years old, and Hakim Jorge Ferreira Gomes, 2 years old, São Paulo, Brazil",
  "text" : "Aricia’s pink sippy cup is full of chocolate milk, but her brother Hakim’s cup contains coffee (café com leite). For many Brazilian parents, coffee for kids is a cultural tradition; the taste evokes their own earliest memories. Many also believe that coffee provides vitamins and antioxidants and that a small milky serving in the morning helps their children concentrate in school. Hakim ‘‘gets more agitated after he drinks it,’’ his father, Reginaldo Aguiar Gomes, admits. ‘‘I can feel his mood change.’’ But their pediatrician told them that coffee is fine in moderation. Brother and sister are eating ham and cheese as well as pão com manteiga, bread with butter.",
  "kid_image" : "aricia.jpg",
  "food_image" : "aricia_b.jpg"
}, {
  "name" : "Birta",
  "title" : "Birta Gudrun Brynjarsdottir, 3 ½ years old, Reykjavik, Iceland",
  "text" : "Birta’s oatmeal porridge is called hafragrautur, a staple breakfast in Iceland. The oatmeal is cooked in water or milk and often served with brown sugar, maple syrup, butter, fruit or surmjolk (sour milk). Birta also takes a swig of lysi, or cod-liver oil. For part of the year, when the sun barely clears Iceland’s horizon, sunlight is a poor source of vitamin D — but the vitamin is plentiful in fish oils. (The word lysi is related to the Icelandic verb lysa, meaning ‘‘illuminate.’’) Birta’s mother, Svana Helgadottir, started giving her four children lysi when each was about 6 months, and now all of them gulp it down without complaint. Many day-care centers and preschools in Iceland dispense cod-liver oil as a regular part of the morning routine.",
  "kid_image" : "birta.jpg",
  "food_image" : "birta_b.jpg"
}, {
  "name" : "Doga",
  "title" : "Doga Gunce Gursoy, 8 years old, Istanbul",
  "text" : "The elaborate Saturday morning spread in front of Doga includes honey and clotted cream, called kaymak, on toasted bread; green and black olives; fried eggs with a spicy sausage called sucuk; butter; hard-boiled eggs; thick grape syrup (pekmez) with tahini on top; an assortment of sheep-, goat- and cow-milk cheeses; quince and blackberry jams; pastries and bread; tomatoes, cucumbers, white radishes and other fresh vegetables; kahvaltilik biber salcasi, a paste made of grilled red peppers; hazelnut-flavored halvah, the dense dessert; milk and orange juice. While certainly more elaborate than weekday fare, this Gursoy family meal is in keeping with the hodgepodge that is a typical Turkish breakfast.",
  "kid_image" : "doga.jpg",
  "food_image" : "doga_b.jpg"
}, {
  "name" : "Emily",
  "title" : "Emily Kathumba, 7 years old, Chitedze, Malawi",
  "text" : "Emily lives with her grandmother Ethel on the outskirts of Lilongwe, Malawi’s capital. Because Ethel works in another family’s home — doing cleaning, cooking and child care — her extended family of nine rises before 6 a.m. to eat breakfast together before they disperse to work and school. Here, Emily is eating cornmeal porridge called phala with soy and groundnut flour; deep-fried fritters made of cornmeal, onions, garlic and chiles, along with boiled sweet potato and pumpkin; and a dark red juice made from dried hibiscus flowers and sugar. (She is fortunate; half of the children in Malawi are chronically malnourished.) When she can, Emily likes to drink sweet black tea in the mornings, a common beverage for Malawian children.",
  "kid_image" : "emily.jpg",
  "food_image" : "emily_b.jpg"
}, {
  "name" : "Saki",
  "title" : "Saki Suzuki, 2 ¾ years old, Tokyo",
  "text" : "The first time Saki ate the fermented soybean dish called natto, she was 7 months old. She promptly vomited. Her mother, Asaka, thinks that perhaps this was because of the smell, which is vaguely suggestive of canned cat food. But in time, the gooey beans became Saki’s favorite food and a constant part of her traditional Japanese breakfasts. Also on the menu are white rice, miso soup, kabocha squash simmered in soy sauce and sweet sake (kabocha no nimono), pickled cucumber (Saki’s least favorite dish), rolled egg omelet (tamagoyaki) and grilled salmon.",
  "kid_image" : "saki.jpg",
  "food_image" : "saki_b.jpg"
}];

/* Obtain template string */
var template = document.getElementById('section-tpl').innerHTML;

/* Render sections from data */
var html = '';
for(var i=0; i<data.length; i++){
  var object = data[i];
  /* Increment html string with markup returned by Mustache after parsing the template using each object.
     html += string is the same as html = html + string.
  */
  html += Mustache.render(template, object);
}
document.getElementById('sections').innerHTML = html;

/* Save reference to sections */
var sections = document.documentElement.querySelectorAll('section');

/* Add scroll event to activate or disactivate sections on view
   and assign srcset attribute of images (to load data only when they are on view) */
var onScroll = function(e) {
  /* Loop through each section */
  for(var i=0; i<sections.length; i++){
    /* Get section, bounding box (dimensions and position in the document) and viewport height */
    var section = sections[i];
    var rect = section.getBoundingClientRect();
    var vheight = window.innerHeight;
    /* Check whether section is in viewport. Bounding rect is relative to viewport.
       If the top is less than the height (bottom of viewport)
       and the bottom more than 0 (top of viewport), then the section is on view */
    if(rect.top < vheight && rect.bottom > 0 ){
      /* Add active class only if it's not there (to avoid repetition).
         ClassName is a string property so we can add active as section.className = section.className + ' active';  */
      if(section.className.indexOf(' active') < 0){
        section.className += ' active';
      }
      /* Get all images in the section to assign the srcset */
      var imgs = section.querySelectorAll('img');
      /* Loop through again */
      for(var j=0; j<imgs.length; j++){
        /* Grab each image and update srcset attribute from data-srcset.
           Check whether image has already srcset property or not and copy it from data-srcset if it doesn't. */
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
/* Add scroll event and run once to have the first view ready */
window.addEventListener('scroll', onScroll);
onScroll();
