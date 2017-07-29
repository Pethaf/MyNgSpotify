import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { routing } from "./components/app.routing";
import { FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent,
                  SearchComponent,
                  AboutComponent, 
                  NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

