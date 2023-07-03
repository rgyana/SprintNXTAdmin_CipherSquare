import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControlOptions } from '@angular/forms'
import { CustomValidators } from 'src/app/core/custom-validator/custom-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: any;
  // passwordChange: boolean = false;
  // getUserData: any;
  // bar0: any;
  // bar1: any;
  // bar2: any;
  // bar3: any;
  // passwordToCheck: any;
  // message: any;
  // messageColor: any;
  // private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];
  // passwordStrength: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  groupOptions: AbstractControlOptions = {
    validators: CustomValidators.passwordMatchValidator,
    asyncValidators: null
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      businessName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      businessEmail: ['', [Validators.email, Validators.required]],
      mobileNumber: ['', [Validators.required,
      Validators.pattern('[6789][0-9]{9}'),
      Validators.maxLength(10)]],
      password: ['',
        [Validators.compose([Validators.required, CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
        Validators.minLength(8)])
        ]],
      confirmPassword: [null, Validators.compose([Validators.required])]
    }, this.groupOptions
    )

  }

  get f() {
    return this.signupForm.controls;
  }

  // password strength
  // checkStrength(password: string) {
  //   // 1
  //   let force = 0;

  //   // 2
  //   const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
  //   const lowerLetters = /[a-z]+/.test(password);
  //   const upperLetters = /[A-Z]+/.test(password);
  //   const numbers = /[0-9]+/.test(password);
  //   const symbols = regex.test(password);

  //   // 3
  //   const flags = [lowerLetters, upperLetters, numbers, symbols];

  //   // 4
  //   let passedMatches = 0;
  //   for (const flag of flags) {
  //     passedMatches += flag === true ? 1 : 0;
  //   }

  //   // 5
  //   force += 2 * password.length + (password.length >= 10 ? 1 : 0);
  //   force += passedMatches * 10;

  //   // 6
  //   force = password.length <= 6 ? Math.min(force, 10) : force;

  //   // 7
  //   force = passedMatches === 1 ? Math.min(force, 10) : force;
  //   force = passedMatches === 2 ? Math.min(force, 20) : force;
  //   force = passedMatches === 3 ? Math.min(force, 30) : force;
  //   force = passedMatches === 4 ? Math.min(force, 40) : force;

  //   return force;
  // }

  // private getColor(strength: number) {
  //   let index = 0;

  //   if (strength === 10) {
  //     index = 0;
  //   } else if (strength === 20) {
  //     index = 1;
  //   } else if (strength === 30) {
  //     index = 2;
  //   } else if (strength === 40) {
  //     index = 3;
  //   } else {
  //     index = 4;
  //   }

  //   this.messageColor = this.colors[index];

  //   return {
  //     index: index + 1,
  //     color: this.colors[index],
  //   };
  // }

  // private setBarColors(count: number, color: string) {
  //   for (let n = 0; n < count; n++) {
  //     (this as any)['bar' + n] = color;
  //   }
  // }

  // onPassword() {
  //   this.passwordChange = !this.passwordChange;
  // }

  // onChanges(event: any) {
  //   const password = event.target.value;
  //   this.passwordToCheck = password;

  //   this.setBarColors(4, '#DDD');

  //   if (password) {
  //     const pwdStrength = this.checkStrength(password);
  //     pwdStrength === 40
  //       ? (this.passwordStrength = true)
  //       : (this.passwordStrength = false);

  //     const color = this.getColor(pwdStrength);
  //     this.setBarColors(color.index, color.color);

  //     switch (pwdStrength) {
  //       case 10:
  //         this.message = 'Poor';
  //         break;
  //       case 20:
  //         this.message = 'Not Good';
  //         break;
  //       case 30:
  //         this.message = 'Average';
  //         break;
  //       case 40:
  //         this.message = 'Good';
  //         break;
  //     }
  //   } else {
  //     this.message = '';
  //   }
  // }

  submitSignupForm() {
    console.log(this.signupForm.value);
  }

}
