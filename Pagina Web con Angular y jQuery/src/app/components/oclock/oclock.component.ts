import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-oclock',
  templateUrl: './oclock.component.html',
  styleUrls: ['./oclock.component.css']
})
export class OclockComponent implements OnInit {

  public clock : any;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.clock = moment().format('h:mm:ss');
    }, 1000);
  }

}
