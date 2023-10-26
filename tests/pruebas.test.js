const funciones = require('../function.js');
const restar = require('../function.js');

// Describe la prueba
describe('Función sumar', () => {
    // Prueba 1: Verificar que 2 + 3 sea igual a 5
    test('2 + 3 debe ser igual a 5', () => {
      // Llama a la función sumar con los argumentos 2 y 3
      const resultado = funciones.sumar(2, 3);
      
      // Compara el resultado con el valor esperado (5)
      expect(resultado).toBe(5);
    });
  
    // Prueba 2: Verificar que 0 + 0 sea igual a 0
    test('0 + 0 debe ser igual a 0', () => {
      const resultado = funciones.sumar(0, 0);
      expect(resultado).toBe(0);
    });
  });

  describe('Función restar', () => {
    // Prueba 1: Verificar que 2 + 3 sea igual a 5
    test('3 - 2 debe ser igual a 1', () => {
      // Llama a la función restar con los argumentos 3 y 2
      const resultado2 = funciones.restar(3, 2);
      
      // Compara el resultado con el valor esperado (1)
      expect(resultado2).toBe(1);
    });
  
    
  });