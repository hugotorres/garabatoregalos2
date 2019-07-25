import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductoDetailComponent }  from './producto-detail/producto-detail.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { GNavigationComponent } from './g-navigation/g-navigation.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SecondNavigationComponent } from './second-navigation/second-navigation.component';
import { StripComponent } from './strip/strip.component';
import { FilterCategoriaPipe } from './pipes/filter-categoria.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './spinner/spinner.component';
import { GarabatoModalComponent } from './garabato-modal/garabato-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
  /*  HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    */
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    ProductoDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    GNavigationComponent,
    DestacadosComponent,
    CategoriaComponent,
    FooterComponent,
    SocialMediaComponent,
    CarouselComponent,
    SecondNavigationComponent,
    StripComponent,
    FilterCategoriaPipe,
    ContactoComponent,
    SpinnerComponent,
    GarabatoModalComponent
  ],
  bootstrap: [ AppComponent ],

})
export class AppModule { }
