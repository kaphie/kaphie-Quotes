import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-body',
  templateUrl: './quote-body.component.html',
  styleUrls: ['./quote-body.component.css']
})
export class QuoteBodyComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  delQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
