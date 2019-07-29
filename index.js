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

$("#image1").mouseover(function(){
$(".word1").show();
});
$("#image1").mouseleave(function(){
$(".word1").hide();
});

$("#image2").mouseover(function(){
$(".word2").show();
});
$("#image2").mouseleave(function(){
$(".word2").hide();
});

$("#image3").mouseover(function(){
$(".word3").show();
});
$("#image3").mouseleave(function(){
$(".word3").hide();
});

$("#image4").mouseover(function(){
$(".word4").show();
});
$("#image4").mouseleave(function(){
$(".word4").hide();
});

$("#image5").mouseover(function(){
$(".word5").show();
});
$("#image5").mouseleave(function(){
$(".word5").hide();
});

$("#image6").mouseover(function(){
$(".word6").show();
});
$("#image6").mouseleave(function(){
$(".word6").hide();
});

$("#image7").mouseover(function(){
$(".word7").show();
});
$("#image7").mouseleave(function(){
$(".word7").hide();
});

$("#image8").mouseover(function(){
$(".word8").show();
});
$("#image8").mouseleave(function(){
$(".word8").hide();
});

});

