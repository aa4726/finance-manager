
function divFontSize() {

  var text = document.getElementById("objectives");
  console.log(text);
  text.style.fontSize = "2em";

}

function divFontSizeReduction() {
var text = document.getElementById("objectives");
  console.log(text);
  text.style.fontSize = "1em";
                                                             
}

 function showHide(){
  if (document.getElementById("objchk").checked){
   document.getElementById("objectives").style.display="block";
  }else{
  document.getElementById("objectives").style.display="none";
  }
   if (document.getElementById("detchk").checked){
   document.getElementById("details").style.display="block";
  }else{
  document.getElementById("details").style.display="none";
  }
   if (document.getElementById("subchk").checked){
   document.getElementById("submission").style.display="block";
  }else{
  document.getElementById("submission").style.display="none";
  }
}
