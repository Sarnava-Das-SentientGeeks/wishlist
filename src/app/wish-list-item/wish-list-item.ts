import { Component,input,output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'wish-list-item',
  imports: [NgClass],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {

  wishText = input<string>();
  wishId = input<number>();

  wishFulfill = input<boolean>();
  wishFulfillChange = output<boolean>();

  get cssClasses(){
    // return this.wishFulfill() ? ['strikeout', 'text-muted'] : [];
    // return this.wishFulfill()? 'strikeout text-muted' : '';
    return {'strikeout text-muted' : this.wishFulfill()};
  }
  toggleFulfill(){
    this.wishFulfillChange.emit(!this.wishFulfill());
  }
}
