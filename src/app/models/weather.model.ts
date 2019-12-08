import {ShortWeatherDescription} from './short-weather-description';
import * as moment from 'moment';

export class Weather {

  private time: string;
  constructor (
    private data: any,
    private city: string) {}

  public getWeather(): ShortWeatherDescription[] {
    return this.data.weather.map(item => {
      return new ShortWeatherDescription(item);
    });
  }
  public getTemp(): number {
    return this.data.main.temp;
  }
  public getTempMin(): number {
    return this.data.main.temp_min;
  }
  public getTempMax(): number {
    return this.data.main.temp_max;
  }
  public getDate(): string {
    return this.data.dt_txt;
  }
  public getDateOnly(): string {
    return this.getDate().split(' ')[0];
  }
  public setTime(time: string): void {
    this.time = time;
  }
  public getTime(): string {
    return this.time;
  }
  public getCity(): string {
    return this.city;
  }
}
