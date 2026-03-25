import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WishItem } from '../shared/models/wishitem';
import events from '../shared/services/EventService';

import {WishList} from  './wish-list/wish-list';
import {AddWishForm} from './add-wish-form/add-wish-form';
import { WishFilter } from "./wish-filter/wish-filter";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormsModule, WishList, AddWishForm, WishFilter],

})



export class App {

   items : WishItem[] = [
    new WishItem(1,'To Learn Angular'),
    new WishItem(2,'To Learn ASP.NET Core', true),
    new WishItem(3,'To Learn ABP framework'),
    
  ];

  constructor(){
    events.listen('removeWish',(wish:any)=>{
        console.log(wish);
    })
  }
  // app_filter: any =()=>{}; -This was used for event binding for the output from the child
    app_filter: any;

  //In the app.html we can directly use items.filter(app_filter) instead of this getter visibleItems
  // get visibleItems() : WishItem[]{
  //     return this.items.filter(this.app_filter);} 

  // protected readonly title = signal('My wishlist');
}
