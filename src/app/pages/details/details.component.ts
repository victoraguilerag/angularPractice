import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../core/character'

// Route
import { ActivatedRoute } from '@angular/router';

// Services
import { CharactersService } from '../../core/characters.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:string
  character:Character

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.character = this.charactersService.getCharacter(parseInt(this.id))
  }

  ngOnInit() {
    console.log(this.character)
  }

}
