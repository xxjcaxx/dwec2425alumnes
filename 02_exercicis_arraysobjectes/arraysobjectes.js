// Intenteu resoldre aquests exercicis sense utilitzar bucles com for, foreach, o for..of

export function extractData(data){
    /*
    Tenim un array d'objectes amb aquesta estructura de l'exemple:
    [
     {
      title: 'Dades de contacte',
      id: 'dadescontacte',
      open: true,
      fields: [
        { title: 'Nom', field: 'username' },
        { title: 'Cognoms', field: 'cognoms' },
        { title: 'Correu Electrònic', field: 'email' },
        { title: 'Correu Electrònic Oficial', field: 'correu_oficial' },
        { title: 'Telèfon', field: 'telefon' },
        { title: 'Adreça', field: 'adreça' },
        { title: 'Localitat', field: 'poble' },
        { title: 'Codi Postal', field: 'c_postal' },
      ]
    },
    {
      title: 'Dades Personals',
      id: 'dadespersonals',
      open: false,
      fields: [
        { title: 'DNI/NIE', field: 'dni' },
        { title: 'Caducitat DNI', field: 'caducitat_dni' },
        { title: 'Foto DNI per Davant', field: 'fotodnidavant', type: 'photo', bucket: 'fotos'},
        { title: 'Foto DNI per Darrere', field: 'fotodnidarrere' , type: 'photo' , bucket: 'fotos'},
        { title: 'Foto personal', field: 'avatar_url' , type: 'photo', bucket: 'fotos' },
        { title: 'Data Naixement', field: 'data_naixement' },
        { title: 'Nacionalitat', field: 'nacionalitat' },
        { title: 'Sexe', field: 'sexe' },
      ]
    },  
    ...

    Volem extreure sols els objectes de dins de l'array 'fields' i d'aquests sols en interessa el 'title' i el 'field'

    El resultat de la funció serà un array d'objectes amb el title i el field. 
    */
   return data.flatMap((objecte => objecte.fields
    .map(field => ({title: field.title, field: field.field}))));
}

export function removeBlankData(data){
/*
Aquesta funció accepta un array d'objectes que poden ser molt diversos i elimina els clau-valor que tenen com a valor "", null o undefined.
*/
  return data.map((objecte => Object.fromEntries(Object.entries(objecte)
  .filter(([clau, valor]) => valor !== "" && valor !== null && valor !== undefined))));
}


export const empresa = {
  empleados: [
    { nombre: 'Carlos', proyectos: ['Proyecto A', 'Proyecto B', 'Proyecto C'] },
    { nombre: 'Ana', proyectos: ['Proyecto A'] },
    { nombre: 'Javier', proyectos: ['Proyecto B', 'Proyecto C'] },
    { nombre: 'Lucía', proyectos: [] }
  ],
  proyectos: [
    { nombre: 'Proyecto A', descripcion: 'Desarrollo de software' },
    { nombre: 'Proyecto B', descripcion: 'Diseño gráfico' },
    { nombre: 'Proyecto C', descripcion: 'Marketing digital' }
  ],
  // obtenerEmpleadosConVariosProyectos: 
     /* Aquest mètode  ens retornarà un array d'empleats amb més d'un projecte ordenats per quantitat de projectes 
     El métode s'ha de poder executar amb els empleats de l'altra empresa utilitzant call()
     */
     obtenerEmpleadosConVariosProyectos() {
      return this.empleados.filter(empleado => empleado.proyectos.length > 1)
      .sort((valor1, valor2) => valor2.proyectos.length-valor1.proyectos.length);
     },

  //obtenerEmpleadosDeProyectos: 
  /*
     Aquest mètode ens retornarà un array de proyectes amb un atribut "empleados" que serà un array de noms dels empleats. 
   */
     obtenerEmpleadosDeProyectos(){
      return this.proyectos.map(o => ({nombre: o.nombre, 
        descripcion: o.descripcion,
        empleados:this.empleados
        .filter(empleado => empleado.proyectos
        .includes(o.nombre)).map(e => e.nombre)}) 
      )
     }
};

