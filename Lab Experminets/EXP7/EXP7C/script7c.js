function arrayDemo() {
  let fruits = ["Apple", "Banana", "Mango"];

  fruits.push("Orange");

  fruits.sort();

  document.getElementById("demo").innerHTML =
    "Array Elements : " +
    fruits +
    "<br><br>Length : " +
    fruits.length +
    "<br><br>First Element : " +
    fruits[0];
}
