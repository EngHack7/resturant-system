import { Component } from '@angular/core';
import { SearchService } from './search.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public _searchService: SearchService) {}
fake = 'cat'
  title = 'resturant';
  searchTxt: string = '';
  searchResult: [] = [];

  Search() {
    console.log(this.searchTxt);

    this._searchService.Search(this.searchTxt).subscribe(
      (searchResult) => {
        this.searchResult = searchResult;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  scrollToElement(id  : string) {
    console.log(id);
    ($ as any)('html, body').animate({
      scrollTop: ($ as any)(`#${id}`).offset().top,
  }, 1200);
 
  }

  ngOnInit() {}
}
