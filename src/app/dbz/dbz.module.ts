import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacter } from './components/add-character/add-character.component';

@NgModule({
  // exponemos dentro de este modulo
  declarations: [MainPageComponent, ListComponent, AddCharacter],

  // modulos que usaremos aca
  imports: [CommonModule, FormsModule],

  // exponemos al mundo exterior de este componente
  exports: [MainPageComponent],
})
export class DbzModule {}
