import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartsModule } from 'ng2-charts';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { AngularBootstrapModule } from './modules/angular-bootstrap/angular-bootstrap.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularBootstrapModule,
    AngularFontAwesomeModule,
    Ng2GoogleChartsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
