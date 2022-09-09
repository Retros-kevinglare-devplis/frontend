import { Injectable } from '@angular/core';
import { AuthTokenKey } from '../../core/constants/tokens';
import { UserKey } from '../../core/constants/users';
import { RouterPath } from '../../core/constants/router-path.enum';
import { User } from '../../shared/models/user';

@Injectable()
export class AuthService {
  get token(): string {
    return localStorage.getItem(AuthTokenKey) || '';
  }

  set token(value: string) {
    localStorage.setItem(AuthTokenKey, value);
    window.location.reload();
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
    window.location.href = RouterPath.SignIn;
  }
}
