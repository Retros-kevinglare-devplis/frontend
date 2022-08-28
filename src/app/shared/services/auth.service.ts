import { Injectable } from '@angular/core';
import { AuthTokenKey } from '../../core/constants/tokens';
import { RouterPath } from '../../core/constants/router-path.enum';

@Injectable()
export class AuthService {
  get token(): string {
    return localStorage.getItem(AuthTokenKey) || '';
  }

  set token(value: string) {
    localStorage.setItem(AuthTokenKey, value);
    window.location.reload();
  }

  logout(): void {
    localStorage.removeItem(AuthTokenKey);
    window.location.href = RouterPath.SignIn;
  }
}
