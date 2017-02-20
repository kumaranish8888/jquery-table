(function(){

$("#btn1").bind("click", lastone);
$("#btn2").bind("click", firstone);
$("#btn3").bind("click", lasttwo);
$("#btn4").bind("click", firsttwo);
$("#btn5").bind("click", lastthree);
$("#btn6").bind("click", firstthree);

function lastone(){
    $("#last1").val("Kumar");
}

function firstone(){
    $("#first1").val("Bikash");
}

function lasttwo(){
    $("#last2").val("Das");
}

function firsttwo(){
    $("#first2").val("Jayshree");
}

function lastthree(){
    $("#last3").val("Khan");
}

function firstthree(){
    $("#first3").val("Anchal");
}

})();