import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { of, Observable } from 'rxjs';

import { Book } from './book-list/books.model';

import { selectBookCollection, selectBooks } from './states/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './states/books.actions';

import { BooksService } from './book-list/books.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'side-effect';
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  public clickMessage: any = null;
  public clicky = new EventEmitter<string>();

  public clicked: any = null;

  public onButtestx = new EventEmitter<string>();
  public myClick = new EventEmitter<string>();

  constructor(
    private booksService: BooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }


  onAddx(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }


  onAltSig(bookId: string) {
    debugger;
    alert(bookId);
  }


  onButtest(e: Event) {
    debugger;
  }


  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
