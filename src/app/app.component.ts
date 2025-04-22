import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonComponent } from './boton/boton.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pedro';
  money = 0
  suma() {
    this.money++;
  }
  resta() {
    this.money--;
  }
}
