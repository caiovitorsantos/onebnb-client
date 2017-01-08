import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
 
import { routing } from './app.routing';
 
import { Property } from './shared/property';
import { PropertiesService } from './shared/property.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }