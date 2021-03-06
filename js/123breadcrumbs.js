$(document).ready(function(){
  $('.js_undo_problem_breadcrumb').click(function(){
    undo_problem_breadcrumb();
  });

  $('.js_car_breadcrumb').click(function(){
    fill_car_breadcrumb();
  });

  $('.js_undo_car_breadcrumb').click(function(){
    undo_car_breadcrumb();
  });
});

function fill_problem_breadcrumb(problem){
  var breadcrumb = $("#problem_breadcrumb");
  var service_type = $('#service_type').text();
  var service = "";
  if (service_type != problem){
    service = " > " + problem;
  }
  breadcrumb.text(service_type+service);
  show_breadcrumb(breadcrumb);
}
function fill_car_breadcrumb(){
  var breadcrumb = $("#car_breadcrumb");
  var car_brand = retrieve_text($('#car_brand'));
  var car_model = retrieve_text($('#car_model'));
  var car_year = retrieve_text($('#car_year'));
  var breadcrumb_text = car_brand
  if(car_model != ''){
    breadcrumb_text += " > " +car_model;
    if (car_year != ''){
      breadcrumb_text += " > " +car_year;
    }
  }
  breadcrumb.text(breadcrumb_text);
  show_breadcrumb(breadcrumb);
}
function undo_problem_breadcrumb(){
  var breadcrumb = $("#problem_breadcrumb");
  hide_breadcrumb(breadcrumb);
}
function undo_car_breadcrumb(){
  var breadcrumb = $("#car_breadcrumb");
  hide_breadcrumb(breadcrumb);
}
function show_breadcrumb(breadcrumb){
  breadcrumb.animate({
    opacity: 1,
    left: "1px"
  }, 600, function() {  });
}
function hide_breadcrumb(breadcrumb){
  breadcrumb.animate({
    opacity: 0,
    left: "-2000px"
  }, 600, function() {  });
}

function retrieve_text(element){
  var text = element.clone().children().remove().end().text();
  return text;
}