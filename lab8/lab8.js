
function getDataFromForm() {
  alert("hello!");
  //Create this function.
  var fname = document.getElementsByName("fname")[0].value;
  var lname = document.getElementsByName("lname")[0].value;
  runAjax(fname, lname);
}

function runAjax(fname, lname) {
  const xhttp = new XMLHttpRequest();
  var url = "https://myserverallaboutme.azurewebsites.net/lab8/ajax.php?" + "fname=" + fname + "&lname=" + lname;
  xhttp.onload = function() {
    //Edit this
    document.getElementById("responseString").innerHTML = this.responseText;
  }
  xhttp.open("GET", url,true);
  xhttp.send();
}

