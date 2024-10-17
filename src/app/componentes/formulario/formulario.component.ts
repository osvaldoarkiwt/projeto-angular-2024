import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  banda: string = '';

  @Output() emissor = new EventEmitter<string>();

  selecionarBanda(){
    this.emissor.emit(this.banda);
  }
}
