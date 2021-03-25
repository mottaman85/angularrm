import { Directive, ViewContainerRef, TemplateRef, 
            Input, SimpleChange } from '@angular/core'

@Directive({
    selector: "[ragaFor]"
})
export class RagaForDirective{
    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<Object>
    ){}

    @Input("ragaFor")
    dataSource: any;

    ngOnInit(){
        this.container.clear();
        for(let i=0; i<this.dataSource.length; i++){
            this.container.createEmbeddedView(
                this.template, 
                new IteratorContext(this.dataSource[i], i, this.dataSource.length)
            )
        }
    }
    
}

class IteratorContext{

    odd: boolean; 
    even: boolean;
    first: boolean;
    last: boolean;

    constructor(public $implicit: any,
        public index: number, total: number){

            this.odd = index % 2 == 1;
            this.even = !this.odd;
            this.first = index == 0;
            this.last = index == total - 1;

        }
}