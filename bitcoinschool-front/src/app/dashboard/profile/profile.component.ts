import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  profileFormGroup! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService){

      this.profileFormGroup = this.formBuilder.group({
        username: [undefined, Validators.required],
        description : [undefined, Validators.required]
      });
  }

  get profileForm() { return this.profileFormGroup.controls; }

  updateprofile(){}
}
