import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/app/shared/models/user/register.model';
import { environment } from 'src/environments/environment';
import { IResponseServer } from 'src/app/shared/models/response/response.model';
import { UserLogin } from 'src/app/shared/models/user/login.model';
import { Login } from 'src/app/shared/models/auth/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  registerUser(dataRegister: UserRegister): Observable<any> {
    const uri = `${environment.urlAuth}/register`;
    return this.httpClient.post<any>(uri, dataRegister);
  }

  login(credentials: Login): Observable<IResponseServer<UserLogin>> {
    const uri = `${environment.urlAuth}/authenticate`;
    return this.httpClient.post<IResponseServer<UserLogin>>(uri, credentials);
  }
}
