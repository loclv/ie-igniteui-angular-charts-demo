import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IgxPieChartModule } from 'igniteui-angular-charts';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IgxPieChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
