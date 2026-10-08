function getInput() {
  // Input using Prompt
  let name = prompt("Enter your Name");

  // Input from Text Box
  let age = document.getElementById("age").value;

  alert("Name : " + name);

  document.getElementById("display").innerHTML = "Age : " + age;
}
