import { Component, Input } from '@angular/core';
import { Requisicao } from '../../models/RequisicaoModel';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss'
})
export class PainelComponent {

  @Input() valor: Requisicao | undefined;

}
