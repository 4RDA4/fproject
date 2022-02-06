var result;

var submitButton = document.getElementById("sb");

var firstNumber = document.getElementById("fname");

var secondNumber = document.getElementById("lname");

submitButton.addEventListener("click", function(event) {

    console.log(event)

    result = parseInt(firstNumber.value) * parseInt(secondNumber.value);
    console.log(result)

    var x1 = document.getElementById("x1")

    x1.innerHTML = result
})