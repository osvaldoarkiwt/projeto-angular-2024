import { Component } from '@angular/core';
import { MainComponent } from '../../../componentes/main/main.component';
import { FigureComponent } from '../../../componentes/figure/figure.component';

@Component({
  selector: 'app-inicio-main',
  standalone: true,
  imports: [MainComponent,FigureComponent],
  templateUrl: './inicio-main.component.html',
  styleUrl: './inicio-main.component.scss'
})
export class InicioMainComponent {
   botao : string = 'LEIA MAIS'
}
