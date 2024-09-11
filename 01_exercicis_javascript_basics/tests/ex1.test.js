import {describe, expect, test } from "vitest";

import * as ex1 from "../index.js"


describe("Javascript Básico", function () {
    describe("Variables", function () {
      test("Debe retornar un array elementos de los tipo solicitados", function () {
        expect(ex1.createArraySomeTypes().map((element) => typeof element)).toEqual([
          "number",
          "string",
          "boolean",
          "object",
          "object",
          "object",
          "undefined",
          "number",
          "function",
        ]);
        expect(ex1.createArraySomeTypes()[3] instanceof Array).toBe(true);
        expect(ex1.createArraySomeTypes()[5] === null).toBe(true);
        expect(ex1.createArraySomeTypes()[6] === undefined).toBe(true);
        expect(isNaN(ex1.createArraySomeTypes(7))).toBe(true);
        expect(ex1.createArraySomeTypes()[8] instanceof Function).toBe(true);
      });
      test("Debe retornar un array de funciones que retornen 0,1,2", function () {
        let resultados = ex1.variables();
        expect(Array.isArray(resultados)).toBe(true);
        resultados.forEach((elemento) => {
          expect(typeof elemento).toBe('function');
        });
        expect(resultados[0]()).toBe(0);
        expect(resultados[1]()).toBe(1);
        expect(resultados[2]()).toBe(2);
      });
    });
});