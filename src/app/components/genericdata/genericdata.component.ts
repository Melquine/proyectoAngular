import { outputAst } from '@angular/compiler';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Datum } from '@app/interfaces/gifsstickers.interface';
import { GetdataService } from '@app/services/getdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-genericdata',
  templateUrl: './genericdata.component.html',
  styleUrls: ['./genericdata.component.css']
})
export class GenericdataComponent implements OnInit, OnDestroy {
  @Input() data: Datum[] = []
  @Output() enviarAlerta = new EventEmitter<string>()

  public valor:boolean = false
  public subscription$!: Subscription
  
  constructor(private getDataService: GetdataService) { }

  ngOnInit(): void {
    this.subscription$ = this.getDataService.detecta.subscribe({
      next: (x:boolean) => this.valor = x
    })

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }


}
