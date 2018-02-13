//navigation
function myFunction(){
  var x = document.getElementById("navHeader");
  if(x.className === "header-menu"){
    x.className += " responsive";
  }else{
    x.className = "header-menu";
  }
};
