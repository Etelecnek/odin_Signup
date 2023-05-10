function validate() {
  var x = document.getElementById("password");
  var y = document.getElementById("confirm_password");
  if(x.value == y.value && x.value && y.value != "") {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Matching";
  } else if (x.value != y.value) {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "Not Matching";
  } else {
    document.getElementById("message").innerHTML = "";
  }
}

function createAccount() {
  alert("I'm clicked");
}