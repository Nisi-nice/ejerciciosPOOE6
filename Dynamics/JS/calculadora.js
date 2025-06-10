

class Calculadora{

    suma(var1,var2)
    {
       const suma = var1+var2;
        return suma;
    }  

    resta(var1,var2)
    {
        const resta = var1-var2;
        return resta;
    }

    mulplicacion(var1,var2)
    {
        const multi = var1 * var2;
        return multi;
    }

    division(var1,var2)
    {
        const div = var1 / var2;
        return div;
    }
}


const var1 =2;
const var2=10;
let calcu= new Calculadora();
console.log("La suma de " + var1 + " y " + var2 + " es igual a " + calcu.suma(var1,var2) );
console.log("La resta de " + var1 + " y " + var2 + " es igual a " + calcu.resta(var1,var2) );
console.log("La multiplicacion de " + var1 + " y " + var2 + " es igual a " + calcu.mulplicacion(var1,var2) );
console.log("La division de " + var1 + " y " + var2 + " es igual a " + calcu.division(var1,var2) );