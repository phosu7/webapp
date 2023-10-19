
function getDataFromForm() {
  //alert(fname);
  //Create this function.
  var fname = document.getElementsByName(fname[0]);
  var lname = document.getElementsByName(lname[0]);
  alert(fname);
  runAjax(fname, lname);
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

