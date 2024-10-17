import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alunos-main',
  standalone: true,
  imports: [RouterOutlet,NgFor,NgIf],
  templateUrl: './alunos-main.component.html',
  styleUrl: './alunos-main.component.scss'
})
export class AlunosMainComponent {

  alunos : any  = [
    {id:1, nome: 'Lúcia',idade:20 },
    {id:2, nome: 'João',idade:18 },
    {id:3, nome: 'Isac',idade:30 },
    {id:4, nome: 'Melissa',idade:20 },
    {id:5, nome: 'Ana',idade:19 },
  ];
}
