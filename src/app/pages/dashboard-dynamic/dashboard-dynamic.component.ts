import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy
} from '@angular/core';
import { Character } from '../../core/character'

// Dynamic
import { DynamicItem } from '../../dynamic/dynamic'
import { DynamicDirective } from '../../dynamic/dynamic.directive'

// Service
import { CharactersService } from '../../core/characters.service'
import { DynamicService } from '../../dynamic/dynamic.service'

@Component({
  selector: 'app-dashboard-dynamic',
  templateUrl: './dashboard-dynamic.component.html',
  styleUrls: ['./dashboard-dynamic.component.css']
})

export class DashboardDynamicComponent implements OnInit {
  @ViewChild(DynamicDirective) dynamicHost: DynamicDirective

  characters:Character[]

  constructor(
    private characterService: CharactersService,
    private dynamicService: DynamicService,
    private componentFactory: ComponentFactoryResolver
  ) {
    this.characters = characterService.getCharacters()
  }

  ngOnInit() {
    this.renderComponents()
  }

  renderComponents() {
    this.characters.map((character, i) => {
      this.dynamicService.getComponent('character', character, this.dynamicHost)
    })
    debugger
  }

  // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
  // let adItem = this.ads[this.currentAdIndex];
  //
  // let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
  //
  // let viewContainerRef = this.adHost.viewContainerRef;
  // viewContainerRef.clear();
  //
  // let componentRef = viewContainerRef.createComponent(componentFactory);
  // (<AdComponent>componentRef.instance).data = adItem.data;

}
