import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooleanToStringPipe } from './pipes/boolean-to-string.pipe';
import { TableChildComponent } from './table-child/table-child.component';
import { DetailsChildComponent } from './details-child/details-child.component';

@NgModule({
  declarations: [
    AppComponent,
    BooleanToStringPipe,
    TableChildComponent,
    DetailsChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
