import {Component, Input, OnInit} from '@angular/core';

import {Weather} from '../../models/weather.model';

import * as _ from 'lodash';
import * as moment from 'moment';



@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  @Input() list: Weather[];

  public dates: string[];
  public groupedWeather;
  public sortColumn: string = 'temp';
  public sortDirIsDesc = true;

  /*const groupedMessages = _.groupBy(this.fouls, foul => {
    return foul.getMessage();
  });
  const messages = _.keys(groupedMessages);
  messages.map(item => {
  this.foulsMessage = item + ": " + groupedMessages[item].map(i => i.getShortName()).join("; ");
});*/
  constructor() {
  }

  ngOnInit() {
    this.groupByDays();
  }

  public groupByDays() {
    this.groupedWeather = _.groupBy(this.list, (item: Weather) => {
      const date = item.getDate().split(' ');
      item.setTime(date[1]);
      return date[0];
    });
    this.dates = _.keys(this.groupedWeather);
  }

  public sortByColumn(column: string) {
    if (this.sortColumn === column) {
      this.sortDirIsDesc = !this.sortDirIsDesc;
    } else {
      this.sortColumn = column;
      this.sortDirIsDesc = true;
    }

    this.sortBy(column);
  }

  private sortBy(column: string) {
    if (this.sortColumn === 'temp') {
      this.sortDaysByTemp(!this.sortDirIsDesc);
    }
  }

  public sortDaysByTemp(asc = true) {
    this.dates.map(date => {
      this.groupedWeather[date].sort(function(a, b) {
        if (a.getTemp() > b.getTemp()) {
          return asc ? 1 : -1;
        } else if (a.getTemp() < b.getTemp()) {
          return asc ? -1 : 1;
        }

        return 0;
      });
    });
  }

}
