import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-aluno-perfil',
  standalone: true,
  imports: [],
  templateUrl: './aluno-perfil.component.html',
  styleUrl: './aluno-perfil.component.scss'
})
export class AlunoPerfilComponent {

  constructor(private service : ApiService){}

  buscar(){
    this.service.getAlunoPeloId().subscribe(
      {
        next: res => console.log(res),
        error: err => console.log(err)
      }
    );
  }
}
