import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../../models/weather.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  @Input() item: Weather[];

  constructor() { }

  ngOnInit() {
  }

}
