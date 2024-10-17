import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../../componentes/container/container.component';

@Component({
  selector: 'app-contato-main',
  standalone: true,
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault,ContainerComponent],
  templateUrl: './contato-main.component.html',
  styleUrl: './contato-main.component.scss'
})
export class ContatoMainComponent {

  tipoContato: string = 'residencial';

}
