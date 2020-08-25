import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ConfiguracionComponent } from '../componentes/configuracion/configuracion.component';
import { OrdenesComponent } from '../componentes/ordenes/ordenes.component';
import { VentasComponent } from '../componentes/ventas/ventas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    ConfiguracionComponent,
    OrdenesComponent,
    VentasComponent
  ]
})
export class HomePageModule {}
