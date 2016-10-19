import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { Http } from '@angular/http';

@Injectable()
export class ContactsService {

 private API_ENDPOINT: string = 'http://localhost:4201/api/contacts/';

 private contacts: Array<Contact>;

  constructor(private http: Http) { 
  }

  getContacts(){
    let contacts = this.http.get(this.API_ENDPOINT)
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });

      return contacts;
  }

  getContact(id: number | string){
    let contact = this.http.get(this.API_ENDPOINT + id)
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; });

      return contact;
  }
}
