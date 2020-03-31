import {Component, OnInit, Input} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  goals: any;
  addNewQuote(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  @Input () quote: Quote;


  constructor() {
  }

  ngOnInit() {
  }

}
