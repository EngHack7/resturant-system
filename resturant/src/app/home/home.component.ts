import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import * as $ from 'jquery';
import { MainRequestRestaurantService } from '../main-request-restaurant.service';
import { Imain } from '../interfaces/ImainPageResponse';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(
    private _searchService: SearchService,
    private _homeService: MainRequestRestaurantService
  ) {}
  mainRestaurantResponse: Imain[] = [];
  searchTxt: string = '';
  searchResult: [] = [];
  serverError = '';

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

  scrollToElement(id: string) {
    console.log(id);
    ($ as any)('html, body').animate(
      {
        scrollTop: ($ as any)(`#${id}`).offset().top,
      },
      1200
    );
  }

  openLoginModal() {
      ($ as any)('#LoginModal').toggleClass('LoginModal is-visuallyHidden')
      setTimeout(function () {
        ($ as any)('#container').toggleClass('MainContainer is-blurred')
        ($ as any)('#LoginModal').toggleClass("LoginModal") 
      }, 100);
      ($ as any)('#container').parent().toggleClass('ModalOpen')
  
  }

  closeLoginModal(){
    console.log('work');
    
    ($ as any)('#LoginModal').toggleClass('Modal is-hidden is-visuallyHidden');
    ($ as any)('#container').toggleClass('MainContainer');
    ($ as any)('#container').parent().toggleClass('')
  }

  ngOnInit() {
    this._homeService.mainPage('7').subscribe(
      (result) => {
        this.mainRestaurantResponse = result;
      },
      (error) => {
        this.serverError = error;
      }
    );
  }
}
