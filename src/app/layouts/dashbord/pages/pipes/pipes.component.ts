import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
today = new Date();
price = 1000;

user = {
  firstName : ' Goku',
  lastName : 'Son',
};
}
