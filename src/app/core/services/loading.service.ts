import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  show(): void {
    this.isLoading.next(true);
    console.log(this.isLoading.getValue());
  }

  hide(): void {
    this.isLoading.next(false);
  }
}
