import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    loadChildren: () =>
      import('../components/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'action',
    component: PublicComponent,
  },
  {
    path: '',
    redirectTo: 'client',
  },
  {
    path: '**',
    redirectTo: '/client',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
