const categoriaUno=12000
const categoriaDos=17000
const categoriaTres=22000
let cuarenta =40
let salarioNeto,numeroUno,tot=0
let a,b =0
let f=""
const bs ={
    1: 12000,
    2: 17000,
    3: 22000
}
function inicio() {//A 
//B
validacion()
console.log("entro");
let horas =document.getElementById("horas").value 
let categoria =document.getElementById("categoria").value
//C
if (categoria ==="1" && horas >40){ 
    //D    categoria = 1 horas=41  tot=
console.log(" uno y mas de 40")
numeroUno = horas-cuarenta 
salarioNeto = cuarenta*categoriaUno 
b =(numeroUno*categoriaUno)
a = b*0.25
tot = salarioNeto+b+a
console.log(tot);  
f = horas
pintar()                  
}

else if (categoria ==="2" && horas >40){console.log(" dos y mas de 40")//E
//F
    numeroUno = horas-cuarenta 
    salarioNeto = cuarenta*categoriaDos 
    b =(numeroUno*categoriaDos)
    a = b*0.25
    tot = salarioNeto+b+a
    console.log(tot);  
    f = horas
    console.log(f);
    pintar()                  
}
else if (categoria ==="3" && horas >40){//G
    //H
    console.log(" dos y mas de 40")
    numeroUno = horas-cuarenta 
    salarioNeto = cuarenta*categoriaTres 
    let b =(numeroUno*categoriaTres)
    let a = b*0.25
    tot = salarioNeto+b+a
    console.log(tot);  
    f = horas
    pintar()                  
}
else{//  horas=40 tot=...
    a=bs[categoria]
    salarioNeto= a*horas
    tot=salarioNeto
    numeroUno=0
    f=horas
    pintar()

}
}

function pintar() { //J
    document.getElementById("salarioNeto").innerHTML=` ${salarioNeto}`
    document.getElementById("numeroUno").innerHTML=`${numeroUno}`
    document.getElementById("tot").innerHTML=` ${tot}`
    document.getElementById("ana").innerHTML=` ${f}`
        
    }
function validacion() {
    console.log("entro");
    let hor = document.getElementById("horas").value
    let category = document.querySelector("#categoria");
    if (category.selectedIndex  ===0) {
    alert("selecciona categoria")
    return document.getElementById("tabla").style="display: none"

    }else if (hor.trim()=== ""){
    alert("Completa las horas")
    return document.getElementById("tabla").style="display: none"

    }else if (hor <=0 ){
        alert("Numeros invalidos")
        limpiar()
        return document.getElementById("tabla").style="display: none"
    }

    return document.getElementById("tabla").style="display: flex"

}

function limpiar() {
    let hor = document.getElementById("horas").value
    let category = document.querySelector("#categoria");
    hor.innerHTML=''
    category.value='4'
}

