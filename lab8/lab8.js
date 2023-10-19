
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
    document.getElementById("responseString").innerHTML = this.responseText;
  }
  xhttp.open("GET", "https://myserverallaboutme.azurewebsites.net/lab8/ajax.php?fname="+fname, true);
  xhttp.open("GET", "https://myserverallaboutme.azurewebsites.net/lab8/ajax.php?lname="+lname, true);
  xhttp.open("GET", "https://myserverallaboutme.azurewebsites.net/lab8/ajax.php", true);
  xhttp.send();
}

