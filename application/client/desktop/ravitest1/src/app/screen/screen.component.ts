import { Component, OnInit } from '@angular/core';
import { ScreenService } from './screen.service.ts';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})

export class ScreenComponent implements OnInit {

    constructor (
        private screenService: ScreenService,
    ) { }

    ngOnInit() {
    }
}