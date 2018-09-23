import { Component } from '@angular/core';
import { CharactersService } from './core/characters.service'
import { Character } from './core/character'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lupin III Roas'
  characters: Character[]

  constructor(
    private characterService: CharactersService
  ) {
    this.characters = characterService.getCharacters()
  }
}
