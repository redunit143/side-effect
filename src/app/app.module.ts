import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CustomerModule } from './customer/customer.module';

import { booksReducer } from './states/books.reducer';
import { collectionReducer } from './states/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { AltSignalComponent } from './alt-signal/alt-signal.component';
import { altStateReducer } from './states/alt.state.reducer';

import { HttpClientModule } from '@angular/common/http';

import { NformLibraryModule } from 'nform-library';



@NgModule({
  declarations: [
    AppComponent, BookListComponent, BookCollectionComponent, AltSignalComponent,

  ],
  imports: [
    NformLibraryModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer
      }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CustomerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
