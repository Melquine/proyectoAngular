import { Component, OnDestroy, OnInit } from '@angular/core';
import { Datum } from '@app/interfaces/gifsstickers.interface';
import { GetdataService } from '@app/services/getdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trendingstickers',
  templateUrl: './trendingstickers.component.html',
  styleUrls: ['./trendingstickers.component.css']
})
export class TrendingstickersComponent implements OnInit, OnDestroy {

  public stickers: Datum[] = []
  public subscription$!:Subscription

  constructor(private getDataService: GetdataService) { }

  ngOnInit(): void {
    this.getDataService.getTrendingStickers()
    this.subscription$ = this.getDataService.getStickers()
      .subscribe((res:Datum[]) => {
        this.stickers = res
      })
  }

  ngOnDestroy(): void {
    if(this.subscription$){
      this.subscription$.unsubscribe()
    }
  }

}
