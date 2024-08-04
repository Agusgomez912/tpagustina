import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { PalerosComponent } from './pages/paleros/paleros.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { PalosComponent } from './pages/palos/palos.component';


@NgModule({
  declarations: [
    ProductoComponent,
    PalerosComponent,
    IndumentariaComponent,
    PalosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
