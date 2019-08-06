function count() {
    var cant = 0;
    a = prompt("Digite la palabra");
    b = prompt("Digite la letra a buscar");
    for (i = 0; i <= a.length; i++) {
        if (a[i] == b) {
            cant = cant + 1;
        }
    }
    return (cant);
};

function filter() {
    var numeros = new Array(3, 12, 45, 7, 100, 1, 2, 145);
    var nuevo = new Array;
    var j = 0;
    for (i=0;i<=numeros.length;i++){
        if(numeros[i]>10){
            nuevo[j] = numeros[i];
            j+=1;
        }
    }
    return(nuevo);
};

function hypotenuse(a, b) {
    cat1 = 0;
    cat2 = 0;
    hip = 0;
    cat1 = parseInt(prompt("Digite el valor del primer cateto"));
    cat2 = parseInt(prompt("Digite el valor del segundo cateto"));
    hip = Math.sqrt(cat1 * cat1 + cat2 * cat2);
    return(hip);
};
