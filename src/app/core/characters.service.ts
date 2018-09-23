import { Injectable } from '@angular/core';
import { Character } from './character'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private CHARACTERS: Character[] = [
    { id: 1, name: 'Fujiko Mine', ability: 'wide seduction', sex: 'female', side: 'villain'},
    { id: 2, name: 'Arsène Lupin III', ability: 'smart moves', sex: 'male', side: 'villain' },
    { id: 3, name: 'Daisuke Jigen', ability: 'guns experience', sex: 'male', side: 'villain' },
    { id: 4, name: 'Koichi Zenigata', ability: 'police training', sex: 'male', side: 'hero' },
  ]
  constructor() { }

  getCharacters() {
    return this.CHARACTERS
  }

  getCharacter(id: number) {
    return this.CHARACTERS.find(character => {
      return character.id == id
    })
  }
}
