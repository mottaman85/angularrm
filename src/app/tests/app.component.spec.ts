import { TestBed, ComponentFixture } from '@angular/core/testing';
import {TestableComponent}  from '../testable.component'
import { Product } from '../product.model'
import { Model } from '../repository'
import {  DebugElement } from '@angular/core'
import { By } from "@angular/platform-browser"
import { Component, ViewChild } from '@angular/core'

@Component({
    template: `<testeable [pa-model]="model"></testeable>`
})
class TestComponent{
    
    constructor(public model: Model){}

    @ViewChild(TestableComponent)
    testableComponent: TestableComponent;

}

describe("Define una bateria de pruebas", () =>{

    let fixture:ComponentFixture<TestComponent>;
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
            declarations: [TestableComponent, TestComponent],
            providers: [
                {provide: Model, useValue: mockRepository}
            ]
        })

        TestBed.compileComponents().then(()=>{
            fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            component = fixture.componentInstance.testableComponent;
            debugElement = fixture.debugElement.query(By.directive(TestableComponent));
            //bindingElement = debugElement.query(By.css("span")).nativeElement;

        })        

    });

    it("Validar que se reciba un elemento model desde el padre", ()=>{
        component.category = "Chess";
        fixture.detectChanges();
        let products = mockRepository.getProducts()
            .filter(p => p.category == component.category);
        
        let componentProducts = component.getProducts();

        for(let i=0; i<componentProducts.length; i++){
            expect(componentProducts[i]).toEqual(products[i]);
        }

        expect(debugElement.query(By.css("span")).nativeElement.textContent)
            .toContain(products.length)

    });

})