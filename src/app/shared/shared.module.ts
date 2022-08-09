import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/client/header/header.component';
import { ClientLayoutComponent } from './layout/client/client-layout.component';
import { NavbarComponent } from './components/client/navbar/navbar.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { AuthComponent } from './components/client/auth/auth.component';
import { CartFloatComponent } from './components/client/cart-float/cart-float.component';
import { NavbarMobileComponent } from './components/client/navbar-mobile/navbar-mobile.component';
import { CardBookComponent } from './components/client/card-book/card-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NumericInputComponent } from './components/numeric-input/numeric-input.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ClientLayoutComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    CartFloatComponent,
    NavbarMobileComponent,
    CardBookComponent,
    NumericInputComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    ClientLayoutComponent,
    CardBookComponent,
    ReactiveFormsModule,
    NumericInputComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
