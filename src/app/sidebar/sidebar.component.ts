import {Component, OnInit, Input} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input () quote: Quote;


  constructor() {
  }

  ngOnInit() {
  }

}
