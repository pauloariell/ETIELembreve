import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { HistoriaComponent } from './historia/historia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { ContatoComponent } from './contato/contato.component';
import { EmBreveComponent } from './em-breve/em-breve.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  declarations: [
    HomeComponent,
    ServicosComponent,
    HistoriaComponent,
    NoticiasComponent,
    TrabalheConoscoComponent,
    ContatoComponent,
    EmBreveComponent
  ]
})
export class PagesModule { }
