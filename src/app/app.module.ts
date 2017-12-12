import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';

import { AppComponent } from './app.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AngularFireModule } from 'angularfire2';
import { ContatoService } from './contato/contato.service';
import { MensagemContatoComponent } from './mensagem-contato/mensagem-contato.component';

const appRoutes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path: 'home', component: HomeComponent, data: {title : 'Home'}
  },

  {
    path: 'sobre',
    component: SobreComponent,
    data: { title: 'Sobre' }
  },

  {
    path: 'especialidades',
    component: EspecialidadesComponent,
    data: { title: 'Especialidades' }
  },

  {
    path: 'servicos',
    component: ServicosComponent,
    data: { title: 'Servicos' }
  },

  {
    path: 'contato',
    component: ContatoComponent,
    data: { title: 'Contato' }
  },
  {
    path: 'localizacao',
    component: LocalizacaoComponent,
    data: { title: 'Localizacao' }
  },
  {
    path: 'mensagem-contato',
    component: MensagemContatoComponent,
    data: { title: 'MensagemContato' }
  }
];

@NgModule({
  declarations: [
    SobreComponent,AppComponent, EspecialidadesComponent, ServicosComponent, ContatoComponent, HomeComponent, LocalizacaoComponent, MensagemContatoComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
  //  AngularFireModule.initializeApp(firebaseConfig),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAN4mWN-fRFHmingV2xtOdY38Nfk6EkTPU'
    })
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
