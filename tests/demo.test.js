
describe('Pruebas en Componente', () => {

    test('Esta prueba no debe fallar', () => {
        
        //inicializacion
        const message1 = 'Hola mundo'
    
        //estimulo
        const message2 = message1.trim();
    
        //observar comportamiento esperado
        expect( message1 ).toBe( message2 );
    })
    
})
