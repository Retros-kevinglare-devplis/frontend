import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StorageService {
  fingerprint$ = new BehaviorSubject<string | null>(null);
}
