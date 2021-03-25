import { Component, Input } from '@angular/core'
import { Model } from './repository'
import { Product } from "./product.model"

@Component({
    selector: 'raTable',
    templateUrl: 'table.component.html'
})
export class TableComponent{

    @Input("model")
    dataModel: Model;
    taxRate:number;
    
    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }
    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    getProductCount(){
        return this.getProducts().length;
    }

}