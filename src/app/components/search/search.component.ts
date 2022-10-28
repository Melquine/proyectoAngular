import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { Datum } from '@app/interfaces/gifsstickers.interface';
import { GetdataService } from '@app/services/getdata.service';
import { Observable, of, map, tap, filter, Subscription } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy, AfterViewInit {
  public value:string = 'Gifs'
  public gifsStickers: Datum[] = []
  public msg: string = ''
  public subscription$: Array<Subscription> = []

  @ViewChild('searchBox', { static: true }) searchBox!:ElementRef;

  constructor(private getDataService: GetdataService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.searchBox.nativeElement.focus()
    
  }

  
  dataChanged(e:string) {
    this.value = e

  }

  search(searchTerm:string) {
    this.getDataService.detectar()

    this.gifsStickers = []
    
    setTimeout(() => {


      const ob:Observable<string> = of(searchTerm)
      ob.pipe(
        map((search:string) => search.trim()),
        filter((search: string) => search !== ''),
        tap((search:string) => this.llamar(search))
      ).subscribe()


    }, 2000)


  }

  llamar(search:string) {
    if(this.value === 'Gifs'){
    this.getDataService.searchGifs(search)
    this.loadGifs()
    }else{
      this.getDataService.searchStickers(search)
      this.loadStickers()
    }
  }

  loadGifs() {


    const observer1$ = this.getDataService.getGifs()
      .subscribe((res:Datum[]) => {
      this.gifsStickers = res
    })

    this.subscription$.push(observer1$)
  }

  loadStickers() {

    const observer2$ = this.getDataService.getStickers()
      .subscribe((res:Datum[]) => {
      this.gifsStickers = res
    })

    this.subscription$.push(observer2$)

  }


  ngOnDestroy(): void {
    if(this.subscription$){
      this.subscription$.forEach(x => x.unsubscribe())
    }

  }

}
