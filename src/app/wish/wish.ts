import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';
import {EventService} from '../../shared/services/EventService';
import {WishService} from './wish-service';
import {WishList} from  './wish-list/wish-list';
import {AddWishForm} from './add-wish-form/add-wish-form';
import { WishFilter } from './wish-filter/wish-filter';

@Component({
  selector: 'app-wish',
  imports: [WishFilter,WishList,AddWishForm],
  templateUrl: './wish.html',
  styleUrl: './wish.css',
})
export class Wish implements OnInit {

   items : WishItem[] =[];
  //  = [
    // new WishItem(1,'To Learn Angular'),
    // new WishItem(2,'To Learn ASP.NET Core', true),
    // new WishItem(3,'To Learn ABP framework'),
    
  // ];

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data:any)=>{this.items = data;},
      (error:any)=>{alert(error);}
    );
  }

  constructor(private events: EventService, private wishService:WishService){
    events.listen('removeWish',(id:any)=>{
        // console.log(id);
        this.items.splice(id,1); 
    })
  }
  // app_filter: any =()=>{}; -This was used for event binding for the output from the child
    app_filter: any;

  //In the app.html we can directly use items.filter(app_filter) instead of this getter visibleItems
  // get visibleItems() : WishItem[]{
  //     return this.items.filter(this.app_filter);} 

  // protected readonly title = signal('My wishlist');
}
