import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  profile : any;

  profileFormGroup! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService){

      this.profileFormGroup = this.formBuilder.group({
        userName: [undefined , Validators.required],
        description : [undefined, Validators.required]
      });
  }
  ngOnInit(): void {
    const user = localStorage.getItem('user');

    this.userService.profile(user ?? "")
        .subscribe({
          next: (response) => {
            this.profile = response
            //console.log('Pegou:' + this.profile.userName);
            this.initializeForm();
          },
          error: (error) => console.log("Ocorreu erro na requisição:" + error)
        })
  }

  get profileForm() { return this.profileFormGroup.controls; }

  initializeForm() {
    this.profileFormGroup = this.formBuilder.group({
      userName: [this.profile.userName],
      description:  [this.profile.description]
    });
  }
  updateprofile(){}
}
