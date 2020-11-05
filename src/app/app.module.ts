import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ContributorListService} from './services/contributor-list.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContributorsListComponent } from './components/contributors-list/contributors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContributorsListComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContributorListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
