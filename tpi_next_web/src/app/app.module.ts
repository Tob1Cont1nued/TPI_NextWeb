// Angular imports
import { NgModule, APP_INITIALIZER, Injector, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Router, RouteReuseStrategy } from '@angular/router';
 
// ngx-translate imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
 
// app imports
import { AppComponent } from './app.component';
import { provideNzIcons } from './icons-provider';
import { de_DE, provideNzI18n } from 'ng-zorro-antd/i18n';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';

 registerLocaleData(de)
/**
 * Default App-Module.
 */
@NgModule({
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    
    TranslateModule.forRoot({
      useDefaultLang: true,
    }),

  ],
  providers: [
    provideRouter(routes), provideClientHydration(), provideNzIcons(), provideNzI18n(de_DE), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient()
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() {    // Create global Service Injector.

  }
}