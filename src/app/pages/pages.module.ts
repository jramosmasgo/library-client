import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { ClientComponent } from './client/client.component';
import { PublicComponent } from './public/public.component';

@NgModule({
  declarations: [ClientComponent, PublicComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
