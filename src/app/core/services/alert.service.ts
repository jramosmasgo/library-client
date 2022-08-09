import { Injectable } from '@angular/core';
import sweetAlert from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alertSucces(title: string, message: string) {
    sweetAlert.fire({
      title: title,
      text: message,
      icon: 'success',
    });
  }

  alertError(title: string, message: string) {
    sweetAlert.fire({
      title: title,
      text: message,
      icon: 'error',
    });
  }
}
