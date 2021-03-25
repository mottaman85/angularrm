import { Directive, ElementRef, Attribute, Input } from "@angular/core";
@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective {

    @Input("pa-attr")
    bgClass: string;

   constructor(private element: ElementRef){}

   ngOnInit(){
       this.element.nativeElement.classList.add(this.bgClass || "bg-success", "text-white");
   }

}