import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store'
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsComponent } from './inscriptions.component';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionsEffects } from './store/inscriptions.effects';
import { inscriptionsFeature } from './store/inscriptions.reducer';
import { SharedModule } from '../../../../shared/shared.module';
import { InscriptionsDialogComponent } from './components/inscriptions-dialog/inscriptions-dialog.component';


@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscriptionsRoutingModule,
    StoreModule.forFeature(inscriptionsFeature),
    EffectsModule.forFeature([InscriptionsEffects])
  ]
})
export class InscriptionsModule { }
