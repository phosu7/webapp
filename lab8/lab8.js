
function getDataFromForm() {
  //alert("it worked!");
  //Create this function.
  var fname = document.getElementsByName(fname);
  var lname = document.getElementsByName(lname);
  alert(fname + lname);
}

function runAjax(fname, lname) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //Edit this
    document.getElementById("stringResponse").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax.php", true);
  xhttp.send();
}

