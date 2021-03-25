import { Calculadora } from '../core/Calculadora.service'
import { NonZeroError } from '../core/CoreErrors'

describe("Pruebas unitarias de calculadorService",()=>{

    let calcService: Calculadora;
    
    beforeEach(()=>{
        calcService = new Calculadora();
    })

    it("valida Suma", ()=>{
        let result = calcService.suma(1,2);
        expect(result).toBe(3);
    })

    it("valida Resta", ()=>{
        let result = calcService.resta(3,2);
        expect(result).toBe(1);
    })

    it("division", ()=>{
        let result = calcService.divide(10,2);
        expect(result).toBe(5);
    })

    it("division / 0", ()=>{ 
        expect(function(){calcService.divide(10,0)})
            .toThrow(new NonZeroError("No es posible dividir entre cero"));
    })

});