import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { StartComponent } from './home/components/start/start.component';
import { IconsComponent } from './home/components/icons/icons.component';
import { FeaturedComponent } from './home/components/featured/featured.component';
import { ClientRouting } from './client.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubscribeNewsComponent } from './home/components/subscribe-news/subscribe-news.component';
import { ReviewsComponent } from './home/components/reviews/reviews.component';
import { ArrivalsComponent } from './home/components/arrivals/arrivals.component';
import { BookService } from 'src/app/core/services/book.service';
import { FormsModule } from '@angular/forms';
import { DetailBookComponent } from './detail-book/detail-book.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListBooksComponent,
    ProfileComponent,
    CartComponent,
    StartComponent,
    IconsComponent,
    FeaturedComponent,
    SubscribeNewsComponent,
    ReviewsComponent,
    ArrivalsComponent,
    DetailBookComponent,
  ],
  imports: [CommonModule, FormsModule, ClientRouting, SharedModule],
  providers: [BookService],
})
export class ClientModule {}
