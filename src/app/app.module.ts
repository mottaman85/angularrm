import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './component';
import { PaAttrDirective } from "./attr.directive";
import { RagaStructureDirective } from './structure.directive'
import { RagaForDirective } from './iterator.directive'
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { FormComponent } from './form.component'
import { TableComponent } from './table.component';
import { ResultadosComponentComponent } from './resultados-component/resultados-component.component'
import { raAddTax } from './addTax' 

@NgModule({
  declarations: [
    ProductComponent,
    PaAttrDirective,
    RagaStructureDirective,
    RagaForDirective,
    FormComponent,
    TableComponent,
    ResultadosComponentComponent,
    raAddTax
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
