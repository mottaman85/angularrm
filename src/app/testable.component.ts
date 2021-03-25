import { Component, HostListener, Input } from '@angular/core'
import { Product } from './product.model'
import { Model } from './repository'

@Component({
    selector: "testeable",
    templateUrl: "testable.html"
})
export class TestableComponent{

    @Input("pa-model")
    repository:Model;
    
    category:string = "soccer";
    highlighted:boolean = false;

    public getProducts(): Product[]{
        return this.repository.getProducts()
            .filter(p => p.category == this.category);
    }

    @HostListener("mouseenter", ["$event.type"])
    @HostListener("mouseleave", ["$event.type"])
    setHighlight(type: string){
        this.highlighted = type == "mouseenter";
    }

}