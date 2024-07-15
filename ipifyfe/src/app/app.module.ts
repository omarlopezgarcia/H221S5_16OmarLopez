import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyIpInfoComponent } from './ip-info/my-ip-info/my-ip-info.component';
import { AllIpInfoComponent } from './ip-info/all-ip-info/all-ip-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MyIpInfoComponent,
    AllIpInfoComponent
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
