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
    create.classList.add('drag');
    // set the ID for this element
    create.setAttribute('id', 'cartype-' + cars[i].id);
    create.innerHTML = content;
    var parent = document.getElementById('searchResult');
    parent.appendChild(create);
  }
  $(dragAndDrop);

  function dragAndDrop() {
    $('#searchResult div').draggable({
      appendTo: "body",
      helper: "clone",
    });
  }
  $("#boughtBox").droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {
      var aCar = parseInt(ui.draggable.attr('id'));
      var dropItHard = document.getElementById('id');
      for (var i = 0; i < cars.length; i++) {
        if (cars[i].id === aCar) {
          console.log('party people buy');
          var create = document.createElement('div');
          create.classList.add('drag');
          create.innerHTML = content;
          var boughtParent = document.getElementById('boughtBox');
          boughtParent.appendChild(create);
        }
      }
    }
  });

  $("#removeBox").droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {
      var aCar = parseInt(ui.draggable.attr('id'));
      var dropItHard = document.getElementById('id');
      for (var i = 0; i < cars.length; i++) {
        if (cars[i].id === aCar) {
          console.log('Stupid people wreck');
          var create = document.createElement('div');
          create.classList.add('drag');
          create.innerHTML = content;
          var removeParent = document.getElementById('removeBox');
          boughtParent.appendChild(create);
        }
      }
    }
  });

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
