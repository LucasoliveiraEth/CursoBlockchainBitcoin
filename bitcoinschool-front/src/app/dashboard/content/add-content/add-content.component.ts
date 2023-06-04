import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent {
  content : any;
  contentFormGroup! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
     private toastr: ToastrService){

      this.contentFormGroup = this.formBuilder.group({
        title : [undefined, Validators.required],
        description : [undefined, Validators.required],
        type : ['video', Validators.required],
        url : [undefined, Validators.required],
        price : [undefined, Validators.required]
      });
  }

  get contentForm() { return this.contentFormGroup.controls; }

  addContent()
  {
    this.toastr.success('Conteúdo incluído com sucesso!');
  }
}
