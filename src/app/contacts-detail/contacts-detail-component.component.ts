import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-component',
  templateUrl: './contacts-detail-component.component.html',
  styleUrls: ['./contacts-detail-component.component.css']
})
export class ContactsDetailComponentComponent {

  @Input() contact: Contact;
  @Output() back = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Contact>();
}
