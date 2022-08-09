import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { HomeComponent } from './home/home.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: ListBooksComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'book-detail/:id', component: DetailBookComponent },
  { path: '', redirectTo: 'home' },
  { path: '**', redirectTo: '/client/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRouting {}
