import { Pipe } from '@angular/core'
@Pipe({
    name: "addTax"
})
export class raAddTax{

    defaultRate: number = 10;
    
    transform(value: any, rate?: any):number{
        let valueNumber = Number.parseFloat(value);
        let rateNumber = rate === undefined ? this.defaultRate : Number.parseFloat(rate);

        return valueNumber + (valueNumber * (rateNumber / 100));

    }

}