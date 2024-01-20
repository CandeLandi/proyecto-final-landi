import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordComponent } from './layouts/dashbord/dashbord.component';
import { DashbordModule } from './layouts/dashbord/dashbord.module';
import {MatTableModule} from '@angular/material/table';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import { UsersModule } from './layouts/dashbord/pages/users/users.module';
registerLocaleData(esAR);
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashbordModule,
    MatTableModule,
    UsersModule
  ],
  providers: [
    {  provide: LOCALE_ID,
    useValue: 'es-AR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
