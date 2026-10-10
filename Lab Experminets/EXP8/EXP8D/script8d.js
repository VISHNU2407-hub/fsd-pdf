function displayData() {
  let student = {
    Name: "P.Vishnu Vardhan Reddy",
    Roll: 167,
    Branch: "CSM",
  };

  let output = "<h3>for-in</h3>";

  for (let key in student) output += key + " : " + student[key] + "<br>";

  let subjects = ["Python", "Java", "HTML"];

  output += "<h3>forEach</h3>";

  subjects.forEach(function (item) {
    output += item + "<br>";
  });

  output += "<h3>for-of</h3>";

  for (let sub of subjects) output += sub + "<br>";

  document.getElementById("demo").innerHTML = output;
}
