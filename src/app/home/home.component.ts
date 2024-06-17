import { Component, OnInit } from '@angular/core';

import { ListaService } from './lista.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  image: string = 'assets/images/img1.jpeg';
  result!: string;

  listOfCats: any[] = [];

  constructor(
    private listaService: ListaService
  ) { }

  ngOnInit() {
    this.getListFromServive();
  }

  getListFromServive() {
    this.listaService.getList().subscribe((result: any) => {
      const arrayOfCats = result as any[]; // Explicitly cast to an array
      console.log('result', arrayOfCats);
      this.listOfCats = arrayOfCats;
    });
  }
                                                                        
  receberResult(value: string) {
    this.result = value;
}

}