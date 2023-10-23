let hypotenuse;
let perpendicular;
let base;
document.getElementById("button").onclick = function(){
    base = document.getElementById("base").value;
    perpendicular = document.getElementById("perpendicular").value;

    hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));
    document.getElementById("output").innerHTML = "The hypotenuse of the triangle is: " + hypotenuse + "cm";
}