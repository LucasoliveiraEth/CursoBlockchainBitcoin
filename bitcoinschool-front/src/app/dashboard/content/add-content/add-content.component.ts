import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent {
  content : any;
  contentFormGroup! : FormGroup;
  submitted = false;
  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 8,
    digitsOptional: false,
    prefix: '₿ ',
    placeholder: '0'
  });

  constructor(private formBuilder: FormBuilder,
     private toastr: ToastrService){

      this.contentFormGroup = this.formBuilder.group({
        title : [undefined, Validators.required],
        description : [undefined, Validators.required],
        type : ['video', Validators.required],
        url : [undefined, Validators.required],
        free : ['gratuito', Validators.required],
        price : [undefined, Validators.required]
      });
  }

  get contentForm() { return this.contentFormGroup.controls; }

  addContent()
  {
    this.toastr.success('Conteúdo incluído com sucesso!');
  }
}
