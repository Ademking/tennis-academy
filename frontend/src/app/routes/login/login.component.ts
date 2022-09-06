import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private toast: HotToastService, private router: Router) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

  get f() { return this.form.controls; }

  onSubmit(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.authService.login(this.form.value.email, this.form.value.password).subscribe(
      {
        next: (isLoggedIn: Boolean) => {
          if (isLoggedIn) {
            this.submitted = false;
            this.toast.success('Logged in successfully', {
              position: 'bottom-center',
            });
            this.router.navigate(['/user']);
          }
        },
        error: (err) => {
          this.submitted = false;
          this.toast.error(err.error.message, {
            position: 'bottom-center',
          });
        }
      }

    );

  }
}
