let button = document.getElementById("btn");

button.addEventListener("click", () => {
  var height = parseInt(document.getElementById("one").value);
  var weight = parseInt(document.getElementById("two").value);
  // const result = document.getElementById('output');

  if (height === "" || isNaN(height) || height <= 0) {
    alert("Please Enter a valid height");
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    alert("Please Enter a valid weight");
  }

  const bmi = weight / ((height * height) / 10000).toPrecision(2);
  console.log(bmi);
  if (bmi < 18.6) {
    document.getElementById("output").innerHTML = bmi;
    document.getElementById("dis").innerHTML = "Category :- UnderWeight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    document.getElementById("output").innerHTML = bmi;
    document.getElementById("dis").innerHTML = "Category :- Healthy";
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById("output").innerHTML = bmi;
    document.getElementById("dis").innerHTML = "Category :- OverWeight";
  } else if (bmi >= 30 && bmi <= 34.9) {
    document.getElementById("output").innerHTML = bmi;
    document.getElementById("dis").innerHTML = "Category :- Obeese";
  } else {
    alert("Bmi is out of Index!! ");
    document.getElementById("output").innerHTML = "";
    document.getElementById("dis").innerHTML = "Enter Measurments";
    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";
  }
});
