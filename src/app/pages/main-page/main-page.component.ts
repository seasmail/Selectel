import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Weather} from '../../models/weather.model';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  public cityForm = new FormGroup({
    city: new FormControl(''),
  });

  public weatherList: any;
  public city: string;
  public isError: boolean = false;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private weatherService: WeatherService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const city = this.route.snapshot.queryParamMap.get('p');
    if (city) {
      this.findWeather(city);
      this.cityForm.controls.city.setValue(city);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public onSubmit(): void {
    const city = this.cityForm.controls.city.value;
    if (city) {
      this.findWeather(city);
      this.location.replaceState('weather/?p=' + city);
    } else {
      return;
    }
  }

  public findWeather(city: string) {
    this.weatherService.findWeather(city)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(data => {
        this.isError = false;
        this.city = data.city.name;
        this.weatherList = data.list.map(item => new Weather(item, this.city));
      },
      error1 => this.isError = true);
  }

}
