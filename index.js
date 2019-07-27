$(document).ready(function(){
 $(".img9").click(function(){
 $(".des").show();
 $(".img9").hide();
});
$(".des").click(function(){
  $(".img9").show();
  $(".des").hide();
 });
 $(".img10").click(function(){
  $(".dev").show();
  $(".img10").hide();
 });
 $(".dev").click(function(){
  $(".img10").show();
  $(".dev").hide();
 });
 $(".img11").click(function(){
  $(".prod").show();
  $(".img11").hide();
 });
 $(".prod").click(function(){
  $(".img11").show();
  $(".prod").hide();
 });

$("#form").click(function(){
  var name = $("#name").val()
  var email = $("#mail").val()
  var message = $("#msg").val();
  if((name !== "") && (email !=="") && (message !=="")){
    alert(name + " " + "thank you for working with us!")
  }
  else {
     alert("The form is empty");
  }
  event.preventDefault();
});
});

