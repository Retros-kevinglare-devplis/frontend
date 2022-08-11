import { Injectable } from '@angular/core';
import FingerPrint from '@fingerprintjs/fingerprintjs';
import { StorageService } from './storage.service';

@Injectable()
export class FingerprintService {
  constructor(private storage: StorageService) {}

  async init(): Promise<void> {
    await FingerPrint.load()
      .then((fp) => fp.get())
      .then((result) => {
        this.storage.fingerprint$.next(result.visitorId);
      });
  }
}
