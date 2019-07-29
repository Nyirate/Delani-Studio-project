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

$(".img1").mouseover(function(){
$(".word1").show();
});
$(".img1").mouseleave(function(){
$(".word1").hide();
});

$(".img2").mouseover(function(){
$(".word2").show();
});
$(".img2").mouseleave(function(){
$(".word2").hide();
});

$(".img3").mouseover(function(){
$(".word3").show();
});
$(".img3").mouseleave(function(){
$(".word3").hide();
});

$(".img4").mouseover(function(){
$(".word4").show();
});
$(".img4").mouseleave(function(){
$(".word4").hide();
});

$(".img5").mouseover(function(){
$(".word5").show();
});
$(".img5").mouseleave(function(){
$(".word5").hide();
});

$(".img6").mouseover(function(){
$(".word6").show();
});
$(".img6").mouseleave(function(){
$(".word6").hide();
});

$(".img7").mouseover(function(){
$(".word7").show();
});
$(".img7").mouseleave(function(){
$(".word7").hide();
});

$(".img8").mouseover(function(){
$(".word8").show();
});
$(".img8").mouseleave(function(){
$(".word8").hide();
});

});

