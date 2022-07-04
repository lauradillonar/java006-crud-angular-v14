import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { ListaProductoComponent } from './producto/lista-producto/lista-producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListaProductoComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
