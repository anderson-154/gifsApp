import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  constructor(private giftService:GifsService) { }

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>
  search(){
    const val = this.txtSearch.nativeElement.value;

    if(val.trim().length==0){
      return;
    }
    this.giftService.buscarGifts(val);
    this.txtSearch.nativeElement.value=''
  }

}
