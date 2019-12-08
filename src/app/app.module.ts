import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WeatherListComponent } from './elements/weather-list/weather-list.component';
import { WeatherItemComponent } from './elements/weather-item/weather-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {WeatherService} from './services/weather.service';
import { AlarmMessageComponent } from './elements/alarm-message/alarm-message.component';
import {ParamInterceptor} from './param-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WeatherListComponent,
    WeatherItemComponent,
    AlarmMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    WeatherService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
