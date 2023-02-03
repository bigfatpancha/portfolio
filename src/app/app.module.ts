import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RangeComponent } from './components/range/range.component';

import { LayoutModule } from '@angular/cdk/layout';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { BlockLayoutComponent } from './components/block-layout/block-layout.component';
import { FlexLayoutComponent } from './components/flex-layout/flex-layout.component';
import { DividerComponent } from './components/divider/divider.component';
import { TitleComponent } from './components/title/title.component';
import { IconComponent } from './components/icon/icon.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RangeComponent,
    GreetingComponent,
    ParagraphComponent,
    BlockLayoutComponent,
    FlexLayoutComponent,
    DividerComponent,
    TitleComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
