const { multiplicar } = require('../main2');


describe('Funcion multiplicar', ()=>{
    test('debe calcular bien la multiplicacion', ()=>{
        const resultados = multiplicar(8,8);
        expect(resultados).toEqual(64)
    })
} )







// describe('Función realizarCalculos', () => {
//   test('debería calcular los resultados correctamente', () => {
//     const resultados = realizarCalculos(5, 3);
//     expect(resultados).toEqual({
//       suma: 8,
//       resta: 2,
//       multiplicar: 15,
//       dividir: 1.6666666666666667, // Toma en cuenta la precisión
//     });
//   });

//   test('debería manejar la división por cero', () => {
//     const resultados = realizarCalculos(5, 0);
//     expect(resultados.dividir).toBe(Infinity); // En JavaScript, la división por cero da Infinity
//   });
// });