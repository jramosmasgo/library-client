import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponsePageServer } from 'src/app/shared/models/response/response-page.model';
import { Book } from 'src/app/shared/models/book/book.model';
import { IResponseServer } from 'src/app/shared/models/response/response.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  urlServiceFront: string = `${environment.urlServicePublic}/book`;
  urlServiceBack: string = `${environment.urlServiceBack}/book`;

  getAllBooks(): Observable<IResponsePageServer<Book[]>> {
    return this.httpClient.get<IResponsePageServer<Book[]>>(
      this.urlServiceFront
    );
  }

  getBookById(idBook: string): Observable<IResponseServer<Book>> {
    const uri = `${this.urlServiceBack}/${idBook}`;
    return this.httpClient.get<IResponseServer<Book>>(uri);
  }
}
