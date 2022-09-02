import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './_shared/sidenav/sidenav/sidenav.component';
// import { CadastroComponent } from './_pages/cadastro/cadastro.component';
import { HomeComponent } from './_pages/home/home.component';
// import { CadastroFormComponent } from './_pages/cadastro/cadastro-form/cadastro-form.component';
import { ImpressoraComponent } from './_pages/cadastro/impressora/impressora.component';
import { ServidorComponent } from './_pages/cadastro/servidor/servidor.component';
import { RamalComponent } from './_pages/cadastro/ramal/ramal.component';
import { ImpressoraFormComponent } from './_pages/cadastro/impressora/impressora-form/impressora-form.component';
import { TesteComponent } from './_pages/chamado/teste/teste.component';
import { BodyComponent } from './_pages/body/body.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    ImpressoraComponent,
    ServidorComponent,
    RamalComponent,
    ImpressoraFormComponent,
    TesteComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
