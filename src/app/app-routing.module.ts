import { ServidorComponent } from './_pages/cadastro/servidor/servidor.component';
import { RamalComponent } from './_pages/cadastro/ramal/ramal.component';
import { ImpressoraComponent } from './_pages/cadastro/impressora/impressora.component';
import { HomeComponent } from './_pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'impressora', component: ImpressoraComponent},
  {path: 'ramal', component: RamalComponent},
  {path: 'servidor', component: ServidorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
