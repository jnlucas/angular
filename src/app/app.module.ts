/* modules */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// localStorage
import { LocalStorageModule } from 'angular-2-local-storage';




// components
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

// Service
import { DespesaService } from './despesa.service';

import { currencyRS } from './currency.ts';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    currencyRS
  ],
  imports: [
      BrowserModule
    , RoutingModule
    , NgbModule.forRoot()
    , FormsModule

    , LocalStorageModule.withConfig({
      prefix: 'despesasApp',
      storageType: 'localStorage'
    })
  ],
  providers: [DespesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
