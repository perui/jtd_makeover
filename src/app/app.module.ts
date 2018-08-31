import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import {ShowcaseService} from './services/showcase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeCarouselComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    ShowcaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
