import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '../components/home/home.module';

import {MatToolbarModule} from '@angular/material/toolbar';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from '../state/home/effects';
import { dbReducer } from '../state/home/reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MatToolbarModule,
    StoreModule.forRoot({ customers: dbReducer }),
    EffectsModule.forRoot([CustomerEffects]),

  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
