import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.model';
 
@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}
 
  getBooks(): Observable<Array<Book>> {
    const aBook = {"id": "CvASwnRq2zgC",
        "volumeInfo": {
          "title": "Seeing Voices",
          "authors": [
            "Oliver Sacks"
          ],
    }};

    return of([aBook]);
    /*
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
      */
  }
}