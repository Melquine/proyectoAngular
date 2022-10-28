import { Component, OnInit, OnDestroy } from '@angular/core';
import { Datum } from '@app/interfaces/gifsstickers.interface';
import { GetdataService } from '@app/services/getdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trendinggifs',
  templateUrl: './trendinggifs.component.html',
  styleUrls: ['./trendinggifs.component.css']
})
export class TrendinggifsComponent implements OnInit, OnDestroy {

  public gifs: Datum[] = []
  public subscription$!: Subscription;

  constructor(private getDataService: GetdataService) { }

  ngOnInit(): void {
    this.getDataService.getTrendingGifs()
    this.subscription$ = this.getDataService.getGifs()
    .subscribe((res:Datum[]) => {
        this.gifs = res
    })
  }

  ngOnDestroy(): void {
    if(this.subscription$){
      this.subscription$.unsubscribe()
    }
  }

}
