import { Component,input,output } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) =>item,
  (item : WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete

]

@Component({
  selector: 'wish-filter',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './wish-filter.html',
  styleUrl: './wish-filter.css',
})

export class WishFilter {
  filter =input<any>(); //Both input and output used for 2-way binding for using banana in the box [()]
  filterChange = output<any>(); 
  listFilter: any ='0';
  
  ngOnInit():void{
    this.updateFilter('0'); 
    // this.filterChange.emit(filters[0]); -This works too for initial value of the filter
  }
  updateFilter(value:any){
      this.filterChange.emit(filters[value]);
  }

}
