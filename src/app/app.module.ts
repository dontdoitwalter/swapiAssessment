import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStarWarsComponent } from './get-star-wars/get-star-wars.component';
import { DisplayStarWarsComponent } from './display-star-wars/display-star-wars.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    GetStarWarsComponent,
    DisplayStarWarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }