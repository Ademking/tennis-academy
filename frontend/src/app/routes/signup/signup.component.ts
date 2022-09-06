import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { SignupService } from 'src/app/shared/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
    birthdate: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
  });

  constructor(private signupService: SignupService, private formBuilder: FormBuilder, private toast: HotToastService,) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(3)]],
        lastname: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password_confirmation: ['', [Validators.required, Validators.minLength(6)]],
        birthdate: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.minLength(8)]],
        address: ['', [Validators.required, Validators.minLength(3)]],
        city: ['', [Validators.required, Validators.minLength(3)]],
        country: ['', [Validators.required, Validators.minLength(3)]],
      });

  }

  onSubmit() {
    this.signupService.signup(
      this.signupForm.value.firstname,
      this.signupForm.value.lastname,
      this.signupForm.value.email,
      this.signupForm.value.password,
      this.signupForm.value.password_confirmation,
      this.signupForm.value.birthdate,
      this.signupForm.value.phone,
      this.signupForm.value.address,
      this.signupForm.value.city,
      this.signupForm.value.country
    ).subscribe(
      {
        next: (data: any) => {

          this.toast.success('Your account has been created successfully', {
            position: 'bottom-center',
          });
        },
        error: (err: any) => {

          Object.keys(err.error.errors).forEach((key) => {
            this.toast.error(err.error.errors[key][0], {
              position: 'bottom-center',
            });
          }
          );

        }
      }
    );

  }

}
