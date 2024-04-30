import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main2.component.html',
  styleUrl: './main2.component.css'
})
export class Main2Component {
  data =[{
    name : "Lavanya",
    surname : "Indapure"
  },{
    name : "Ashutosh",
    surname : "Indapure"
  },{
    name : "Rohan",
    surname : "Twain"
  }]
}
