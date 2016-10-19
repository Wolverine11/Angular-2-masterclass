import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponentComponent } from './contacts-detail/contacts-detail-component.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

export const ContactsAppRoutes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactsDetailComponentComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent }
]