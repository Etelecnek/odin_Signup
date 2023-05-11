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
    document.getElementById("confirm_password").className = document.getElementById("confirm_password").className.replace + " mismatch";
  } else {
    document.getElementById("message").innerHTML = "";
    document.getElementById("password").className = document.getElementById("password").className.replace + "";
    document.getElementById("confirm_password").className = document.getElementById("confirm_password").className.replace + "";
  }
}

function checkValid() {
  document.getElementById("first_name").className = document.getElementById("first_name").className + " confirm";
  document.getElementById("last_name").className = document.getElementById("last_name").className + " confirm";
  document.getElementById("email").className = document.getElementById("email").className + " confirm";
  document.getElementById("phone_number").className = document.getElementById("phone_number").className + " confirm";
  document.getElementById("password").className = document.getElementById("password").className + " confirm";
  document.getElementById("confirm_password").className = document.getElementById("confirm_password").className + " confirm";
  var input = document.getElementById("confirm_password");
  if (input.value != document.getElementById("password").value) {
    input.setCustomValidity("Password Must be Matching.");
  } else {
    input.setCustomValidity("");
  }
}

function createAccount() {
  alert("Submitted")
}