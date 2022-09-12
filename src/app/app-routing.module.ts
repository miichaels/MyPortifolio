import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  //Mandado o site iniciar na página Home 
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  //Outras rotas
  { path: 'rodape', component: RodapeComponent },
  { path: 'projetos', component: ProjetosComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cv', component: CVComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
