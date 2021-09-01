import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocacocla',
  templateUrl: './cocacocla.component.html',
  styleUrls: ['./cocacocla.component.css']
})
export class CocacoclaComponent implements OnInit {

  constructor(
    private _route: Router
  ) { }

  ngOnInit(): void {
  }

  irDetalles(){
    console.log("Ir al detalle de coca cola")
    this._route.navigate(["/coca/detalle"])
  }
}
