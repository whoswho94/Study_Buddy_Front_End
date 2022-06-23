import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }
}
