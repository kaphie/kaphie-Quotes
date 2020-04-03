import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteBodyComponent } from './quote-body/quote-body.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteVoteComponent } from './quote-vote/quote-vote.component';
import { DateCountPipe } from './date-count.pipe';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';

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
    QuoteVoteComponent,
    DateCountPipe,
    SearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
