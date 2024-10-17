import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  texto : string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quos, culpa distinctio quo impedit fugit facere repellendus laudantium! Recusandae illo tenetur aliquid? Aperiam officiis suscipit quas, dignissimos iusto nostrum recusandae!'

  @Input() botaotexto : string =''; 
}
