function validateForm() {
    let x = document.forms["myForm"]["myemail"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;}
}
function scrolling(y){
  top :y;
  behavior : "smooth";
}
