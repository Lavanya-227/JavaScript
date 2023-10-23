let counter = 0;

document.getElementById("inc").onclick = function(){
    counter +=1;
    document.getElementById("counter").innerHTML = counter;
}

document.getElementById("dec").onclick = function(){
    counter -=1;
    document.getElementById("counter").innerHTML = counter;
}

document.getElementById("res").onclick = function(){
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
}