
function getDataFromForm() {
  alert("it worked!");
  //Create this function.
}

function myAjax() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //Edit this
    document.getElementById("stringResponse").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax.php", true);
  xhttp.send();
}

