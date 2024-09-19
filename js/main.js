counter = 0;
function incdata(){
    counter++;
    document.getElementById("demo").innerHTML = counter;
}
function decdata(){
    counter--;
    document.getElementById("demo").innerHTML = counter;
}


function convert(){
     var myinput = document.getElementById("myinput").value;
     var result = document.getElementById("result");

    if(isNaN(myinput)){
        result.innerHTML = "Enter your Number not text";
    }else if(myinput<0){
        result.innerHTML = "Enter your positive Number";
    }else if(myinput==0){
        result.innerHTML = "Enter your Number rather than zero";
    }else{
        result.innerHTML = myinput *50 + " L.E";
    }
    return false;
}
