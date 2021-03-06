import { Component, OnInit } from '@angular/core';
import { EventBusService } from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {

  private title: string;
  
  constructor(private eventBus: EventBusService){}
  
   ngOnInit() {

     this.eventBus.observe('appTitleChange').subscribe(title => this.title = title);
  } 

}

