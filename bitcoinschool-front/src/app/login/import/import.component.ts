import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  returnUrl: string = "";
  submitted = false;
  checkboxConfirmacao = false;
  seedForm: FormGroup;
  registerFormGroup : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private walletService: WalletService) {

    this.seedForm = this.formBuilder.group({
      seedWords: this.formBuilder.array(Array(12).fill('').map(() => this.formBuilder.control('', Validators.required))),
    });

    this.registerFormGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      checkboxConfirmacao : [undefined, Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  get registerForm() { return this.registerFormGroup.controls; }
  get seedWords(): FormArray {
    return this.seedForm.get('seedWords') as FormArray;
  }


  importuser()
  {
    this.submitted = true;

     if (this.registerFormGroup.invalid || this.seedForm.invalid) {
       return;
     }

    const seedPhraseValues: string[] = this.seedWords.controls.map(control => control.value);
    const seedPhraseString: string = seedPhraseValues.join(' ');
    console.log("SeedPhrase:/" + seedPhraseString + "/");
    console.log("Passwword: " + this.registerForm['password'].value);

  }

}
