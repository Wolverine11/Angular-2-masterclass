import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{
    constructor(private contactsService: ContactsService, private eventBus:EventBusService){}

    private  contacts: Observable<Array<Contact>>;
    private terms = new Subject<string>();

    ngOnInit(){
    
    this.eventBus.emit('appTitleChange', "Contacts")

    this.contacts = this.terms.debounceTime(400)
               .distinctUntilChanged()
               .switchMap(searchTerm => this.contactsService.search(searchTerm))
               .merge(this.contactsService.getContacts());
    } 
}
