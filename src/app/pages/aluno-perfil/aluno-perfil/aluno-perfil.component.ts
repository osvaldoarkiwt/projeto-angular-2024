import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Aluno } from '../../../models/AlunoModel';

@Component({
  selector: 'app-aluno-perfil',
  standalone: true,
  imports: [],
  templateUrl: './aluno-perfil.component.html',
  styleUrl: './aluno-perfil.component.scss'
})
export class AlunoPerfilComponent {

  constructor(private service : ApiService){}

  aluno: Aluno = {
    "nome": "Joana",
    "endereco":{
        "logradouro":"Beira Mar",
        "numero":"9974",
        "cep": "60320000"
    }
  }

  buscar(){
    this.service.getAlunoPeloId().subscribe(
      {
        next: res => console.log(res),
        error: err => console.log(err)
      }
    );
  }

  salvarAluno(){
    this.service.postAluno(this.aluno).subscribe(
      {
        next: res => console.log(res),
        error: err => console.log(err)
      }
    );
  }
}
