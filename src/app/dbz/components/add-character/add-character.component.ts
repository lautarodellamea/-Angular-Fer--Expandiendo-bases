import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: 'add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacter {
  // creamos una instancia de este nuevo emisor de eventos
  // y con el decorador Output() nos permitira mandar cosas al padre o hacia afuera, el @Input era para qe el hijo reciba cosas del padre como las props en react, recordar parentesis son eventos y corchetes atributos, props.
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // esto sirve para ir debugeando e ir veiendo como corre la app en caso de necesitarlo, o podemos colocar breakpoints en vsc apretando en los numeritos de las lineas
    // debugger;

    console.log(this.character);

    if (this.character.name.length === 0) return;

    // emitimos lo que queremos, en este caso un character
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
