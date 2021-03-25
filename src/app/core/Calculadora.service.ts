import {NonZeroError} from './CoreErrors'

export class Calculadora{

    suma(a:number, b:number){

        return a + b;    

    }

    resta(a:number, b:number){

        return a - b;

    }

    divide(a: number, b: number){

        if(b == 0){
            throw new NonZeroError("No es posible dividir entre cero")
        }        
        
        return a/b;
    }

}