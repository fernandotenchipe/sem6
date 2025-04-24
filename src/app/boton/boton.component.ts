import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() texto = 'dale click';
  @Input() color = 'red';
  @Output() onClick = new EventEmitter();
  @Output() edad = new EventEmitter<number>();
  clicked() {
    this.onClick.emit();
    this.texto = "uno mas";
  }
  getEdad() { 
    this.edad.emit(20);
  }
}
