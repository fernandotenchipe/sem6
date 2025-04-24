import { Component } from '@angular/core';
import { BotonComponent } from '../../boton/boton.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BotonComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'pedro';
  money = 0;
  edad= 20;
  suma() {
    this.money++;
  }
  resta() {
    this.money--;
  }
  getEdad(data: number) {
    this.edad = data;
  }
}
