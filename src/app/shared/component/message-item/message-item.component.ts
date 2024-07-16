import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-message-item',
  standalone: true,
  imports: [CardComponent, SidebarComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.scss'
})
export class MessageItemComponent {

}
