import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponentComponent } from './contacts-detail/contacts-detail-component.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsAppRoutes  } from './app.routes';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsService } from './contacts.service';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [ContactsAppComponent,
                 ContactsHeaderComponent,
                 ContactsListComponent,
                 ContactsDetailComponentComponent,
                 ContactsEditorComponent],
  providers: [ContactsService],
  imports: [BrowserModule, 
            RouterModule.forRoot(ContactsAppRoutes),
            HttpModule,
            FormsModule],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
