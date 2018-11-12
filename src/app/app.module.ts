import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoanComponent } from './loan/loan.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    LoanDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,  
    LocalStorageModule.withConfig({
      prefix: 'loan-app',
      storageType: 'localStorage'
    }), 
    RouterModule.forRoot([
      {path: '', component: LoanComponent},
      {path: 'loan', component: LoanComponent},
      {path: 'loan-details', component: LoanDetailsComponent}
    ]),   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

