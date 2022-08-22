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
import { HttpClientModule } from '@angular/common/http';
import { NotificationModule } from './shared/components/notification/notification.module';
import { NotificationService } from './shared/services/notification.service';

export function initFingerPrint(fingerprintService: FingerprintService) {
  return () => fingerprintService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotificationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SignUpModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    StorageService,
    FingerprintService,
    NotificationService,
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
