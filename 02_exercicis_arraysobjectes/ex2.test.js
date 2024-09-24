import { extractData, removeBlankData, empresa } from "./arraysobjectes";
import { describe, expect, test } from "vitest";

describe("Arrays i Objectes", function () {

    test("extractData deu retornar l'array d'objectes com es demana", function () {
        const arrayExemple = [
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
                    { title: 'Foto DNI per Davant', field: 'fotodnidavant', type: 'photo', bucket: 'fotos' },
                    { title: 'Foto DNI per Darrere', field: 'fotodnidarrere', type: 'photo', bucket: 'fotos' },
                    { title: 'Foto personal', field: 'avatar_url', type: 'photo', bucket: 'fotos' },
                    { title: 'Data Naixement', field: 'data_naixement' },
                    { title: 'Nacionalitat', field: 'nacionalitat' },
                    { title: 'Sexe', field: 'sexe' },
                ]
            }]
        expect(extractData(arrayExemple)).toEqual([
            { title: 'Nom', field: 'username' },
            { title: 'Cognoms', field: 'cognoms' },
            { title: 'Correu Electrònic', field: 'email' },
            { title: 'Correu Electrònic Oficial', field: 'correu_oficial' },
            { title: 'Telèfon', field: 'telefon' },
            { title: 'Adreça', field: 'adreça' },
            { title: 'Localitat', field: 'poble' },
            { title: 'Codi Postal', field: 'c_postal' },
            { title: 'DNI/NIE', field: 'dni' },
            { title: 'Caducitat DNI', field: 'caducitat_dni' },
            { title: 'Foto DNI per Davant', field: 'fotodnidavant' },
            { title: 'Foto DNI per Darrere', field: 'fotodnidarrere' },
            { title: 'Foto personal', field: 'avatar_url' },
            { title: 'Data Naixement', field: 'data_naixement' },
            { title: 'Nacionalitat', field: 'nacionalitat' },
            { title: 'Sexe', field: 'sexe' },
        ]);

    });

    test("removeBlankData deu eliminar dades buides", function () {
        const arrayExemple = [
            {
                title: 'Dades de contacte',
                id: '',
                open: true,
                extra: "null",
                eliminar: "",
                eliminar2: null,
                eliminar3: undefined
            },
            {
                title: 'Dades Personals',
                id: 'dadespersonals',
                open: false,
                eliminar4: ""
            }]
        expect(removeBlankData(arrayExemple)).toEqual([
            { title: 'Dades de contacte', open: true,  extra: "null" },
            {  title: 'Dades Personals', id: 'dadespersonals',  open: false, },

        ]);

    });

    test("obtenerEmpleadosConVariosProyectos deu obtindre una llista ordenada d'empleats amb varis projectes", function () {
        const otraEmpresa = {
            empleados: [
              { nombre: 'Luis', proyectos: ['Proyecto X', 'Proyecto Y'] },
              { nombre: 'Sofía', proyectos: ['Proyecto Y'] }
            ],
          };

        expect(empresa.obtenerEmpleadosConVariosProyectos()).toEqual([
            { nombre: 'Carlos', proyectos: ['Proyecto A', 'Proyecto B', 'Proyecto C'] },
            { nombre: 'Javier', proyectos: ['Proyecto B', 'Proyecto C'] },
        ]);
        expect(empresa.obtenerEmpleadosConVariosProyectos.call(otraEmpresa)).toEqual([
            { nombre: 'Luis', proyectos: ['Proyecto X', 'Proyecto Y'] },
        ]);
    });

    test("obtenerEmpleadosDeProyectos deu obtindre una llista de projectes amb un atribut empleats que és una llista de noms", function () {
        let proyectosCopy = structuredClone(empresa.proyectos);
        let result = empresa.obtenerEmpleadosDeProyectos();
        expect(result).toEqual([
            { nombre: 'Proyecto A', descripcion: 'Desarrollo de software', empleados: ['Carlos','Ana'] },
            { nombre: 'Proyecto B', descripcion: 'Diseño gráfico' , empleados: ['Carlos','Javier'] },
            { nombre: 'Proyecto C', descripcion: 'Marketing digital' , empleados: ['Carlos','Javier']  }
        ]);
        expect(empresa.proyectos).toEqual(proyectosCopy); 
    });
});