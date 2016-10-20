import { Injectable, Inject } from '@angular/core';
import { Contact } from './models/contact';
import { Http } from '@angular/http';

@Injectable()
export class ContactsService {


 private contacts: Array<Contact>;

  constructor(private http: Http, @Inject('apiEndPoint') private API_ENDPOINT) { 
  }

  getContacts(){
    let contacts = this.http.get(this.API_ENDPOINT + "contacts")
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });

      return contacts;
  }

  getContact(id: number | string){
    let contact = this.http.get(this.API_ENDPOINT + "contacts/" + id)
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; });

      return contact;
  }

  updateContact(contact: Contact)
  {
     return this.http.put(this.API_ENDPOINT + "contacts/" + contact.id, contact);
  }

  search(term: string){
       let contacts = this.http.get(this.API_ENDPOINT + "search?text=" + term)
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });

      return contacts;
  }

}
