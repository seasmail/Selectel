export class ShortWeatherDescription {

  constructor (
    private data: any
  ) { }

  public getMainWeather(): string {
    return this.data.main;
  }
  public getDescription(): string {
    return this.data.description;
  }
}
