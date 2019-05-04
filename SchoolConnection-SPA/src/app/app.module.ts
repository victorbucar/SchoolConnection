import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AlertifyjsService } from './services/alertifyjs.service';
import { NgxPopperModule } from 'ngx-popper';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgxPopperModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyjsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
