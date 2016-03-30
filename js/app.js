/* jslint browser: true */
var cars = require('./cars');

window.addEventListener('load', function() {

  var daCarz = _.template(document.getElementById('class-template').textContent);
  for (var i = 0; i < cars.length; i++) {
    var content = daCarz({
        id: i,
        name: cars[i].name,
        type: cars[i].type,
        doors: cars[i].doors,

    });
    var create = document.createElement('div');
    create.classList.add('cars');
    // set the ID for this element
    create.setAttribute('id', 'cartype-' +cars[i].id);
    create.innerHTML = content;
    var parent = document.getElementById('searchResult');
    parent.appendChild(create);
  }
});

/* -------- NOT NEEDED IN THIS ASSIGNMENT ----------------------
function filterCars(cars, classify) {
    for (var i = 0; i < cars.length; i++) {
      //show it
      if (cars[i].type === classify){
        //get the element
        var hit = document.getElementById('cartype-' + cars[i].id);
        //remove hidden class from it
        hit.classList.remove('hidden');

        // Hide it.
      } else {
        var miss = document.getElementById('cartype-' + cars[i].id);
        miss.classList.add('hidden');
      }
    }
}


  var searchBlur = document.getElementById('searchResult');
  searchBlur.addEventListener('blur', function() {
    var text = searchBlur.value;
    for (var i = 0; i < text.length; i++) {}
  });
  */

  /*
    var keyTypeTap = document.getElementsByClassName('carButton');
    keyTypeTap.addEventListener("keyup", function(){

    });



  //Make radio buttons work/do something
  var sedan = document.getElementById('sedanstyle');
  sedan.addEventListener('click', function(){
    filterCars(cars, 'Sedan');
  });
  var coupe = document.getElementById('coupestyle');
  coupe.addEventListener('click', function(){
    filterCars(cars, 'Coupe');
  });
  var suv = document.getElementById('suvstyle');
  suv.addEventListener('click', function(){
    filterCars(cars, 'SUV');
  });


*/ //-------------END OF EXTRA CODE -------------------------
