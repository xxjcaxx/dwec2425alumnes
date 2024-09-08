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
    });
});