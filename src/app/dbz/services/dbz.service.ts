import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
// una forma alternativa a esta libreria es Crypto.randomUUID() propio de js
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID

// decorador para indicar que es un servicio
@Injectable({
  // si no trabajaramos con el providedIn tendriamos que definir el servicio en la parte de los providers en e app.module.ts
  // nuestro servicio sera un singlenton en toda la app, siempre que usemos este servicio mediante inyeccion de independencia, siempre tendremos el valor exactamente como se encuentre en ese momento
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Kriliin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
