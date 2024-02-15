import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardModule } from './layouts/dashbord/dashboard.module';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import { UsersModule } from './layouts/dashbord/pages/users/users.module';
import { CursosModule } from './layouts/dashbord/pages/cursos/cursos.module';
import { LoadingService } from './core/services/loading.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from './layouts/dashbord/pages/pipes/pipes.module';

registerLocaleData(esAR);
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    UsersModule,
    CursosModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PipesModule,
    DatePipe,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }