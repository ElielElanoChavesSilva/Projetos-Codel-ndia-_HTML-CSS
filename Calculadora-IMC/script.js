var form=document.getElementById("myform")
function handleform(event){
event.preventDefault();
}

form.addEventListener("submit", handleform)
function calculo(){
    var h = document.getElementById("height").value
    var a = h /100
    var altura = a * a
    var peso = document.getElementById("weight").value
    var imc=  peso / (altura)
    var res = document.getElementById("numbers")

    result=0;

    if(imc < 18.5){
        result = "Abaixo do peso"    
    }
    else if(imc > (18.5) && imc < (24.9)){
        result = "Peso normal"
    }
    else if(imc > (25) && imc < (29.9)) {
        result = "Sobre peso"
    }
    else if(imc > (30) && imc < (34.9)) {
        result = "Obesidade grau I"
    }
     else if(imc > (35) && imc < (40)) {
        result = "Obesidade grau II"
    }
    else{
        result = "Obesidade grau III"
    }
    
    res.innerHTML=(`<h3>${result}</h3>` + imc.toFixed(2) + " Kg/m²")
}

