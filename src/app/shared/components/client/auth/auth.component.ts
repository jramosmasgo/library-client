import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/shared/models/auth/login.model';
import { UserRegister } from 'src/app/shared/models/user/register.model';
import { Validatedata } from 'src/app/shared/utils/validate-field';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [],
})
export class AuthComponent implements OnInit {
  @ViewChild('authForm') authForm?: ElementRef;

  constructor(
    private renderer2: Renderer2,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  registerActive: boolean = false;

  registerForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    userName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
    ],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  closeAuthForm(): void {
    const auth = this.authForm?.nativeElement;
    if (auth.classList.contains('active')) {
      this.renderer2.removeClass(auth, 'active');
    }
  }

  login(): void {
    const credentials: Login = { ...this.loginForm.value };
    console.log(credentials);
    this.authService
      .login(credentials)
      .pipe(finalize(() => console.log('terminando peticion')))
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
      });
  }

  register(): void {
    const datatosend: UserRegister = { ...this.registerForm.value };
    console.log(datatosend);
    this.authService.registerUser(datatosend).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }

  changeForm(): void {
    this.registerActive = !this.registerActive;
  }

  validateDataRegister(campo: string): boolean {
    return new Validatedata().ValidateField(this.registerForm, campo);
  }

  validateDataLogin(campo: string): boolean {
    return new Validatedata().ValidateField(this.loginForm, campo);
  }
}
