import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  private contact: Contact;

 constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router, private eventBus:EventBusService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe(contact => {
    this.contact = contact;
    this.eventBus.emit('appTitleChange', contact.name)});
  }

  navigateToEditor(contact: Contact){
      this.router.navigate(['/contact/', contact.id]);
  }

  navigateToList(){
      this.router.navigate(['/']);
  }

}
