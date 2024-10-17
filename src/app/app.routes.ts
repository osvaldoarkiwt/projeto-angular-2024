import { Routes } from '@angular/router';
import { InicioMainComponent } from './pages/inicio/inicio-main/inicio-main.component';
import { ContatoMainComponent } from './pages/contato/contato-main/contato-main.component';
import { AlunosMainComponent } from './pages/alunos/alunos-main/alunos-main.component';
import { AlunoPerfilComponent } from './pages/aluno-perfil/aluno-perfil/aluno-perfil.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioMainComponent},
    {path:'contato', component: ContatoMainComponent},
    {path:'alunos', component: AlunosMainComponent,
        children:[
            {path:'perfil', component:AlunoPerfilComponent}
        ]
    },
    {path:'', redirectTo:'/inicio', pathMatch:'full'}
];
