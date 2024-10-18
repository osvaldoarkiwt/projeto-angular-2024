import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Requisicao } from '../../models/RequisicaoModel';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  banda: string = '';
  musica: string = '';

  mensagem : Requisicao = {
    banda: '',
    musica:''
  };

  @Output() emissor = new EventEmitter<Requisicao>();

  selecionarBanda(){

    this.mensagem.banda = this.banda;

    this.mensagem.musica = this.musica;

    this.emissor.emit(this.mensagem);
  }
}
