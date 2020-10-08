function producto(a,b){
    document.getElementById("producto").innerHTML = `El resultado es ${a * b}`;
};

function mayor(a,b){
    if (a > b) {
        document.getElementById("mayor").innerHTML = `${a} es mayor a ${b}`;
    }else if (a < b) {
        document.getElementById("mayor").innerHTML = `${b} es mayor a ${a}`;
    } else {
        document.getElementById("mayor").innerHTML = "Los valores son iguales";
    }
    
};

function concatenar(a,b){
    document.getElementById("concatenar").innerHTML = `${a.trim().concat(b.trim())}`
    
};

function descuentos(valorProducto, x){

    
    
    if ( valorProducto < 200) {
        document.getElementById("descuento").innerHTML = `Debe abonar ${valorProducto} pesos`;    
    } else if ( (valorProducto >= 200) && (valorProducto <= 400) ) {
        
        if ( x === "E"){
                let saldo = valorProducto-(valorProducto * 0.30)
                document.getElementById("descuento").innerHTML = `Debe abonar ${saldo} pesos`
        }else if ( x === "D") {
            let saldo = valorProducto-(valorProducto * 0.20)
            document.getElementById("descuento").innerHTML = `Debe abonar ${saldo} pesos`
        }else if (x === "C" ) {
            let saldo = valorProducto-(valorProducto * 0.10)
            document.getElementById("descuento").innerHTML = `Debe abonar ${saldo} pesos`
        }else{
            document.getElementById("descuento").innerHTML = `El codigo ingresado no es valido`
        }
        
    } else if (valorProducto > 400){
        
        let saldo = valorProducto-(valorProducto * 0.40)
        document.getElementById("descuento").innerHTML = `Debe abonar ${saldo} pesos`
    }
    
};

function medioArbol(altura){
    
    let asterisco = "";
    for (let i = 0; i < altura ; i++) {
        
        asterisco += "<p>";
        for (let j = 0; j <= i; j++) {
            asterisco += "*";
            
        }
        asterisco += "</p>"
        
    }
    document.getElementById("arbol").innerHTML = asterisco;
};

function diaSemana(valor){
    let dia = Number(valor);
    switch (dia) {
        case 1:
            
            document.getElementById("contenido").innerHTML = "Es lunes";   
            break;
        case 2:
            document.getElementById("contenido").innerHTML = "Es martes";
            break;    
        case 3:
            document.getElementById("contenido").innerHTML = "Es miercoles";
            break;
        case 4:
            document.getElementById("contenido").innerHTML = "Es jueves";
            break;
        case 5:
            document.getElementById("contenido").innerHTML = "Es viernes";
            break;
        case 6:
        case 7:
            document.getElementById("contenido").innerHTML = "Es fin de semana";
            break;
        default:
            document.getElementById("contenido").innerHTML = "El numero ingresado no es valido";
           
    }

}

function promedio(){
    //se podria hacer mas sencillo si se suma las entradas y despues se divide, 
    //se podria hacer tambien con while, do while, tambien mostrar en el html...
    //supongo que eso va segun las necesidades.
    let cantidad = prompt("Ingrese el tamaño del array");
        array    = [];
        suma     = 0;
        for (let i = 0; i < Number(cantidad); i++) {
            let auxiliar = prompt("Ingrese numero, 1 valor a la vez.");
            array.push(Number(auxiliar));
            
        }
        for (let i = 0; i < array.length; i++) {
            suma += array[i];
            
        }
    alert(suma/(Number(cantidad)));
    
}