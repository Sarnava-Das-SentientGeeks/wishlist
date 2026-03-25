import { Component,input } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';
import {WishListItem} from '../wish-list-item/wish-list-item';

@Component({
  selector: 'wish-list',
  imports: [WishListItem],
  standalone:true,
  templateUrl: './wish-list.html',  
  styleUrl: './wish-list.css',
})
export class WishList {


  wishes = input<WishItem[]>();

  
}
