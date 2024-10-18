import { Component } from '@angular/core';
import { PainelComponent } from '../painel/painel.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { Requisicao } from '../../models/RequisicaoModel';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [PainelComponent,FormularioComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  input: Requisicao | undefined;

  receberValor(resultado : Requisicao){
    
    this.input = resultado;

    console.log(resultado);
  }
}
