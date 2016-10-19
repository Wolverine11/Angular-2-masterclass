import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-component',
  templateUrl: './contacts-detail-component.component.html',
  styleUrls: ['./contacts-detail-component.component.css']
})
export class ContactsDetailComponentComponent implements OnInit {

  contact: Contact;
  
  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact = this.contactsService
                       .getContact(id);
  }

}
