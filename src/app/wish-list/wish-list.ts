import { Component,input } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';

@Component({
  selector: 'wish-list',
  imports: [],
  standalone:true,
  templateUrl: './wish-list.html',  
  styleUrl: './wish-list.css',
})
export class WishList {


  wishes = input<WishItem[]>();

  toggleItem(item: WishItem){
  item.isComplete = !item.isComplete;
  console.log(item);

  }
}
