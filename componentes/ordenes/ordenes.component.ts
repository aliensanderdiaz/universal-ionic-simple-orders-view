import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss'],
})
export class OrdenesComponent implements OnInit {

  ordenes: any[] = [];
  orden: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.cargarOrdenes();
  }

  cargarOrdenes() {
    this.apiService.peticionGet('ordenes-pos')
      .subscribe(
        ( data: any ) => {
          this.ordenes = data.ventas;
          console.log(this.ordenes);
          
        }
      )
  }

  elegirOrden(indice) {
    this.orden = this.ordenes[indice];
  }

}
