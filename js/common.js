function myFunction(){
  var x = document.getElementById("navHeader");
  if(x.className === "header-nav"){
    x.className += " responsive";
  }else{
    x.className = "header-nav";
  }
};