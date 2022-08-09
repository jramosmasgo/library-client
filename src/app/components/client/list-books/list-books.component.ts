import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BookService } from 'src/app/core/services/book.service';
import { Book } from 'src/app/shared/models/book/book.model';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styles: [],
  providers: [BookService],
})
export class ListBooksComponent implements OnInit {
  constructor(private bookService: BookService) {}

  books: Book[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.loading = true;
    this.bookService
      .getAllBooks()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => (this.books = res.data),
        error: (err) => console.log(err),
      });
  }
}
