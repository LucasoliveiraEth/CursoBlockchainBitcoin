import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { ProfileRequest } from 'src/models/ProfileRequest';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  profile : any;
  request = new ProfileRequest();
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
  updateprofile(){

    this.submitted = true;

    if (this.profileFormGroup.invalid) {
      return;
    }
    this.request.UserCode = localStorage.getItem('user') ?? "";
    this.request.UserName = this.profileForm['userName'].value;
    this.request.Description = this.profileForm['description'].value;

    this.userService.updateprofile(this.request)
        .subscribe({
          next: () => {
            this.toastr.success('Perfil atualizado com sucesso!');
          },
          error: (error) => {
            console.log("Ocorreu erro na requisição:" + error);
            this.toastr.error('Não foi possivel salvar os dados!');
          }
    })
  }
}
