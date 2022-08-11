import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { SignUpModule } from './shared/components/sign-up/sign-up.module';
import { FingerprintService } from './shared/services/fingerprint.service';
import { StorageService } from './shared/services/storage.service';

export function initFingerPrint(fingerprintService: FingerprintService) {
  return () => fingerprintService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignUpModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    StorageService,
    FingerprintService,
    {
      provide: APP_INITIALIZER,
      useFactory: initFingerPrint,
      deps: [FingerprintService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
