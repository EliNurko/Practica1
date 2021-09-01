import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  texto: string = "Click aquí"
  matriz: any[] = []
  conteo: number = 0

  constructor() { }

  ngOnInit(): void {
    
  }

  cambiaTexto(){
    this.texto = "Gracias"

    this.conteo = this.conteo + 1
    this.matriz.push( this.conteo )
    console.log(this.matriz)
  }

}
