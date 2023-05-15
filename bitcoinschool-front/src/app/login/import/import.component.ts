import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {

  submitted = false;
  checkboxConfirmacao = false;

  seedForm: FormGroup;
  registerFormGroup : FormGroup;


  constructor(private formBuilder: FormBuilder) {

    this.seedForm = this.formBuilder.group({
      seedWords: this.formBuilder.array(Array(12).fill('').map(() => this.formBuilder.control('', Validators.required))),
    });

    this.registerFormGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      checkboxConfirmacao : [undefined, Validators.required]
    });

  }

  get registerForm() { return this.registerFormGroup.controls; }
  get seedWords(): FormArray {
    return this.seedForm.get('seedWords') as FormArray;
  }

}
