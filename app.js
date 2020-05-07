function calc() {
  var a = parseInt(document.querySelector("#nilai1").value);
  var b = parseInt(document.querySelector("#nilai2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "tambah") {
    calculate = a + b;
  } else if (op == "kurang") {
    calculate = a - b;
  } else if (op == "bagi") {
    calculate = a / b;
  } else if (op == "kali") {
    calculate = a * b;
  }

  document.querySelector("#hasil").innerHTML = calculate;
}
