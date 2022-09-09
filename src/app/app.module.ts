import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IsAuth } from './shared/guards/is-auth.service';
import { AuthService } from './shared/services/auth.service';
import { SignUpModule } from './shared/components/sign-up/sign-up.module';
import { FingerprintService } from './shared/services/fingerprint.service';
import { StorageService } from './shared/services/storage.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotificationModule } from './shared/components/notification/notification.module';
import { NotificationService } from './shared/services/notification.service';
import { IsNotAuth } from './shared/guards/is-not-auth.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { JsonApiModule } from 'angular2-jsonapi';
import { DatastoreService } from './shared/services/datastore.service';

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
    LoadingBarHttpClientModule,
    JsonApiModule,
  ],
  providers: [
    IsAuth,
    IsNotAuth,
    AuthService,
    StorageService,
    FingerprintService,
    NotificationService,
    DatastoreService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
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
