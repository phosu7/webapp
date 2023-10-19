
function getDataFromForm() {
  //alert(fname);
  //Create this function.
  var fname = document.getElementsByName("fname")[0].value;
  var lname = document.getElementsByName("lname")[0].value;
  runAjax(fname, lname);
}

function runAjax(fname, lname) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //Edit this
    fname.innerHTML = this.responseText;
    lname.innerHTML = this.responseText;
    document.getElementById("stringResponse").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax.php", true);
  xhttp.send();
}

