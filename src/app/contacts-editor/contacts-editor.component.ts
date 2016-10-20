import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contactToEdit: Contact = <Contact>{ address: {}};
  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router, private eventBus:EventBusService) { }

  ngOnInit() {
      let id = this.route.snapshot.params['id'];
      this.contactsService.getContact(id).subscribe(contact =>{ 
          this.contactToEdit = contact;
          this.eventBus.emit('appTitleChange', contact.name)
        });
  }

  cancel(contact: Contact){
      this.router.navigate(['/contact/', contact.id]);
  }

  save(contact: Contact){
      this.contactsService.updateContact(contact).subscribe(() => this.router.navigate(['/contact/', contact.id]));
  }
}
