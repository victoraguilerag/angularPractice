import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../core/character'
import { CharactersService } from '../../core/characters.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  characters:Character[]

  constructor(
    private characterService: CharactersService
  ) {
    this.characters = characterService.getCharacters()
  }

  ngOnInit() {
  }

}
