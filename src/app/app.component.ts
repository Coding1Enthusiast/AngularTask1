import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { Main2Component } from './Components/main2/main2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainComponent,Main2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'My App';

  constructor(){
  }
}
