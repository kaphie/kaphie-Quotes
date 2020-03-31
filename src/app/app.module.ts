import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteBodyComponent } from './quote-body/quote-body.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    HeaderComponent,
    LandingComponent,
    QuoteComponent,
    QuoteBodyComponent,
    HighlightDirective,
    QuoteFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
