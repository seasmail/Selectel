import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private api = 'http://api.openweathermap.org/data/2.5/forecast?';
  private units = 'imperial';

  constructor(private http: HttpClient) { }

  public findWeather(city: string): Observable<any> {
    return this.http.get(
      this.api +
      'q=' + city +
      '&units=' + this.units
    );
  }
}
