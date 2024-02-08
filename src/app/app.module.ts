import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './layouts/dashbord/dashboard.module';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import { UsersModule } from './layouts/dashbord/pages/users/users.module';
import { CursosModule } from './layouts/dashbord/pages/cursos/cursos.module';
import { LoadingService } from './core/services/loading.service';
import { RouterModule } from '@angular/router';
import { UserDatailComponent } from './layouts/dashboard/pages/users/components/user-datail/user-datail.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(esAR);
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    UserDatailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    UsersModule,
    CursosModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    {  provide: LOCALE_ID,
    useValue: 'es-AR',
    },
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
