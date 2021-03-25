import { Component } from '@angular/core'

@Component({
    selector: 'raForm',
    template: '<div> {{ model }} </div>'
})
export class FormComponent{
    model: string = "texto desde model/."
}