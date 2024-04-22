import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  // con este decorador Input le decimos que mi ListComponent va a recibir una property o puede reciir una property llamada characterList, dentro de los parentesis del decorador podemos cambiarle el nombre a la property sino queda como el nombre que le pongamos aca. Si no le mando nada a la property me da esta que defini aca por defecto
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log({ id });
    this.onDelete.emit(id);
  }
}
