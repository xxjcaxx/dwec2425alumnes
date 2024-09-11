export function createArraySomeTypes() {
    // Debe retornar un array que contenga, en este orden:
    //un número, un string, un boolean, otro array, un objeto, null, undefined, NaN y una función
    // En este primer ejecicio ponemos la solución para demostrar cómo se ha de retornar para pasar el test.
    // return [1,"aa",false,[1,2,3,4],{a:1,b:2}, null, undefined, NaN, function a(){return "a";}];  
  }


  export function variables() {
    var resultados = [];
  
    for (var i = 0; i < 3; i++) {
      resultados.push(function() {
        return i;
      });
    }

    return resultados;

    /* Arregla aquesta funció per a que el resultat siga un array de funcions que retornen 0,1,2 com s'espera */
  
  }
  
  