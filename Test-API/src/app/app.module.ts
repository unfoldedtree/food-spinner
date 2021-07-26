import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TableSpinnerToggleComponent } from './table-spinner-toggle/table-spinner-toggle.component';
import { TableComponent } from './table/table.component';
import {RetrieveService} from './service/retrieve.service';
import {FormsModule} from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import {NgxWheelModule} from 'ngx-wheel';
import { PlaceModalComponent } from './place-modal/place-modal.component';
import { SpinnerService } from './service/spinner.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    TableSpinnerToggleComponent,
    TableComponent,
    SpinnerComponent,
    PlaceModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxWheelModule
  ],
  providers: [RetrieveService, SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
