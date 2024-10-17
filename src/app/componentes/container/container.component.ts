import { Component } from '@angular/core';
import { PainelComponent } from '../painel/painel.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [PainelComponent,FormularioComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  input: string = 'algum valor aleatório';

  receberValor(resultado : string){
    console.log(resultado);
  }
}
