import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { EnrolleeListComponent } from './enrollee-list/enrollee-list.component';
import { ModifyEnrolleeComponent } from './modify-enrollee/modify-enrollee.component';


@NgModule({
  declarations: [
    AppComponent,
    EnrolleeListComponent,
    ModifyEnrolleeComponent
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
