import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTokenKey } from '../../core/constants/tokens';

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  get auth(): string {
    return localStorage.getItem(AuthTokenKey) || '';
  }

  set auth(value: string) {
    localStorage.setItem(AuthTokenKey, value);
    this.router.navigate(['/']);
  }
}
