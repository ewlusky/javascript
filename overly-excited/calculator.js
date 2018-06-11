var x = document.getElementById("frm1");

function test (){
    let first = x.elements[0].value;
    let second = x.elements[1].value;
    console.log(first);
    console.log(second);
}
let interv = setInterval(test, 1000);
    

document.getElementById("mul").addEventListener("click", function(){
    let first = x.elements[0].value;
    let second = x.elements[1].value;
    let y = 0;
    y = first * second;
    document.getElementById("demo").innerHTML = y;
    x.elements[0].value = y;
    clearInterval(interv);
});
document.getElementById("add").addEventListener("click", function(){
    let y = 0;
    let first = x.elements[0].value;
    let second = x.elements[1].value;
    y = Number(first) + Number(second);
    document.getElementById("demo").innerHTML = y;
});
document.getElementById("sub").addEventListener("click", function(){
    let y = 0;
    let first = x.elements[0].value;
    let second = x.elements[1].value;
    y = first - second;
    document.getElementById("demo").innerHTML = y;
});
document.getElementById("div").addEventListener("click", function(){
    let y = 0;
    let first = x.elements[0].value;
    let second = x.elements[1].value;
    y = first/second;
    document.getElementById("demo").innerHTML = y;
});