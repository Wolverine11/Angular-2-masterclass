import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit{
  constructor(private contactsService: ContactsService){}

  contacts: Contact[];

  ngOnInit(){
    this.contacts = this.contactsService.getContacts();
  }
}

