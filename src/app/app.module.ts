import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RangeComponent } from './components/range/range.component';

import { LayoutModule } from '@angular/cdk/layout';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RangeComponent,
    GreetingComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
