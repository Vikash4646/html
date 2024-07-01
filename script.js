console.log(12 + 8);
// document.write('welcome to js');
console.error("Error")
console.warn('warning')
alert('welcome')

// var a = 10;
// if(true){
//     var a = 10;
//     console.log(a)
// }
// console.log(a)
// function change(){
//     var sam = document.getElementById("btn");
//     sam.innerHTML = "hi";
//     sam.style.color = "red";
//     sam.style.backgroundColor = "black"
// }
// var a = window.prompt("Enter a number");
// a = parseInt(a)
// console.log(typeof(a));
// var b = window.prompt("Enter b value")
// b = parseInt(b);
// document.write(a+b)

function result() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").value = result;
}

