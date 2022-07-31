import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy {
  ngUnsubscribe$ = new Subject<void>();

  isAuth = AuthService.isAuth;

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
