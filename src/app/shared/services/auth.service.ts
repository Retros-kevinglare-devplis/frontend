import { Injectable } from '@angular/core';
import { AuthTokenKey, RefreshTokenKey } from '../../core/constants/tokens';
import { UserKey } from '../../core/constants/users';
import { RouterPath } from '../../core/constants/router-path.enum';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../core/constants/api-routes.enum';
import { StorageService } from './storage.service';
import { filter, tap } from 'rxjs';
import { User } from '../../shared/models/user';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  get token(): string {
    return localStorage.getItem(AuthTokenKey) || '';
  }

  set token(value: string) {
    localStorage.setItem(AuthTokenKey, value);
  }

  get refresh(): string {
    return localStorage.getItem(RefreshTokenKey) || '';
  }

  set refresh(value: string) {
    localStorage.setItem(RefreshTokenKey, value);
  }

  updateToken(): void {
    this.http
      .post<any>(environment.api + ApiRoutes.RefreshToken, {
        data: {
          attributes: {
            refresh_token: this.refresh,
            fingerprint: this.storage.fingerprint$.getValue(),
          },
        },
      })
      .pipe(
        filter((next) => next.data.attributes.accessToken),
        tap((next) => {
          this.token = next.data.attributes.accessToken;
          this.refresh = next.data.attributes.refreshToken;
        }),
      )
      .subscribe(() => {
        location.reload();
      });
  }

  get username(): string {
    return localStorage.getItem(UserKey) || 'username';
  }

  set username(value: string) {
    localStorage.setItem(UserKey, value);
    window.location.reload();
  }

  logout(): void {
    localStorage.removeItem(AuthTokenKey);
    localStorage.removeItem(RefreshTokenKey);
    window.location.href = RouterPath.SignIn;
  }
}
