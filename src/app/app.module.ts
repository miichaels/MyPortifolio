import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CVComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodapeComponent,
    NavbarComponent,
    CVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
