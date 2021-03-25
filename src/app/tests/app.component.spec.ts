import { TestBed, ComponentFixture } from '@angular/core/testing';
import {TestableComponent}  from '../testable.component'
import { Product } from '../product.model'
import { Model } from '../repository'
import {  DebugElement } from '@angular/core'
import { By } from "@angular/platform-browser"
import { Component, ViewChild } from '@angular/core'

@Component({
    template: `<testeable [pa-model]="model"></first>`
})
class TestComponent{
    
    constructor(public model: Model){}
    


}

describe("Define una bateria de pruebas", () =>{

    let fixture:ComponentFixture<TestableComponent>;
    let component: TestableComponent;

    let debugElement: DebugElement;
    let bindingElement: HTMLSpanElement;
    let divElement: HTMLDivElement;

    let mockRepository = {
        getProducts: function() {
            return [
                new Product(1,"test1", "Soccer", 100),
                new Product(2,"test1", "Soccer", 100),
                new Product(3,"test1", "Chess", 100)
            ]
        }
    }

    beforeEach(async()=>{
        
        TestBed.configureTestingModule({
            declarations: [TestableComponent],
            providers: [
                {provide: Model, useValue: mockRepository}
            ]
        })

        TestBed.compileComponents().then(()=>{
            fixture = TestBed.createComponent(TestableComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            bindingElement = debugElement.query(By.css("span")).nativeElement;
            divElement = debugElement.children[0].nativeElement;
        })        
        
    });

    it("Validación de filtros por categoria", () => {

        component.category = "Chess";
        fixture.detectChanges();
        expect(component.getProducts().length).toBe(1);
        expect(bindingElement.textContent).toContain("1");

        component.category = "Soccer";
        fixture.detectChanges();
        expect(component.getProducts().length).toBe(2);
        expect(bindingElement.textContent).toContain("2");

        component.category = "BaseBall";
        fixture.detectChanges();
        expect(component.getProducts().length).toBe(0);
        expect(bindingElement.textContent).toContain("0");

    });

    it("Valida el movimiento del mouse sobre el div", ()=>{
        expect(component.highlighted).toBeFalsy();
        expect(divElement.classList.contains("bg-success")).toBeFalsy();
        
        //MOUSE ENTER
        debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
        fixture.detectChanges();
        expect(component.highlighted).toBeTruthy();
        expect(divElement.classList.contains("bg-success")).toBeTruthy();

        //MOUSE LEAVE
        debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
        fixture.detectChanges();
        expect(component.highlighted).toBeFalsy();
        expect(divElement.classList.contains("bg-success")).toBeFalsy();
        




    });

})