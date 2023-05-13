import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  registerFormGroup! : FormGroup;
  submitted = false;
  checkboxConfirmacao = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerFormGroup = this.formBuilder.group({
      word1: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      checkboxConfirmacao : [undefined, Validators.required]});
  }

  get registerForm() { return this.registerFormGroup.controls; }

}
