
function getDataFromForm() {
  alert("hello!");
  //Create this function.
  var fname = document.getElementsByName("fname")[0].value;
  var lname = document.getElementsByName("lname")[0].value;
  runAjax(fname, lname);
}

function runAjax(fname, lname) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //Edit this
    xhttp.open("GET", fname, true);
    xhttp.send();
    xhttp.open("GET", lname, true);
    xhttp.send();
    document.getElementById("stringResponse").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax.php", true);
  xhttp.send();
}

