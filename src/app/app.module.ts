import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponentComponent } from './contacts-detail/contacts-detail-component.component';
import { ContactsAppRoutes  } from './app.routes';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [ContactsAppComponent,ContactsHeaderComponent,ContactsListComponent,ContactsDetailComponentComponent],
  providers: [ContactsService],
  imports: [BrowserModule, 
            RouterModule.forRoot(ContactsAppRoutes)],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
