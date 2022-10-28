import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Datum, RootObject } from '../interfaces/gifsstickers.interface'

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private  key  = environment.key
  public gifs = new BehaviorSubject<Datum[]>([])
  public stickers = new BehaviorSubject<Datum[]>([])

  public detecta = new EventEmitter<boolean>()

  constructor(private http: HttpClient) { }

  getTrendingGifs(): Subscription {
    const params = new HttpParams()

    return this.http.get<RootObject>(`https://api.giphy.com/v1/gifs/trending`, {params})
      .subscribe((res: RootObject) => {
        console.log("Respuesta: ", res.data)
        this.gifs.next(res.data)
      })
  }

  searchGifs(gifName: string): Subscription {
    const params = new HttpParams()

    return this.http.get<RootObject>(`https://api.giphy.com/v1/gifs/search?q=${gifName}`, {params})
      .subscribe((res:RootObject) => {
        this.gifs.next(res.data)
      })
  }

  getTrendingStickers(): Subscription {


    const params = new HttpParams()

    return this.http.get<RootObject>(`https://api.giphy.com/v1/stickers/trending`, {params})
      .subscribe((res: RootObject) => {
        console.log("Respuesta: ", res.data)
        this.stickers.next(res.data)
      })
  }

  searchStickers(stickerName: string): Subscription {
    const params = new HttpParams()

    return this.http.get<RootObject>(`https://api.giphy.com/v1/stickers/search?q=${stickerName}`, {params})
      .subscribe((res:RootObject) => {
        this.stickers.next(res.data)
      })
  }

  getGifs(): Observable<Datum[]> {
    return this.gifs.asObservable()
  }

  getStickers(): Observable<Datum[]> {
    return this.stickers.asObservable()
  }

  detectar(): void {
    this.detecta.emit(true)
  }

}
