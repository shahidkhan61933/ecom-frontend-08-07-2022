import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { AbountUsComponent } from './components/abount-us/abount-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OnewayComponent } from './components/data/oneway/oneway.component';
import { PropertyComponent } from './components/data/property/property.component';
import { StylebindComponent } from './components/data/stylebind/stylebind.component';
import { ClassbindComponent } from './components/data/classbind/classbind.component';
import { EventbindComponent } from './components/data/eventbind/eventbind.component';
import { TwowayComponent } from './components/data/twoway/twoway.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    SidenavbarComponent,
    AbountUsComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    OnewayComponent,
    PropertyComponent,
    StylebindComponent,
    ClassbindComponent,
    EventbindComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
