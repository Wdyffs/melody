$(document).ready(function () {
  let currentFloor = 1; // variable with floor
  let floorPath = $(".home-image path"); // every floor from SVG
  let counterUp = $(".counter-up"); /* button to up the floor */
  let counterDown = $(".counter-down"); /* button to down the floor */

  let modal = $(".modal");
  let modalCloseButton = $(".modal-close-button");
  function toggleModal() { // function open/close a window
    modal.toggleClass("is-open");
  };

  let viewFlatsButton = $(".view-flats");

  let flatsPath = $(".flats path"); // every flat on the floor


  //when u hover mouse on the floor
  floorPath.on('mouseover', function() {
    floorPath.removeClass("currentFloor"); //delete active class of the floor
    currentFloor = $(this).attr("data-floor"); // take value of the current floor
    $(".floor-counter").text(currentFloor); // write a value to the counter 
  });

  /*flatPath.on('mouseover', function(){

  };)*/


  viewFlatsButton.on('click', toggleModal); 
  floorPath.on('click', toggleModal); // open window when u click on the floor
  modalCloseButton.on('click', toggleModal); // close window when u click on close-button

  // when u click "up" button
  counterUp.on('click', function() { // locate a "click" when u tap button
    if (currentFloor < 17) { // check a value of the floor
      currentFloor++; // plus 1 floor
      let usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false}); // formating the value 1 => 01
      $(".floor-counter").text(usCurrentFloor);
      floorPath.removeClass("currentFloor");
      $(`[data-floor =${usCurrentFloor}]`).toggleClass('currentFloor'); // hightlight the current floor
    }
  });

  //when u click "down" button
  counterDown.on('click', function() {
    if (currentFloor > 1) {
      currentFloor--;
      let usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("currentFloor");
      $(`[data-floor =${usCurrentFloor}]`).toggleClass('currentFloor');
    }
  });
});