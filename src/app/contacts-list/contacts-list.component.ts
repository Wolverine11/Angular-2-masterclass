import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{
  constructor(private contactsService: ContactsService){}

  contacts: Contact[];

  ngOnInit(){
    this.contactsService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

}
