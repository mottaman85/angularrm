import { ApplicationRef, Component } from "@angular/core";
import { Model } from './repository'
import {Product} from './product.model'
import { ProductService } from './ProductService'
@Component({
    selector: "app",
    templateUrl: "componenttemplate.html",
    providers: [ProductService, Model]
})
export class ProductComponent{
    constructor(
        ref: ApplicationRef,
        private productService: ProductService,
        public model:Model
        ) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    showTable: boolean = true;
    

    getProductByPosition(position: number): Product {
        this.productService.getDataTable();
        return this.model.getProducts()[position];
    }
    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClasses(key: number): string {
        let product = this.model.getProduct(key);
        return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClassMap(key: number): Object {
        let product = this.model.getProduct(key);
        return {
            "text-center bg-danger": product.name == "Kayak",
            "bg-info": product.price < 50
        };
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    getProductCount(): number {
        return this.getProducts().length;
    }
    targetName: string = "Kayak";

    

    fontSizeWithUnits: string = "30px";
    fontSizeWithoutUnits: string= "30";

}