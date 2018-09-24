import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { DynamicItem } from './dynamic'
import { CharacterComponent } from '../shared/character/character.component'

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
  constructor(
    private componentFactory: ComponentFactoryResolver
  ) { }

  getComponent(type: string, data: {}, dynamicHost: any) {
    switch(type) {
      case 'character': {
        // Creating Objecto for the ccreating process
        let element = new DynamicItem(CharacterComponent, data)
        // Creating factory for designated component
        let componentFactory = this.componentFactory.resolveComponentFactory(element.component)
        // View container
        let viewContainerRef = dynamicHost.viewContainerRef
        // Create component inside the container
        let componentRef = viewContainerRef.createComponent(componentFactory)
        // Set inner data
        componentRef.instance.character = element.data
      }
      default: {
        return new DynamicItem(CharacterComponent, data)
      }
    }
  }
}
