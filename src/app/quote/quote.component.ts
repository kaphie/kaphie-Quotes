import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  // likeMe() {
  //   this.quote.like += 1;
  // }

  // dislikeMe() {
  //   this.quote.dislike += 1;
  // }
  constructor() {
  }

  @Output() myData = new EventEmitter();
  quotes: Quote[] = [
    // tslint:disable-next-line:max-line-length
    new Quote('Love', 'It was love at first sight, at last sight, at ever and ever sight.', 'Vladimir Nabokov', new Date(2019, 8 - 1, 17), 0, 0),
    new Quote('Health ', 'To enjoy the glow of good health, you must exercise.', 'Gene Tunney', new Date(2019, 8 - 1, 17), 0, 0),
    new Quote('Tech ', 'Technology is best when it brings people together.', 'Matt Mullenweg', new Date(2019, 8 - 1, 18), 0, 0),
    new Quote('Life', 'Simplicity is the ultimate sophistication.', 'Leonardo da Vinci', new Date(2019, 8 - 1, 18), 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote('Humour ', 'If you could choose one characteristic that would get you through life, choose a sense of humor.', 'Jennifer Jones', new Date(2019, 8 - 1, 17), 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote('Wisdom ', 'It is the mark of an educated mind to be able to entertain a thought without accepting it.', 'Aristotle', new Date(2019, 8 - 1, 17), 0, 0)
  ];

  public upvote: true;

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }

  toggleQuote(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  ngOnInit() {
  }

}
