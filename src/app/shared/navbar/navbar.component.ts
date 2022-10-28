import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public name: string = 'Stickers-Gifs'
  public menu: Array<string> = ['home', 'gifsmoda', 'stickersmoda', 'buscar',]
  constructor() { }

  ngOnInit(): void {
  }

}
