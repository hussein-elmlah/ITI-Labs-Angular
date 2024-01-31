import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error-msg',
  standalone: true,
  imports: [],
  templateUrl: './form-error-msg.component.html',
  styleUrl: './form-error-msg.component.css'
})
export class FormErrorMsgComponent {
  @Input() formInput!: AbstractControl<any, any>;
  @Input() validationType!: string;
  @Input() errorMsg!: string;



  // constructor() {
  //   this.errorMsg = '';
  //   this.isError = false;
  // }

}
