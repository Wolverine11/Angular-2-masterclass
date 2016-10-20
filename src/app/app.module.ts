import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponentComponent } from './contacts-detail/contacts-detail-component.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsAppRoutes  } from './app.routes';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsService } from './contacts.service';
import { EventBusService } from './event-bus.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime' 
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'  
import 'rxjs/add/operator/merge' 

@NgModule({
  declarations: [ContactsAppComponent,
                 ContactsHeaderComponent,
                 ContactsListComponent,
                 ContactsDetailComponentComponent,
                 ContactsEditorComponent,
                 ContactsDetailViewComponent],
  providers: [ContactsService,
              {provide: 'apiEndPoint' ,useValue:'http://localhost:4201/api/'},
              EventBusService],
  imports: [BrowserModule, 
            RouterModule.forRoot(ContactsAppRoutes),
            HttpModule,
            FormsModule],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
