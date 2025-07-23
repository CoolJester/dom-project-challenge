import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

  shownClicked(){
    console.log('Clicked');
  }

  logItemClicked(itemName: string) {
    console.log(`${itemName} item is clicked`);
  }

  openNextPanel(currentPanel: string) {
    // Get the next panel ID based on the current panel
    let nextPanelId: string;
    
    switch(currentPanel) {
      case 'panel-1':
        nextPanelId = 'panel-2';
        break;
      case 'panel-2':
        nextPanelId = 'panel-3';
        break;
      case 'panel-3':
        nextPanelId = 'panel-1';
        break;
      default:
        nextPanelId = 'panel-1';
    }
    
    // Get the accordion element
    const accordion = document.querySelector('.accordion');
    
    // Find the next panel's button and click it
    if (accordion) {
      const nextPanel = accordion.querySelector(`[ngbaccordionitem="${nextPanelId}"]`);
      if (nextPanel) {
        const button = nextPanel.querySelector('button[ngbAccordionButton]');
        if (button) {
          (button as HTMLElement).click();
        }
      }
    }
    
    console.log(`Opening next panel: ${nextPanelId}`);
  }
}
