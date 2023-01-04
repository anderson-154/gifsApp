import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent   {

  constructor(private giftService:GifsService) { }

  get results(){
    return this.giftService.results;
  }


}
