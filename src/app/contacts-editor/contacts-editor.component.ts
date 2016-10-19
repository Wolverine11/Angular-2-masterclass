import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contactToEdit: Contact = <Contact>{ address: {}};
  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
      let id = this.route.snapshot.params['id'];
      this.contactsService.getContact(id).subscribe(contact => this.contactToEdit = contact);
  }

  cancel(contact: Contact){
      this.router.navigate(['/contact/', contact.id]);
  }

  save(contact: Contact){
      this.contactsService.updateContact(contact).subscribe(() => this.router.navigate(['/contact/', contact.id]));
  }
}