function validate() {
  var x = document.getElementById("password");
  var y = document.getElementById("confirm_password");
  if(x.value == y.value && y.value != "") {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Matching";
    document.getElementById("password").className = document.getElementById("password").className.replace + " match";
    document.getElementById("confirm_password").className = document.getElementById("confirm_password").className.replace + " match";
  } else if (x.value != y.value && y.value != "") {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "Not Matching";
    document.getElementById("password").className = document.getElementById("password").className.replace + " mismatch";
    document.getElementById("confirm_password").className = document.getElementById("confirm_password").className.replace + " mismatch";
  } else {
    document.getElementById("message").innerHTML = "";
    document.getElementById("password").className = document.getElementById("password").className.replace + "";
    document.getElementById("confirm_password").className = document.getElementById("confirm_password").className.replace + "";
  }
}

function createAccount() {

}