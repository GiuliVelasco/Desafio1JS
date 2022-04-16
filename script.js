let notaAutoeval1
let notaAutoeval2
let notaAutoeval3
continua = true
while(continua){ //continua == true
    let notaAuto1 = parseFloat(prompt("Ingrese puntaje de la autoevaluación 1"))
    let notaAuto2 = parseFloat(prompt("Ingrese puntaje de la autoevaluación 2"))
    let notaAuto3 = parseFloat(prompt("Ingrese puntaje de la autoevaluación 3"))
    //condicion de entrada de datos
    if(!(isNaN(notaAuto1) || isNaN(notaAuto2) || isNaN(notaAuto3)) && !(notaAuto1 > 10 || notaAuto2 >10 || notaAuto3 > 10)){
        continua = false
        notaAutoeval1 = notaAuto1
        notaAutoeval2 = notaAuto2
        notaAutoeval3 = notaAuto3
        console.log(notaAutoeval1)
        console.log(notaAutoeval2)
        console.log(notaAutoeval3)
    }else{
        alert("Por favor ingrese valores numéricos válidos del 1 al 10")
    }
}
//funcion
function promedioAutoeval (puntaje1, puntaje2, puntaje3){
    return ((puntaje1 + puntaje2 + puntaje3)/3)
}
let resultadoPromedio = promedioAutoeval(notaAutoeval1, notaAutoeval2, notaAutoeval3)


if (resultadoPromedio >= 7){
    console.log("La nota promedio de las autoevaluaciones es " + resultadoPromedio)
    alert("Puede rendir el examen final")
    let notaExamenFinal = parseFloat(prompt("Ingrese la nota del Examen Final"))
    if((notaExamenFinal >= 7) && notaExamenFinal <= 10){
        console.log(notaExamenFinal)
        alert("Felicidades! Ingresaste a la carrera.")
    }else if (isNaN(notaExamenFinal) || notaExamenFinal < 0 || notaExamenFinal > 10){
        console.log(notaExamenFinal)
        alert("Coloca una nota válida del 0 al 10")
    }else{
        alert("Seguí participando! Te esperamos el próximo año.")
    }
}else{
    console.log("La nota promedio de las autoevaluaciones es " + resultadoPromedio)
    alert("Recursa el preuniversitario el año próximo.")
}





